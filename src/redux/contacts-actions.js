//Ванилла Тулкит.
import { createAction } from "@reduxjs/toolkit";

const addContact = createAction("contacts/addContact");
const deleteContact = createAction("contacts/deleteContact");
const changeFilter = createAction("contacts/changeFilter");
const fetchContactsRequest = createAction("contacts/fetchContactsRequest");
const fetchContactsSuccess = createAction("contacts/fetchContactsSuccess");
const fetchContactsError = createAction("contacts/fetchContactsError");

export default {
  fetchContactsRequest,
  fetchContactsSuccess,
  fetchContactsError,
  addContact,
  deleteContact,
  changeFilter,
};

//createAsyncThunk

// import { createAction } from "@reduxjs/toolkit";

// const addContact = createAction("contacts/addContact");
// const deleteContact = createAction("contacts/deleteContact");
// const changeFilter = createAction("contacts/changeFilter");

// export default {
//   addContact,
//   deleteContact,
//   changeFilter,
// };
