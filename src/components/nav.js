import React from "react";
import {
  BrowserRouter as Router,
  Link
} from "react-router-dom";

import dataset from '../data/cars.json';
import Car from './car';


// This site has 3 pages, all of which are rendered
// dynamically in the browser (not server rendered).
//
// Although the page does not ever refresh, notice how
// React Router keeps the URL up to date as you navigate
// through the site. This preserves the browser history,
// making sure things like the back button and bookmarks
// work properly.

// You can think of these components as "pages"
// in your app.

const Nav = () => {
  return (
    <div>
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
    </div>
)};


export default Nav;