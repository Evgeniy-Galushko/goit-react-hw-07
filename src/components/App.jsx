import ContactForm from "./ContactForm/ContactForm";
import Title from "./Title/Title";
import SearchBox from "./SearchBox/SearchBox";
import ContactList from "./ContactList/ContactList";

export default function App() {
  return (
    <>
      <Title>Phonebook</Title>
      <ContactForm />
      <SearchBox />
      <ContactList />
    </>
  );
}
