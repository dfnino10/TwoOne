import React from "react";
import { Meteor } from "meteor/meteor";
import classnames from "classnames";
import PropTypes from "prop-types";

const Item = props => {
  const itemClassName = classnames({
    checked: props.item.checked
  });

  const toggleChecked = () => {
    Meteor.call("items.setChecked", props.item._id, !props.item.checked);
  };

  const onKeyPressChecked = event => {
    if (event.key == "Enter") {
      Meteor.call("items.setChecked", props.item._id, !props.item.checked);
    }
  };

  const deleteThisItem = () => {
    Meteor.call("items.remove", props.item._id);
  };

  return (
    <li className={itemClassName}>
      <input
        type="checkbox"
        readOnly
        checked={!!props.item.checked}
        onClick={toggleChecked}
        onKeyPress={onKeyPressChecked}
      />

      <span className="text">{props.item.text}</span>

      <button className="delete" onClick={deleteThisItem}>
        &times;
      </button>
    </li>
  );
};

Item.propTypes = {
  item: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default Item;
