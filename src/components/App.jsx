import ContactForm from "./ContactForm/ContactForm";
import Title from "./Title/Title";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { fetchContacts } from "../redux/contactsOps";
import { selectLoading, selectError } from "../redux/contactsSlice";

export default function App() {
  const dispatch = useDispatch();
  const loading = useSelector(selectLoading);
  const error = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      <SearchBox />
      {loading && !error && <p>Loading contacts...</p>}
      <ContactList />
    </>
  );
}
