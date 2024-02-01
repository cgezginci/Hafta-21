import "./App.css";
import Person from "./components/Person";
import { phoneBook } from "./data";

function App() {
  return (
    <>
      {phoneBook.map((person) => {
        return (
          <Person
            key={person.id}
            avatar={person.avatar}
            name={person.name}
            phoneNumber={person.phoneNumber}
            addresses={person.addresses}
            emails={person.emails}
          />
        );
      })}
    </>
  );
}

export default App;
