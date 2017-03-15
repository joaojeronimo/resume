// @flow

import React from 'react';
import type { Personal, Location } from './types';

const ContactDetails = (
  { preferredName, phone, email, city, country }: Personal & Location,
) => (
  <section>
    <h2 className="sr-only">Contact Details</h2>
    <div className="grid">
      <div className="cell -3of12">
        <span className="fa fa-lg fa-at" aria-hidden="true" />
        {' '}
        <a href={`mailto:${email}`} title={`${preferredName} <${email}>`}>
          {email}
        </a>
      </div>
      <div className="cell -3of12">
        <span className="fa fa-lg fa-globe" aria-hidden="true" />
        {' '}
        {[city, country].filter(Boolean).join(', ')}
      </div>
      <div className="cell -3of12" />
    </div>
  </section>
);
export default ContactDetails;
