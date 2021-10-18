//Асинхронный редакс.
import contactsApi from "services/contactsApi";
import contactsActions from "redux/contacts-actions";

export const fetchContacts = () => async (dispatch) => {
  dispatch(contactsActions.fetchContactsRequest());

  try {
    const contacts = await contactsApi();
    dispatch(contactsActions.fetchContactsSuccess(contacts));
    return contacts;
  } catch (error) {
    dispatch(contactsActions.fetchContactsError());
    return [];
  }
};

//createAsyncThunk

// import { createAsyncThunk } from "@reduxjs/toolkit";
// import contactsApi from "services/contactsApi";

// export const fetchContacts = createAsyncThunk(
//   "contacts/fetchContacts",
//   async (_, { rejectWithValue }) => {
//     try {
//       const contacts = await contactsApi();
//       return contacts;
//     } catch (error) {
//       return rejectWithValue(error.message);
//     }
//   }
// );
