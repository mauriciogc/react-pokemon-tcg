import React, { useState } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import "./App.css";

import Types from "./Pages/Types";
import Cards from "./Pages/Cards";
import Card from "./Pages/Card";
import Error404 from "./Pages/Error404";

import Header from "./Components/Header";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Header/>
          <Switch>
            <Route path="/error404">
              <Error404 />
            </Route>
            <Route exact path="/:type">
              <Cards />
            </Route>
            <Route exact path="/:type/:id">
              <Card />
            </Route>
            <Route exact path="/">
              <Types />
            </Route>
            <Route path="*">
              <Error404 />
            </Route>
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
