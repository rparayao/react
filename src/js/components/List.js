// src/js/components/List.js

import React from "react";
import { connect } from "react-redux";

const mapStateToProps = state => {
  return { shoppingList: state.shoppingList };
};

const ConnectedList = ({ shoppingList }) => (
  <ul>
    {shoppingList.map(element => (
      <li key={element.id}>{element.shoppingItem}</li>
    ))}
  </ul>
);

const List = connect(mapStateToProps)(ConnectedList);

export default List;