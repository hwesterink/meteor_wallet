import React from 'react';
import {ContactForm} from "./ContactForm";
import {ContactList} from "./ContactList";

// Our contact has a name, email, imageURL
export const App = () => (
  <div>
    <h1>Meteor Wallet</h1>
	<ContactForm />
	<ContactList />
  </div>
);
