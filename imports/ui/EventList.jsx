import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Events } from "../api/events.js";
import Event from "./Event.jsx";

const EventList = (props) => {
  const [text, setText] = useState("");
  const inRefText = useRef();
  const currentUserId = props.currentUser && props.currentUser._id;

  const onChangeText = () => {
    setText(inRefText.current.value);
  }

  const handleSubmit = (event) => {
    event.preventDefault();
    Meteor.call("events.insert", text);
    setText("");
  }

  const renderEvents = props.events.map(function(event) {
    return (
      <Event
        key={event._id}
        event={event}
      />
    );
  });

  return (
    <div className="container">
      <header>
        <h1>Add an Event</h1>

        <form className="new-event" onSubmit={handleSubmit}>
          <input
            onChange={onChangeText}
            type="text"
            ref={inRefText}
            placeholder="Create a new event"
          />
        </form>
      </header>

      <ul>{renderEvents}</ul>
    </div>
  );
}

EventList.propTypes = {
  events: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

const EventListWrapper = withTracker(() => {
  Meteor.subscribe("events");
  return {
    events: Events.find({}).fetch(),
    currentUser: Meteor.user()
  };
})(EventList);

export default EventListWrapper;