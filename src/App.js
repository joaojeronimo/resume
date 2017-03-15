import get from 'lodash.get';
import React from 'react';
import propTypes from './propTypes';
import ContactDetails from './ContactDetails';
import Education from './Education';
import WorkDetails from './WorkDetails';
import WorkHistory from './WorkHistory';
import Projects from './Projects';
import Profiles from './Profiles';
import Skills from './Skills';

const App = ({ resume }) => {
  const { personal, location } = resume;
  const profiles = get(resume, 'profiles', []);
  const education = get(resume, 'education', []);
  const projects = get(resume, 'projects', []);
  const skills = get(resume, 'skills', []);
  const work = get(resume, 'work', []);
  return (
    <div className="container">
      <main>
        <header>
          <h1>{personal.preferredName}</h1>
        </header>
        <ContactDetails
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

App.propTypes = {
  resume: propTypes.resume.isRequired,
};

export default App;
