import React, { useState, useRef } from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Events } from "../api/events.js";
import Event from "./Event.jsx";

const EventList = props => {
  const [title, setTitle] = useState("");
  const inRefTitle = useRef();
  const [start, setStart] = useState("");
  const inRefStart = useRef();
  const [end, setEnd] = useState("");
  const inRefEnd = useRef();
  const currentUserId = props.currentUser && props.currentUser._id;

  const onChangeTitle = () => {
    setTitle(inRefTitle.current.value);
  };

  const onChangeStart = () => {
    setStart(inRefStart.current.value);
  };

  const onChangeEnd = () => {
    setEnd(inRefEnd.current.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    Meteor.call("events.insert", title, start, end);
    setTitle("");
    setStart("");
    setEnd("");
  };

  const renderEvents = props.events.map(function(event) {
    return <Event key={event._id} event={event} />;
  });

  return (
    <div className="container">
      <header>
        <h1>Add an Event</h1>
        <form>
          <div className="form-group">
            <label>
              Title of the event
              <input
                className="form-control"
                onChange={onChangeTitle}
                type="title"
                ref={inRefTitle}
                placeholder="Title for the event"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              Start of the event
              <input
                className="form-control"
                onChange={onChangeStart}
                type="date"
                ref={inRefStart}
                placeholder="yyyy-mm-dd"
              />
            </label>
          </div>
          <div className="form-group">
            <label>
              End of the event
              <input
                className="form-control"
                onChange={onChangeEnd}
                type="date"
                ref={inRefEnd}
                placeholder="yyyy-mm-dd"
              />
            </label>
          </div>
        </form>
        <button className="btn btn-success" onClick={handleSubmit}>
          Add event
        </button>
      </header>
      <ul>{renderEvents}</ul>
    </div>
  );
};

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
