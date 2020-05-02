import { ADD_SHOPPING_ITEM } from "../constants/action-types";

const forbiddenWords = ["car", "jewelry"];

export function forbiddenWordsMiddleware({ dispatch }) {
  return function(next) {
    return function(action) {
      // do your stuff
      if (action.type === ADD_SHOPPING_ITEM) {
        
        const foundWord = forbiddenWords.filter(word =>
          action.payload.shoppingItem.includes(word)
        );

        if (foundWord.length) {
          return dispatch({ type: "FOUND_BAD_WORD" });
        }
      }
      return next(action);
    };
  };
}