import { Route, Switch, Redirect, BrowserRouter } from "react-router-dom";
import React, { useState } from "react";
import ColorList from "./ColorList";
import Color from "./Color";
import NewColorForm from "./NewColorForm";

function Routes({ colors }) {
  const defaultColors = colors
  const [colorList, updateColorList] = useState(defaultColors)

  function handleAdd(newColorObj) {
    updateColorList(prevColors => ({ ...prevColors, ...newColorObj }));
  }

  return (
    <BrowserRouter>
      <Switch>
        <Route exact path="/colors"><ColorList colors={colorList} /></Route>
        <Route exact path="/colors/new"><NewColorForm addColor={handleAdd} /></Route>
        <Route exact path="/colors/:color"><Color /></Route>
        <Redirect to="/colors" />
      </Switch>
    </BrowserRouter>
  );
}

export default Routes;
