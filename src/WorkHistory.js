// @flow

import React from 'react';
import type { Work } from './types';

const WorkHistory = ({ list }: { list: Work[] }) => (
  <section>
    <h2>Work History</h2>
    <ul>
      {list.map(({ startDate, endDate, organization, position }, i) => (
        <li key={i}>
          <div className="grid">
            <strong className="cell -3of12">{organization}</strong>
            <span className="cell -4of12">{position}</span>
            <span className="cell -2of12">
              {startDate}—{endDate || 'current'}
            </span>
          </div>
        </li>
      ))}
    </ul>
  </section>
);
export default WorkHistory;
