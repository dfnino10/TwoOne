import React, { useState } from "react";
import { withTracker } from "meteor/react-meteor-data";
import { Items } from "../api/items.js";
import { Meteor } from "meteor/meteor";
import PropTypes from "prop-types";
import ShoppingList from "./ShoppingList.jsx";

const Item = (props) => {
  const [name, setName] = useState("");
  const [err, setErr] = useState("");

  const ohChangeName = (event) => {
    setName(event.target.value);
  }

  const handleOnPress = (event) => {
    Meteor.call("items.insert", name, (err, res) =>{
      if (err) {
        setErr(err);
        return;
      }
      console.log("Funcionó :3");
    })
  }

  return (
    <div>
      <h1>Create a new Item</h1>
      <div>
        <label>Name of Item:
        <input onChange={ohChangeName} type="text" id="name" placeholder="Name"/>
        </label>
      </div>
      <div>
        <button type="button" onClick={handleOnPress}>Create</button>
        <ShoppingList items ={props.items}></ShoppingList>
      </div>
    </div>
  );
};

Item.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

//Lo que sea que retorne el withTracker en el primer parametro solo es lo que va a recibir App como props
const ItemWrapper = withTracker(() => {
  Meteor.subscribe("items");
  return {
    items: Items.find({}).fetch()
  };
})(Item);

export default ItemWrapper;