import React from "react";
import { Meteor } from "meteor/meteor";
import classnames from "classnames";
import { Events } from "../api/calendarEvents";

const Event = props => {
  const deleteThisEvent = () => {
    Meteor.call("calendarEvents.remove", props.event._id);
  };

  return (
    <li className={eventClassName}>
      <span className="text">{props.event.text}</span>

      <button className="delete" onClick={deleteThisEvent}>
        &times;
      </button>
    </li>
  );
};

export default Event;
