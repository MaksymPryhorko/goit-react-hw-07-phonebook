import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import style from "./Form.module.css";
import { useSelector, useDispatch } from "react-redux";
import contactsActions from "../../redux/contacts-actions";
import { getItems } from "../Phonebook-selectors";

export default function Form() {
  const [name, setName] = useState("");
  const [number, setNumber] = useState("");

  const items = useSelector(getItems);
  const dispatch = useDispatch();

  const handleChange = (e) => {
    const { name, value } = e.currentTarget;

    switch (name) {
      case "name":
        setName(value);
        break;

      case "number":
        setNumber(value);
        break;

      default:
        return;
    }
  };

  const checkedDuplicate = () => {
    return items.find((item) => item.name.toLowerCase() === name.toLowerCase());
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (checkedDuplicate() !== undefined) {
      alert(`${name} is alreade in contacts.`);
      return;
    }

    dispatch(
      contactsActions.addContact({
        name,
        id: uuidv4(),
        number,
      })
    );

    reset();
  };

  const reset = () => {
    setName("");
    setNumber("");
  };

  return (
    <form className={style.mainForm} onSubmit={handleSubmit}>
      <label className={style.labelForm}>
        <input
          className={style.inputForm}
          value={name}
          type="text"
          name="name"
          pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
          title="Имя может состоять только из букв, апострофа, тире и пробелов. Например Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan и т. п."
          required
          onChange={handleChange}
        />
        Name
      </label>
      <label className={style.labelForm}>
        <input
          className={style.inputForm}
          value={number}
          type="tel"
          name="number"
          pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
          title="Номер телефона должен состоять цифр и может содержать пробелы, тире, круглые скобки и может начинаться с +"
          required
          onChange={handleChange}
        />
        Number
      </label>
      <button className={style.buttonForm} type="submit">
        Add contact
      </button>
    </form>
  );
}
