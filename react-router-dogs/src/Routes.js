import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DogHome from "./DogHome";

function Routes() {
  return (
    <Switch>
      <Route exact path="/dogs" >
        <DogHome />
      </Route>
      <Route path="/dogs/:name" >
        <DogDetails />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;