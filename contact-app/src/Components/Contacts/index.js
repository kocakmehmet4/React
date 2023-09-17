import {useState,useEffect} from 'react'

import './styles.css'

import List from './List'
import Form from './Form'
function Contacts() {
    const [contacts,setContacts]=useState([
      {
      fullname:"Ahmet",
      phone_number:"535823326"
      },
      {
        fullname:"Güney",
        phone_number:"5385412552"
      },
      {
        fullname:"Fatma",
        phone_number:"5382345412552"
      }
  ]);

    useEffect(()=>{
        console.log(contacts);
    },[contacts])
  return (
    <div id="container">
      <h1>Contacts</h1>
      <List contacts={contacts}/>
      <Form addContact={setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
