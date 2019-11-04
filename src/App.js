import React from 'react';
import './App.css';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import FoodToxicity from "./pages/FoodToxicity";
import VetRecords from "./pages/VetRecords";
import Home from "./pages/Home";

function App() {
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
              <FoodToxicity />
            </Route>
            <Route path="/vet_records">
              <VetRecords />
            </Route>
            <Route path="/">
              <Home />
            </Route>
          </Switch>
        </div>
      </Router>
  );
}

export default App;
