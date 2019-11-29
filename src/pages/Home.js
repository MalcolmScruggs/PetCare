import React from "react";
import {observer} from "mobx-react";
import {
    Card,
    CardBody,
    CardImg,
    CardSubtitle,
    CardTitle,
    Col,
} from 'reactstrap';
import AddPetModal from "./AddPetModal";

function Home({ petStore }) {
    const { pets } = petStore;
    console.log(petStore);
    return (
    <div className="container">
        <h1 className="">Your Pets</h1>
        <AddPetModal buttonLabel="Add Pet" petStore={petStore} modalHeader="Add Pet" />
        <div className="mt-3 row">
            {pets.map((pet) => <PetView pet={pet} key={pet.id} petStore={petStore} />)}
        </div>
    </div>
    )
}

function PetView(props) {
    const {pet, petStore} = props;
    const {name, breed, weight, age, notes, img} = pet;
    return(
        <Col md="12" lg="6" className="my-3">
            <Card>
                <CardImg top width="100%" src={img} alt="Pet Image" />
                <CardBody>
                    <CardTitle className="h3 font-weight-bolder">{name}</CardTitle>
                    <CardSubtitle>{notes}</CardSubtitle>

                    <div><u>Breed:</u> {breed}</div>
                    <div><u>Age:</u> {age}</div>
                    <div><u>Weight:</u> {weight}lbs</div>
                    <AddPetModal
                        buttonLabel="Edit"
                        buttonColor="secondary"
                        petStore={petStore}
                        petToEdit={pet}
                        modalHeader="Edit Pet"
                    />
                </CardBody>
            </Card>
        </Col>
    );
}

export default observer(Home)