import React from "react";
import { Route, Switch, Redirect } from "react-router-dom";
import DogHome from "./DogHome";
import DogDetails from "./DogDetails";

function Routes({ dogs }) {
  return (
    <Switch>
      <Route exact path="/dogs" >
        <DogHome dogs={dogs} />
      </Route>
      <Route path="/dogs/:name" >
        <DogDetails dogs={dogs} />
      </Route>
      <Redirect to="/dogs" />
    </Switch>
  );
}

export default Routes;