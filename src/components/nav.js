import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import dataset from '../data/cars.json';
import Car from './car';


const Nav = () => {
  return (
    <Switch>
      <Route exact path="/">
        <ul>
          <li>
            <Link to="/ford">Ford</Link>
          </li>
          <li>
            <Link to="/hyundai" >Hyundai</Link>
          </li>
          <li>
            <Link to="/mercedes" >Mercedes</Link>
          </li>
        </ul>
      </Route> 
    </Switch>
)};


export default Nav;