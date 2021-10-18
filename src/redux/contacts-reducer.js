//Асинхронный редакс.
import { combineReducers } from "redux";
import { createReducer } from "@reduxjs/toolkit";

import contactsActions from "redux/contacts-actions";

const items = createReducer([], {
  [contactsActions.addContact]: (state, { payload }) => [...state, payload],
  [contactsActions.fetchContactsSuccess]: (_, { payload }) => payload,
  [contactsActions.deleteContact]: (state, { payload }) =>
    state.filter((contact) => contact.id !== payload),
});

const filter = createReducer("", {
  [contactsActions.changeFilter]: (_, { payload }) => payload,
});

const isLoading = createReducer(false, {
  [contactsActions.fetchContactsRequest]: () => true,
  [contactsActions.fetchContactsSuccess]: () => false,
  [contactsActions.fetchContactsError]: () => false,
});

const error = createReducer(null, {
  [contactsActions.fetchContactsError]: (_, { payload }) => payload,
  [contactsActions.fetchContactsRequest]: () => null,
});

export default combineReducers({
  items,
  filter,
  isLoading,
  error,
});

//createAsyncThunk

// import { combineReducers } from "redux";
// import { createReducer } from "@reduxjs/toolkit";

// import contactsActions from "redux/contacts-actions";
// import { fetchContacts } from "redux/contacts-operations";

// const items = createReducer([], {
//   [contactsActions.addContact]: (state, { payload }) => [...state, payload],
//   [fetchContacts.fulfilled]: (_, { payload }) => payload,
//   [contactsActions.deleteContact]: (state, { payload }) =>
//     state.filter((contact) => contact.id !== payload),
// });

// const filter = createReducer("", {
//   [contactsActions.changeFilter]: (_, { payload }) => payload,
// });

// const isLoading = createReducer(false, {
//   [fetchContacts.pending]: () => true,
//   [fetchContacts.fulfilled]: () => false,
//   [fetchContacts.rejected]: () => false,
// });

// const error = createReducer(null, {
//   [fetchContacts.rejected]: (_, { payload }) => payload,
//   [fetchContacts.pending]: () => null,
// });

// export default combineReducers({
//   items,
//   filter,
//   isLoading,
//   error,
// });
