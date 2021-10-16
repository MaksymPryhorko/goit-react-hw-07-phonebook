import Form from "./Form";
import ContactList from "./ContactList";
import Filter from "./Filter";
import style from "./Phonebook.module.css";

export default function Phonebook() {
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
