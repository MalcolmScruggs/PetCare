import React, { Component } from 'react';
import './App.css';
import {BrowserRouter as Router, Link, Route, Switch} from "react-router-dom";
import FoodToxicity from "./pages/FoodToxicity";
import VetRecords from "./pages/VetRecords";
import Home from "./pages/Home";
import PetStore from "./stores/Pets"
import FoodStore from "./stores/Foods"
import {action, decorate, observable} from "mobx";

decorate(PetStore, {
    pets: observable,
    addPet: action,
});
const petStore = new PetStore();
decorate(FoodStore, {
    foods: observable,
    addFood: action,
});
const foodStore = new FoodStore();

class App extends Component {
    render() {
        return (
            <Router>
                <div>
                    <nav>
                        <ul>
                            <li>
                                <Link to="/">Home</Link>
                            </li>
                            <li>
                                <Link to="/food_toxicity">Food Toxicity</Link>
                            </li>
                            <li>
                                <Link to="/vet_records">Vet Records</Link>
                            </li>
                        </ul>
                    </nav>

                    {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
                    <Switch>
                        <Route path="/food_toxicity">
                            <FoodToxicity petStore={petStore, foodStore}/>
                        </Route>
                        <Route path="/vet_records">
                            <VetRecords petStore={petStore}/>
                        </Route>
                        <Route path="/">
                            <Home petStore={petStore}/>
                        </Route>
                    </Switch>
                </div>
            </Router>
        );
    }
}

export default App;
