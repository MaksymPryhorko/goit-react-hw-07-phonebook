import { useSelector, useDispatch } from "react-redux";
import { useEffect } from "react";
import contactsActions from "../redux/contacts-actions";
import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";
import style from "./Phonebook.module.css";
import { getError } from "./Phonebook-selectors";
import { fetchContacts } from "redux/contacts-operations";

// import * as contactsOperations from "redux/contacts-operations";

export default function Phonebook() {
  const dispatch = useDispatch();
  const error = useSelector(getError);

  useEffect(() => {
    error && alert(error);
  });

  useEffect(() => {
    dispatch(fetchContacts());
  }, []);

  return (
    <section className={style.mainSection}>
      <h1>Phonebook</h1>
      <Form />

      <div className={style.containerContacts}>
        <h2>Contacts:</h2>
        <Filter />
        <ContactList />
      </div>
    </section>
  );
}
