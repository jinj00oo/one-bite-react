import "./App.css";
import ContactEditor from "./components/ContactEditor";
import ContactList from "./components/ContactList";
import {
  useState,
  useRef,
  useReducer,
  useCallback,
  createContext,
  useMemo,
} from "react";

function reducer(contacts, action) {
  switch (action.type) {
    case "CREATE":
      return [action.data, ...contacts];
    case "DELETE":
      return contacts.filter((contact) => contact.id !== action.data);
    default:
      return contacts;
  }
}

export const ContactStateContext = createContext();
export const ContactDispatchContext = createContext();

function App() {
  const [contacts, dispatch] = useReducer(reducer, []);
  const idRef = useRef(0);

  const onCreate = useCallback(({ name, contact }) => {
    dispatch({
      type: "CREATE",
      data: {
        id: idRef.current++,
        name: name,
        contact: contact,
      },
    });
  }, []);

  const onDelete = useCallback((targetId) => {
    dispatch({
      type: "DELETE",
      data: targetId,
    });
  }, []);

  const memoizedDispatches = useMemo(() => {
    return {
      onCreate,
      onDelete,
    };
  }, []);

  return (
    <div className="App">
      <h2>Contact List</h2>
      <ContactStateContext.Provider value={contacts}>
        <ContactDispatchContext.Provider value={memoizedDispatches}>
          <section>
            <ContactEditor />
          </section>
          <section>
            <ContactList />
          </section>
        </ContactDispatchContext.Provider>
      </ContactStateContext.Provider>
    </div>
  );
}

export default App;
