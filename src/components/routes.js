import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import dataset from '../data/cars.json';

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



const Ford = ({data}) => {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.colour}</p>
    </div>
  );
}

const Hyundai = ({data}) => {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.colour}</p>
    </div>
  );
}

const Mercedes = ({data}) => {
  return (
    <div>
      <p>{data.name}</p>
      <p>{data.colour}</p>
    </div>
  );
}

const BasicExample = () => {
  return (
    <Router>
      <div>
        <ul>
          <li>
            <Link to="/">Ford</Link>
          </li>
          <li>
            <Link to="/hyundai">Hyundai</Link>
          </li>
          <li>
            <Link to="/mercedes">Mercedes</Link>
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
            <Ford data={dataset[0]}/>
          </Route>
          <Route path="/hyundai">
            <Hyundai data={dataset[1]}/>
          </Route>
          <Route path="/mercedes">
            <Mercedes data={dataset[2]}/>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}


export default BasicExample;