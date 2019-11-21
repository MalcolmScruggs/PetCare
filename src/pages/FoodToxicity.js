import React, {Component} from "react";
import {Alert, Card, CardBody, CardSubtitle, CardTitle, Col, FormGroup, Input, Label, Button} from 'reactstrap';
import {observer} from "mobx-react";

class FoodToxicity extends Component {

    constructor(props) {
        super();
        const {foodStore} = props;
        const {foods} = foodStore;
        this.state = {
            selected_type: 'dog',
            current_toxic_foods: (foods.filter(food => food.type === 'dog')).map(food => food.name),
            safe_foods: (foods.filter(food => food.type === 'all')).map(food => food.name),
            selected_food: '',
            toxic: null,
        }
    }

    selectAnimalType = (e) => {
        e.preventDefault();
        const {foodStore} = this.props;
        const {foods} = foodStore;
        let cur_toxic = (foods.filter(food => food.type === e.target.value.toLowerCase())).map(food => food.name);
        this.setState({
            selected_type: e.target.value.toLowerCase(),
            current_toxic_foods: cur_toxic,
            safe_foods: (foods.filter(food => food.type === 'all')).map(food => food.name).filter(food => !cur_toxic.includes(food)),
        });
    };

    updateFood = (e) => {
        e.preventDefault();
        this.setState({
            selected_food: e.target.value.toLowerCase(),
        });
    }

    checkToxicity = (e) => {
        e.preventDefault();
        console.log("State: ", this.state);
        if (this.state.current_toxic_foods.includes(this.state.selected_food)) {
            this.setState({
                toxicity: true,
            });
        } else if (this.state.safe_foods.includes(this.state.selected_food)) {
            this.setState({
                toxicity: false,
            });
        } else {
            this.setState({
                toxicity: "not_in_list",
            });
        }
    }

    render() {
        let cur_toxicity = this.state.toxicity;
        let alert;
        if (cur_toxicity === true) {
            alert = <Alert color="danger">Toxic! Do not feed.</Alert>
        } else if (cur_toxicity === false) {
            alert = <Alert color="success">Safe for consumption!</Alert>
        } else if (cur_toxicity === 'not_in_list') {
            alert = <Alert color="warning">Proceed with Caution! Not in our database.</Alert>
        } else {
            alert = null;
        }
        return (
            <div className="container">
                <Col md="12" lg="6" className="my-3">
                    <Card>
                        <CardBody>
                            <CardTitle className="h3 font-weight-bolder">Food Toxicity</CardTitle>
                            <CardSubtitle>Lookup toxicity for specific foods before feeding your pet!</CardSubtitle>
                        </CardBody>
                    </Card>
                    <Card>
                        <CardBody>
                                <FormGroup>
                                    <Label for="petTypeFood">Pet Type:</Label>
                                    <Input type="select" name="petTypeFood" id="petTypeFood"
                                           onChange={this.selectAnimalType}>
                                        <option>Dog</option>
                                        <option>Cat</option>
                                    </Input>
                                </FormGroup>
                                <FormGroup>
                                    <Label for="selectedFood">Food:</Label>
                                    <Input type="text" name="selectedFood" id="selectedFood" placeholder="Search food" required
                                           onChange={this.updateFood}>
                                    </Input>
                                </FormGroup>
                                <Button onClick={this.checkToxicity}>Check now!</Button>
                                {alert}
                        </CardBody>
                    </Card>

                </Col>
            </div>
        );
    }
}

export default observer(FoodToxicity)