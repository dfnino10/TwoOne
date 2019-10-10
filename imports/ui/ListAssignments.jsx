import React from "react";
import PropTypes from "prop-types";

const ListAssignments = (props) => {
  return (
    <div className="ListAssignments">
      {props.assignments.map(am => (
        <div key={am.name}>
          {am.name}
        </div>
      ))}
    </div>
  );
}

ListAssignments.propTypes = {
  assignments: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default ListAssignments;