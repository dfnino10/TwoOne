import React from "react";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";

const Event = props => {
  const deleteThisEvent = () => {
    Meteor.call("events.remove", props.event._id);
  };

  return (
    <li>
      <span className="title">{props.event.title}</span>
      <span className="start">{props.event.start}</span>
      <span className="end">{props.event.end}</span>

      <button className="btn btn-danger delete" onClick={deleteThisEvent}>
        &times;
      </button>
    </li>
  );
};

Event.propTypes = {
  event: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default Event;
