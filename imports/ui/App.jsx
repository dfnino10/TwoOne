import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import Home from "./Home.jsx";
import ShoppingList from "./ShoppingList.jsx";
import EventList from "./EventList";
import Navbar from "./NavBar";
import Calendar from "./Calendar";
import Profile from "./Profile.jsx";
import Footer from "./Footer.jsx";

const App = (props) => {
  if (props.currentUser) {
    return (
      <div>
        <Navbar></Navbar>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/Shopping-List" component={ShoppingList} />
          <Route exact path="/Calendar" component={Calendar}/>
          <Route exact path="/Profile" component={Profile} />
          <Route exact path="/Event-List" component={EventList} />
        </Router>
      </div>
    );
  } else {
    return (
      <div>
        <Navbar></Navbar>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/Shopping-List" component={Home} />
          <Route exact path="/Calendar" component={Home}/>
          <Route exact path="/Profile" component={Home} />
          <Route exact path="/Event-List" component={Home} />
        </Router>
        <Footer></Footer>
      </div>
    );
  }
};

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(App);
