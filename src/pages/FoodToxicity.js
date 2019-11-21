import React, {Component} from "react";
import {Card, CardBody, CardSubtitle, CardTitle, Col, FormGroup, Input, Label, Button} from 'reactstrap';
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
    }

    render() {
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
                        </CardBody>
                    </Card>

                </Col>
            </div>
        );
    }
}

export default observer(FoodToxicity)