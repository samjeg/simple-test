import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import dataset from '../data/cars.json';
import Car from './car';

const Routes = () => {
  return (
    <Switch>
        <Route exact path="/ford">
          <Car data={dataset[0]}/>
        </Route>
        <Route path="/hyundai">
          <Car data={dataset[1]}/>
        </Route>
        <Route path="/mercedes">
          <Car data={dataset[2]}/>
        </Route>
    </Switch>
)};


export default Routes;