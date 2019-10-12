import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

const Home = (props) => {
  if (props.currentUser) {
    return (
      <div>
        <h1>Welcome {props.currentUser.username}</h1>
      </div>
    );
  }
  else {
    return (
      <div>
        <h1>Welcome</h1>
      </div>
    );
  }
};

export default withTracker(() => {

  return {
    currentUser: Meteor.user(),
  };
})(Home);