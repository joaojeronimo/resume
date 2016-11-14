import React from 'react';
import ReactMarkdown from 'react-markdown';

const WorkEntry = ({ startDate, endDate, organization, website, position, description, highlights }) => (
  <li>
    <h3>{organization} <a href={website}><small>{website}</small></a> - {position} - {startDate}—{endDate}</h3>
    {description && <ReactMarkdown source={description} escapeHtml />}
    {!!highlights.length && <ul>
      {highlights.map((hl, n) => <li key={n}><ReactMarkdown source={hl} className="text-compact" escapeHtml /></li>)}
    </ul>}
  </li>
);

WorkEntry.defaultProps = {
  endDate: 'current',
  highlights: [],
};

const WorkDetails = ({ list }) => (
  <section>
    <header>
      <h2>Work Details <small>(5 most recent)</small></h2>
    </header>
    <ul className="unstyled">
      {
        list.slice(0, 5).map((el, i) => <WorkEntry {...el} key={i} />)
      }
    </ul>
  </section>
);

export default WorkDetails;