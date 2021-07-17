import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import Home from "./Components/Home/Home"
import Main from "./Components/Main/Main"
import Group from "./Components/Group/Group"
import AddGroup from "./Components/AddGroup/AddGroup";
import Flashcards from "./Components/Group/Flashcards";
import "./App.css"
export default function App() {
  return (
    <div className="App">
        <Router>
        <div >
            <div className="home">  
                <Link to="/" className="homeLink">Home</Link>
            </div>

            {/* <hr /> */}
            <div className="switch-container">
                <Switch>
                    <Route exact path="/">
                        <Home />
                    </Route>
                    <Route path="/group/:groupname" component={Group} />
                    <Route path="/deck/:groupname/:deckname" component={Flashcards} />
                    <Route path="/add-group">
                        <AddGroup />
                    </Route>
                </Switch>
            </div>
        </div>
        </Router>
    </div>
  );
}