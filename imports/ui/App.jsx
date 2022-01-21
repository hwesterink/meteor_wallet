import React from 'react';
import {Header} from "./Header";
import {ContactForm} from "./ContactForm";
import {ContactList} from "./ContactList";

// Our contact has a name, email, imageURL
export const App = () => (
  <div>
    <Header />
	<div className="min-h-full">
	  <div className="max-w-4xl mx-auto p-2">
	    <ContactForm />
	    <ContactList />
	  </div>
	</div>
  </div>
);
