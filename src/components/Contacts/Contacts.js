import React from 'react';
import { useLoaderData } from 'react-router-dom';
import Contact from '../Contact/Contact';

const Contacts = () => {
    const contacts = useLoaderData();
    console.log(contacts);
    return (
        <div>
            <h3>Here is our Contact Section</h3>
            <p>Total number of contacts:{contacts.length}</p>
            {
                contacts.map(contact =>
                    <Contact key={contact.id}
                        contact={contact}
                    >
                    </Contact>)
            }
        </div>
    );
};

export default Contacts;