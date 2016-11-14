import React from 'react';

const iconClasses = {
  'github': 'fa fa-lg fa-github',
  'linkedin': 'fa fa-lg fa-linkedin',
  'twitter': 'fa fa-lg fa-twitter',
  'keybase': 'fa fa-lg fa-key',
}

const icon = (name) => {
  if (!name) { return null; }
  return <span className={iconClasses[name.toLowerCase()]} />;
}

const Profiles = ({ list }) => (
  <section>
    <header>
      <h2 className="sr-only">Profiles</h2>
    </header>
    <div className="grid">
      {
        list.map(({name, username, website}, i) => (
          <div key={i} className="cell -3of12">
            {icon(name)} <a href={website} title={name}>{username}</a>
          </div>
        ))
      }
    </div>
  </section>
);

export default Profiles;
