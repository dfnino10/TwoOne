import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import Home from "./Home.jsx";
import ShoppingList from "./ShoppingList.jsx";
import EventList from "./EventList.jsx";
import Navbar from "./NavBar.jsx";
import Calendar from "./Calendar.jsx";
import Members from "./Members.jsx";
import Mistake from "./Mistake.jsx";
import Footer from "./Footer.jsx";
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
          <Route exact path="/Tasks" component={EventList} />
        </Router>
        <div className="fixed-bottom mt-5">
          <Footer></Footer>
        </div>
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
          <Route exact path="/Members" component={Mistake} />
          <Route exact path="/Tasks" component={Mistake} />
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
