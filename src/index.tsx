import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

import './styles/global.css';

import { ExperienceBar } from './components/ExperienceBar';

const root = ReactDOM.createRoot(
  document.getElementById('root') as HTMLElement
);
root.render(
  <div className="container">
    <ExperienceBar></ExperienceBar>
  </div>
);