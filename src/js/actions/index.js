// src/js/actions/index.js

import { ADD_SHOPPING_ITEM } from "../constants/action-types";

export function addShoppingItem(payload) {
  return { type: ADD_SHOPPING_ITEM, payload };
}