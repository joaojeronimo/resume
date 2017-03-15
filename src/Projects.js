// @flow

import React from 'react';
import type { Project } from './types';

const Projects = ({ list }: { list: Project[] }) => (
  <section>
    <header>
      <h2>Projects</h2>
    </header>
    <ul>
      {list.map(({ name, description, website }, i) => (
        <li key={i}>
          <div><strong>{name}</strong> <span>{description}</span></div>
          <div><a href={website}>{website}</a></div>
        </li>
      ))}
    </ul>
  </section>
);

export default Projects;
