// @flow

import React from 'react';
import ReactMarkdown from 'react-markdown';
import type { Intro } from './types';

const Introduction = ({ md }: { md: Intro }) => (
  <ReactMarkdown source={md} escapeHtml />
);

export default Introduction;
