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

export default function App() {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/group">Group</Link>
          </li>
        </ul>

        <hr />

        {/*
          A <Switch> looks through all its children <Route>
          elements and renders the first one whose path
          matches the current URL. Use a <Switch> any time
          you have multiple routes, but you want only one
          of them to render at a time
        */}
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route path="/group">
            <Group />
          </Route>
          <Route path="/add-group">
            <AddGroup />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}