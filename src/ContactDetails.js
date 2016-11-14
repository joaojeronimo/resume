import React from 'react';

const ContactDetails = ({ phone, email, city, country }) => (
  <section>
    <h2 className="sr-only">Contact Details</h2>
    <div className="grid">
      <div className="cell -3of12">
        <span className="fa fa-lg fa-at" aria-hidden="true" /> <a href={`mailto:${email}`}>{email}</a>
      </div>
      <div className="cell -3of12">
        <span className="fa fa-lg fa-phone" aria-hidden="true" /> <a href={`tel:${phone}`}>{phone}</a>
      </div>
      <div className="cell -3of12">
        <span className="fa fa-lg fa-globe" aria-hidden="true" /> {[city, country].filter(Boolean).join(', ')}
      </div>
      <div className="cell -3of12">
      </div>
    </div>
  </section>
);
export default ContactDetails;
