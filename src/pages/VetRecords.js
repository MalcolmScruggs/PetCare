import React from "react";
import {observer} from "mobx-react";

function VetRecords({ petStore }) {
    const { pets } = petStore
    return (
        <div>
            <h1>Vet Records</h1>{
            pets.map((pet,idx) => <div>{pet.name}</div>)}
        </div>
    );

}

export default observer(VetRecords)