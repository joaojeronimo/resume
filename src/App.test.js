import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import resume from './resume.json';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App resume={resume} />, div);
});
