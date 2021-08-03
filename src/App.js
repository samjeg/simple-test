import logo from './logo.svg';
import './App.css';
import {BrowserRouter as Router} from 'react-router-dom';
import Nav from './components/nav';
import Car from './components/car';
import Routes from './components/routes';
import data from './data/cars.json';

function App() {
  return (
  	  <Router>
  	      <Nav />
	      <Routes />
      </Router>
  );
}

export default App;
