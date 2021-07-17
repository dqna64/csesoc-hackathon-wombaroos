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
import Cards from "./Components/Group/Cards";
import "./App.css"
export default function App() {
  return (
    <div className="App">
    <Router>
      <div >
        <div className="home">  
            <Link to="/" className="homeLink">Home</Link>
        </div>

        <hr />
        
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/group/:groupname" component={Group} />
          <Route path="/deck/:groupname/:deckname" component={Cards} />
          <Route path="/add-group">
            <AddGroup />
          </Route>
        </Switch>
      </div>
    </Router>
    </div>
  );
}