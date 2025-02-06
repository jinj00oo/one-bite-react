import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import { useState, useRef } from "react";

function App() {
  const [contacts, setContacts] = useState([]);
  const idRef = useRef(0);

  const onCreate = ({ name, contact }) => {
    const newContact = {
      id: idRef.current++,
      name: name,
      contact: contact,
    };
    setContacts([newContact, ...contacts]);
  };

  const onDelete = (targetId) => {
    setContacts(contacts.filter((contact) => contact.id !== targetId));
  };

  return (
    <div className="App">
      <h2>Contact List</h2>
      <section>
        <ContactEditor onCreate={onCreate} />
      </section>
      <section>
        <ContactList contacts={contacts} onDelete={onDelete} />
      </section>
    </div>
  );
}

export default App;
