import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import HomeCalendar from "./Home-Calendar";
import ShoppingList from "./ShoppingList";
import HomeItems from "./Home-Items";

const Home = props => {
  if (props.currentUser) {
    return (
      <div className="container">
        <h1>Welcome {props.currentUser.username}</h1>
        <HomeCalendar userName={props.currentUser.username}></HomeCalendar>
        <div className="float-left ml-3">
          <h3>Don't forgget what is in your shopping list</h3>
          <HomeItems></HomeItems>
        </div>
      </div>
    );
  } else {
    return (
      <div className="container">
        <h1>Welcome</h1>
      </div>
    );
  }
};

export default withTracker(() => {
  return {
    currentUser: Meteor.user()
  };
})(Home);
