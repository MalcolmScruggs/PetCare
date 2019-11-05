import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {action, decorate, observable} from "mobx";

import FoodToxicity from "./pages/FoodToxicity";
import VetRecords from "./pages/VetRecords";
import Home from "./pages/Home";
import PetStore from "./stores/Pets"
import Navigation from "./Navigation";

decorate(PetStore, {
    pets: observable,
    addPet: action,
});
const petStore = new PetStore();

class App extends Component {
    render() {
        return (
            <Router>
                <div className="container-fluid">
                    <div className="row">
                        <main className="main-content col-lg-12 col-md-12 col-sm-12 p-0">
                            <Navigation/>
                            <Switch>
                                <Route path="/food_toxicity">
                                    <FoodToxicity petStore={petStore}/>
                                </Route>
                                <Route path="/vet_records">
                                    <VetRecords petStore={petStore}/>
                                </Route>
                                <Route path="/">
                                    <Home petStore={petStore}/>
                                </Route>
                            </Switch>
                        </main>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
