import React, {Component} from "react";
import {Card, CardBody, CardSubtitle, CardTitle, Col, FormFeedback, FormGroup, Input, Label,} from 'reactstrap';
import {observer} from "mobx-react";

class FoodToxicity extends Component {

    constructor(props) {
        super();
        const {foodStore} = props;
        const {foods} = foodStore;
        this.state = {
            selected_type: 'dog',
            current_foods: (foods.filter(food => food.type === 'dog')).map(food => food.name),
            selected_food: '',
        }
    }

    selectAnimalType = (e) => {
        e.preventDefault();
        const {foodStore} = this.props;
        const {foods} = foodStore;
        let food;
        let foodList = [];
        for (food of foods) {
            // console.log(food.name+"|"+food.type);
            if (food.type === this.state.selected_type.toLowerCase()) {
                foodList.push(food.name);
            }
        }
        this.setState({
            selected_type: e.target.value.toLowerCase(),
            current_foods: foodList,
        });
        console.log("State: ", this.state);
    };

    checkToxicity = (e) => {
        e.preventDefault();
        this.setState({
            selected_food: e.target.value.toLowerCase(),
        })
    }

    render() {
        let checkFood;
        if (this.state.selected_food === '') {
            checkFood =
                <FormGroup>
                    <Label for="selectedFood">Food:</Label>
                    <Input type="text" name="selectedFood" id="selectedFood" placeholder="Search food" required
                           onChange={this.checkToxicity}>
                    </Input>
                </FormGroup>;
        } else {
            console.log(this.state.selected_food);
            console.log(this.state.current_foods.indexOf(this.state.selected_food) >= 0);
            if (this.state.current_foods.indexOf(this.state.selected_food) >= 0) {
                checkFood =
                    <FormGroup>
                        <Label for="selectedFood">Food:</Label>
                        <Input invalid type="text" name="selectedFood" id="selectedFood" placeholder="Search food"
                               required
                               onChange={this.checkToxicity}>
                        </Input>
                        <FormFeedback>Toxic</FormFeedback>
                    </FormGroup>;
            } else {
                checkFood =
                    <FormGroup>
                        <Label for="selectedFood">Food:</Label>
                        <Input valid type="text" name="selectedFood" id="selectedFood" placeholder="Search food"
                               required
                               onChange={this.checkToxicity}>
                        </Input>
                        <FormFeedback valid>Safe</FormFeedback>
                    </FormGroup>;
            }
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
                                {checkFood}
                        </CardBody>
                    </Card>

                </Col>
            </div>
        );
    }
}

export default observer(FoodToxicity)