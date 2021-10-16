import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";
import actionTypes from "./contacts-actions";

const items = createReducer([], {
  [actionTypes.addContact]: (state, { payload }) => [...state, payload],
  [actionTypes.deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [actionTypes.changeFilter]: (_, { payload }) => payload,
});

export default combineReducers({
  items,
  filter,
});
