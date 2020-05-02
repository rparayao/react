// src/js/reducers/index.js

import { ADD_SHOPPING_ITEM } from "../constants/action-types";

const initialState = {
  shoppingList: []
};

function rootReducer(state = initialState, action) {
    if (action.type === ADD_SHOPPING_ITEM) {
      return Object.assign({}, state, {
        shoppingList: state.shoppingList.concat(action.payload)
      });
    }
    return state;
}

export default rootReducer;