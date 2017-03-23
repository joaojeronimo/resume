// @flow

import React from 'react';
import ContactDetails from './ContactDetails';
import Eligibilities from './Eligibilities';
import Introduction from './Introduction';
import Education from './Education';
import WorkDetails from './WorkDetails';
import WorkHistory from './WorkHistory';
import Projects from './Projects';
import Profiles from './Profiles';
import Skills from './Skills';
import type { Resume } from './types';

const App = ({ resume }: { resume: Resume }) => {
  const {
    intro,
    personal,
    location,
    eligibilities = [],
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
        <Introduction md={intro} />
        <ContactDetails
          preferredName={personal.preferredName}
          email={personal.email}
          city={location.city}
          country={location.country}
        />
        {!!profiles.length && <Profiles list={profiles} />}
        {!!eligibilities.length && <Eligibilities list={eligibilities} />}
        {!!work.length && <WorkHistory list={work} />}
        {!!skills.length && <Skills list={skills} />}
        {!!projects.length && <Projects list={projects} />}
        {!!education.length && <Education list={education} />}
        <div className="page-break" />
        {!!work.length && <WorkDetails list={work} />}

        <aside className="text-right">
          <p>
            <small>
              This document is hosted at:
              {' '}
              <a href="https://disintegrator.github.io/resume/">
                https://disintegrator.github.io/resume/
              </a>
            </small>
            <br />
            <small>
              The source code is available at:
              {' '}
              <a href="https://github.com/disintegrator/resume">
                https://github.com/disintegrator/resume
              </a>
            </small>
          </p>
        </aside>
      </main>
    </div>
  );
};

export default App;
