import React, { useState, useRef } from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import { Meteor } from "meteor/meteor";
import { withTracker } from "meteor/react-meteor-data";
import { Items } from "../api/items.js";
import Footer from "./Footer.jsx";
import Item from "./Item.jsx";
import "./ShoppingList.css";

const ShoppingList = props => {
  const [text, setText] = useState("");
  const inRefText = useRef();
  const currentUserId = props.currentUser && props.currentUser._id;

  const onChangeText = () => {
    setText(inRefText.current.value);
  };

  const handleSubmit = event => {
    event.preventDefault();
    Meteor.call("items.insert", text);
    setText("");
  };

  const renderItems = props.items.map(function(item) {
    return <Item key={item._id} item={item} />;
  });

  return (
    <div className="container containerSL">
      <header>
        <h1 className="titleShopping">Shopping List</h1>

        <form className="new-item" onSubmit={handleSubmit}>
          <input
            onChange={onChangeText}
            type="text"
            ref={inRefText}
            placeholder="Create a new item"
          />
        </form>
      </header>

      <ul className="list">{renderItems}</ul>
    </div>
  );
};

ShoppingList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

const ShoppingListWrapper = withTracker(() => {
  Meteor.subscribe("items");
  return {
    items: Items.find({}).fetch()
  };
})(ShoppingList);

export default ShoppingListWrapper;
