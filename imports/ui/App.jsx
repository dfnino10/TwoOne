import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import Route from "react-router-dom/Route";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import Home from "./Home.jsx";
import Item from "./Item.jsx";
import Navbar from "./NavBar";
import './App.css';

const App = (props) => {
  if (props.currentUser)
  {
    return (
      <div>
        <Navbar></Navbar>
        <Router>
          <Route exact path="/" component={Home}/>
          <Route exact path="/Shopping-List" component={Item}/>
        </Router>
      </div>
    );
  }
  else {
    return (
      <div>
        <Navbar></Navbar>
        <Router>
          <Route exact path="/" component={Home}/>
        </Router>
      </div>
    );
  }

};

export default withTracker(() => {

  return {
    currentUser: Meteor.user(),
  };
})(App);
