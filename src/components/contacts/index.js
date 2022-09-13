import { useEffect, useState } from 'react'
import List from "./list/index.js"
import Form from "./form/index.js";

function Contacts() {
  const [contacts, setContact] = useState([{ fullname: "Kaan", phone_number: 5544534662 }, { fullname: "Ayşe", phone_number: 5333901388 }]);

  useEffect(() => {
    console.log(contacts);
  }, [contacts])
  return (
    <div id="container">
      <h1>Contacts App</h1>
      <List contacts={contacts} />
      <Form addContact={setContact} contacts={contacts} />
    </div>
  )
}

export default Contacts