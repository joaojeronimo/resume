// @flow

import React from 'react';
import ContactDetails from './ContactDetails';
import Education from './Education';
import WorkDetails from './WorkDetails';
import WorkHistory from './WorkHistory';
import Projects from './Projects';
import Profiles from './Profiles';
import Skills from './Skills';
import type { Resume } from './types';

const App = ({ resume }: { resume: Resume }) => {
  const {
    personal,
    location,
    profiles = [],
    education = [],
    projects = [],
    skills = [],
    work = [],
  } = resume;

  return (
    <div className="container">
      <main>
        <header>
          <h1>{personal.preferredName}</h1>
        </header>
        <ContactDetails
          preferredName={personal.preferredName}
          email={personal.email}
          city={location.city}
          country={location.country}
        />
        {profiles.length && <Profiles list={profiles} />}
        {work.length && <WorkHistory list={work} />}
        {skills.length && <Skills list={skills} />}
        {projects.length && <Projects list={projects} />}
        {education.length && <Education list={education} />}
        <div className="page-break" />
        {work.length && <WorkDetails list={work} />}
      </main>
    </div>
  );
};

export default App;
