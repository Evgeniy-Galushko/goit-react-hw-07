import s from "./ContactList.module.css";
import { useSelector } from "react-redux";

import Contact from "../Contact/Contact";
import { selectNameFilter } from "../../redux/filtersSlice";
import { selectContacts } from "../../redux/contactsSlice";

export default function ContactList() {
  const contactsStore = useSelector(selectContacts);
  const nameFilter = useSelector(selectNameFilter);

  const сontacts = contactsStore.filter((contact) =>
    contact.name.toLowerCase().includes(nameFilter.toLowerCase())
  );

  return (
    <ul className={s.contactListUl}>
      {сontacts.map(({ id, name, number }) => {
        return (
          <li key={id} className={s.contactListLi}>
            <Contact id={id} name={name} number={number} />
          </li>
        );
      })}
    </ul>
  );
}
