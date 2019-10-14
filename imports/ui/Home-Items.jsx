import React from "react";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Items } from "../api/items.js";
import Item from "./Item.jsx";

const ItemsList = props => {
  const renderItems = props.items.map(function(item) {
    return <Item key={item._id} item={item} />;
  });

  return (
    <div>
      <ul>{renderItems}</ul>
    </div>
  );
};

ItemsList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

const ItemsListWrapper = withTracker(() => {
  Meteor.subscribe("items");
  return {
    items: Items.find({}).fetch()
  };
})(ItemsList);

export default ItemsListWrapper;
