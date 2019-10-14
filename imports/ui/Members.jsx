import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import { withTracker } from "meteor/react-meteor-data";

const Members = props => {
  console.log(props.users);
  return (
    <div className="container">
      {props.users.map(u => (
        <div key={u._id}>
          {u.username}
          {u.profile.name}
          {u.profile.surname}
          {u.profile.gender}
          {u.profile.country}
        </div>
      ))}
    </div>
  );
};

Members.propTypes = {
  users: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

const MembersWrapper = withTracker(() => {
  return {
    users: Meteor.users.find({}).fetch()
  };
})(Members);

export default MembersWrapper;
