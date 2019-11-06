import React from "react";
import {observer} from "mobx-react";

function FoodToxicity({ petStore, foodStore }) {
    const { pets } = petStore
    const { foods} = foodStore
    return (
        <div>
            <h1>Food Toxicity</h1>{
            foods.map((food,idx) => <div>{food.name}&nbsp;&nbsp;{food.type}</div>)}
        </div>
    );

}

export default observer(FoodToxicity)