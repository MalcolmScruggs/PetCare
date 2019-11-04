import React from "react";
import {observer} from "mobx-react";
import { Button } from 'reactstrap';

function Home({ petStore }) {
    const { pets } = petStore
    console.log(petStore);
    return (
    <div>
        <h1>Home</h1>
        <Button onClick={() => petStore.addPet("test", 25)} color="primary">Add Pet</Button>{' '}
        {pets.map((pet,idx) => <PetView pet={pet} key={idx} />)}
    </div>
)};

function PetView(props) {
    const {pet} = props;
    return(
        <div>
            {pet.name}
            {pet.weight}
        </div>
    );
}

export default observer(Home)