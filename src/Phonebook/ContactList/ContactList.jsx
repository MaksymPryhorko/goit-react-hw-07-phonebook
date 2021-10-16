import { useSelector, useDispatch } from "react-redux";
import contactsActions from "../../redux/contacts-actions";
import React from "react";
import style from "./ContactList.module.css";
import { getVisibleContacts } from "../Phonebook-selectors";

export default function ContactList() {
  const dispatch = useDispatch();
  const items = useSelector(getVisibleContacts);

  return (
    <ul>
      {items.map((item) => (
        <li key={item.id} className={style.contactListItem}>
          <button
            className={style.btnDeleteContact}
            type="button"
            onClick={() => dispatch(contactsActions.deleteContact(item.id))}
          >
            delete
          </button>
          {item.name}: <span className={style.numberPhone}>{item.number}</span>
        </li>
      ))}
    </ul>
  );
}
