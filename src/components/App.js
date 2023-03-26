import React from 'react'
import '../styles/App.css';
import { Link, BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Home from './Home';
import AboutUs from './AboutUs';
const App = () => {

  return (
    <div id="main">
      <BrowserRouter>
        <Switch>
          <Route exact path={"/"}>
            <div id='navbar'>
             <div id='home-link'>  <Link to={"/home"}>Home</Link></div>
              <div id='aboutus-link'><Link to={"/about"}>About Us</Link></div>
            </div>
          </Route>
          <Route exact path={"/home"}>
            <Home />
          </Route>
          <Route exact path={"/about"} >
            <AboutUs />
          </Route>
        </Switch>
      </BrowserRouter>
    </div >
  )
}


export default App;
