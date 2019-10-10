import React from "react";
import PropTypes from "prop-types";

const ShoppingList = (props) => {
  return (
    <div className="ShoppingList">
      {props.items.map(it => (
        <div key={it.name}>
          {it.name}
        </div>
      ))}
    </div>
  );
}

ShoppingList.propTypes = {
  items: PropTypes.arrayOf(PropTypes.object.isRequired).isRequired
};

export default ShoppingList;