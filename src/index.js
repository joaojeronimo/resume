import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import 'font-awesome/css/font-awesome.css';
import resume from './resume.json';
import './index.css';

ReactDOM.render(<App resume={resume} />, document.getElementById('root'));
