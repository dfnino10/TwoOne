import React, { useState } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Assignments } from "../api/assignments.js";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import ListAssignments from "./ListAssignments.jsx";

const Assignment = (props) => {
  const [name, setName] = useState("");
  const [err, setErr] = useState("");

  const ohChangeName = (event) => {
    setName(event.target.value);
  }

  const handleOnPress = (event) => {
    Meteor.call("assignments.insert", name, (err, res) =>{
      if (err) {
        setErr(err);
        return;
      }
      console.log("Funcionó :3");
    })
  }

  return (
    <div>
      <h1>Create a new Assignment</h1>
      <div>
        <label>Name of Assignment:
        <input onChange={ohChangeName} type="text" id="name" placeholder="name"/>
        </label>
      </div>
      <div>
        <button type="button" onClick={handleOnPress}>Create</button>
        <ListAssignments assignments ={props.assignments}></ListAssignments>
      </div>
    </div>
  );
};

Assignment.propTypes = {
  assignments: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

//Lo que sea que retorne el withTracker en el primer parametro solo es lo que va a recibir App como props
const AssignmentWrapper = withTracker(() => {
  Meteor.subscribe("assignments");
  return {
    assignments: Assignments.find({}).fetch()
  };
})(Assignment);

export default AssignmentWrapper;