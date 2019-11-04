import React from "react";
import {observer} from "mobx-react";

function FoodToxicity({ petStore }) {
    const { pets } = petStore
    return (
        <div>
            <h1>Food Toxicity</h1>{
            pets.map((pet,idx) => <div>{pet.name}</div>)}
        </div>
    );

}

export default observer(FoodToxicity)