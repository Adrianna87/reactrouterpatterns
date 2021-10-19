import React from "react";
import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import ColorList from "./ColorList";
import Color from "./Color";

function Routes() {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors"><ColorList /></Route>
        <Route exact path="/colors/:color"><Color /></Route>
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
