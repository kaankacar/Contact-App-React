import {useState,setState} from 'react'
import Contacts from '..';
import { PropTypes } from "prop-types";

function Form({addContact, contacts}) {
  const [form, setForm] = useState({ fullname: "", phone_number: "" });
  const onChangeInput = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
  const onSubmit = (e) => {
    e.preventDefault();

    if (form.fullname === "" || form.phone_number === "") {
      alert("Just write something, will you?")
      return false
    };

    addContact([...contacts, form]);
    console.log(form);

    setForm({fullname: "", phone_number: ""})
  }

  return (
    <div>
      <p id='totalcontacts'>{`Total Contacts: ${contacts.length}`}</p>
      <div>
        <input name="fullname" placeholder='Fullname' onChange={onChangeInput} value={form.fullname} type="text"></input>
      </div>
      <div>
        <input name="phone_number" placeholder='Phone Number' onChange={onChangeInput} value={form.phone_number} type="number" ></input>
      </div>
      <button onClick={onSubmit}>Add</button>
    </div>
  )
}

export default Form