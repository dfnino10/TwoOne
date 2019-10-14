import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import Home from "./Home.jsx";
import ShoppingList from "./ShoppingList.jsx";
import EventList from "./EventList";
import Navbar from "./NavBar";
import Calendar from "./Calendar";
import Members from "./Members.jsx";
import Mistake from "./Mistake.jsx";
import "./App.css";

const App = props => {
  if (props.currentUser) {
    return (
      <div>
        <Navbar></Navbar>
        <Router>
          <Route exact path="/" component={Home} />
          <Route exact path="/Shopping-List" component={ShoppingList} />
          <Route exact path="/Calendar" component={Calendar}></Route>
          <Route exact path="/Members" component={Members} />
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
          <Route exact path="/Shopping-List" component={Mistake} />
          <Route exact path="/Calendar" component={Mistake}></Route>
          <Route exact path="/Members" component={Mistake}/>
          <Route exact path="/Event-List" component={Mistake} />
        </Router>
      </div>
    );
  }
};

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(App);
