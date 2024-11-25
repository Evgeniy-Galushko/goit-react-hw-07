import { useDispatch } from "react-redux";
import s from "./Contact.module.css";

import { deleteContact } from "../../redux/contactsOps";

export default function Contact({ id, name, number }) {
  const dispatch = useDispatch();
  const hendleDelete = (id) => dispatch(deleteContact(id));

  return (
    <div className={s.divContact}>
      <ul className={s.ulContact}>
        <li>
          <p className={s.contactParagraph}>{name}</p>
        </li>
        <li>
          <p className={s.contactParagraph}>{number}</p>
        </li>
      </ul>
      <button
        className={s.contactButton}
        type="clicks"
        onClick={() => hendleDelete(id)}
      >
        Delete
      </button>
    </div>
  );
}
