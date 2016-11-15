import React from 'react';

const WorkHistory = ({ list }) => (
  <section>
    <h2>Work History</h2>
    <ul>
      {
        list.map(({ startDate, endDate, organization, position }, i) => (
          <li key={i}>
            <div className="grid">
              <strong className="cell -3of12">{organization}</strong>
              <span className="cell -4of12">{position}</span>
              <span className="cell -2of12">{startDate}—{endDate || 'current'}</span>
            </div>
          </li>
        ))
      }
    </ul>
  </section>
);

export default WorkHistory;

