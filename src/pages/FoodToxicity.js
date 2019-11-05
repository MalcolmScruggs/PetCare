import React from "react";
import {observer} from "mobx-react";

function FoodToxicity({ petStore }) {
    const { pets, foods } = petStore
    return (
        <div>
            <h1>Food Toxicity</h1>{
            foods.map((food,idx) => <div>{food.name}&nbsp;&nbsp;{food.type}</div>)}
        </div>
    );

}

export default observer(FoodToxicity)