import React from "react";
import { Meteor } from "meteor/meteor";
import { Events } from "../api/events.js";

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

export default Event;
