import React from 'react';
import type { Eligibility } from './types';

const Eligibilities = ({ list }: { list: Eligibility[] }) => {
  return (
    <section>
      <header>
        <h2>Eligibilities</h2>
      </header>
      <p>Available to work in: {list.join(', ')}</p>
    </section>
  );
};

export default Eligibilities;
