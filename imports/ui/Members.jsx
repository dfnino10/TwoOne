import React from "react";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";

const Members = (props) => {
  console.log(props.users)
  return (
    <div className="Members">
      {props.users.map(u => (
        <div key={u._id}>
          {u.username}
        </div>
      ))}
    </div>
  );
};

export default withTracker(() => {
  return {
    users: Meteor.users.find({}).fetch()
  };
})(Members);