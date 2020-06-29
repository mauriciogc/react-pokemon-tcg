import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Types from "./Pages/Types"
import Cards from "./Pages/Cards"

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <p>Headers</p>
          <Switch>
            <Route path="/error404">
              <p>Error 404</p>
            </Route>
            <Route exact path="/:type">
              <Cards/>
            </Route>
            <Route exact path="/:type/:id">
              <p>Card</p>
            </Route>
            <Route exact path="/">
              <Types />
            </Route>
            <Route path="*">
              <p>Error 404</p>
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
