import React, {Component} from 'react';
import './App.css';
import {BrowserRouter as Router, Route, Switch} from "react-router-dom";
import {action, decorate, observable} from "mobx";
import FoodToxicity from "./pages/FoodToxicity";
import VetRecords from "./pages/VetRecords";
import Home from "./pages/Home";
import PetStore from "./stores/Pets"
import FoodStore from "./stores/Foods"
import EventsStore from "./stores/Events"
import Navigation from "./Navigation";
import CalendarPage from "./pages/Calendar/CalendarPage";

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

decorate(EventsStore, {
    events: observable,
    addEvent: action,
});
const eventStore = new EventsStore();

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
                                    <FoodToxicity petStore={petStore} foodStore={foodStore}/>
                                </Route>
                                <Route path="/vet_records">
                                    <VetRecords petStore={petStore}/>
                                </Route>
                                <Route path="/calendar">
                                    <CalendarPage petStore={petStore} eventStore={eventStore}/>
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
