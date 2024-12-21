import React, { useEffect, useState } from 'react';
import ContactList from './Contactlist'; // Ensure proper casing
import ContactDetails from './Contactdetails'; // Ensure proper casing
import Axios from 'axios';

const ContactApp = () => {
  let [contacts, setContacts] = useState([]);

  useEffect(() => {
    Axios.get('https://gist.githubusercontent.com/narasimhareddyprostack/7e344f346f47bc53a889d78b5258d0c9/raw/56d531cb936d9c79e2417e5d0e5d8c9c876800f2/contactlist')
      .then((resp) => {
        setContacts(resp.data);
      })
      .catch((error) => {
        console.error("Error fetching data", error); // Log the error to console
      });
  }, []);

  return (
    <>
      <div className="container">
        {/* <h6>Contact App</h6>
        <pre>{JSON.stringify(contacts)}</pre> */}
        {contacts.length > 0 ? (
          <div className="row">
            <div className="col-8">
              <ContactList contacts={contacts} />
            </div>
            <div className="col-4">
              <ContactDetails />
            </div>
          </div>
        ) : (
          <h3>No Data</h3>
        )}
      </div>
    </>
  );
};

export default ContactApp;
