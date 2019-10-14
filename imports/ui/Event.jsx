import React from "react";
import { Meteor } from "meteor/meteor";
import { Events } from "../api/events.js";

const Event = props => {
  const deleteThisEvent = () => {
    Meteor.call("events.remove", props.event._id);
  };

  return (
    <li>
      <span className="text">{props.event.text}</span>

      <button className="delete" onClick={deleteThisEvent}>
        &times;
      </button>
    </li>
  );
};

export default Event;
