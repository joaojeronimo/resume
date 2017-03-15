// @flow

import React from 'react';
import type { Skill } from './types';

const Skills = ({ list }: { list: Skill[] }) => (
  <section>
    <header>
      <h2>Skills</h2>
    </header>
    <ul>
      {list.map(({ category, keywords }, i) => (
        <li key={i}>
          <strong>{category}:</strong> <span>{keywords.join(', ')}</span>
        </li>
      ))}
    </ul>
  </section>
);

export default Skills;
