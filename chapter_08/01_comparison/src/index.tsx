import { StrictMode } from 'react';
import ReactDOM from 'react-dom';
import AppWithContext from './AppWithContext';
import AppWithJotai from './AppWithJotai';

ReactDOM.render(
  <StrictMode>
    <h1>App with Context</h1>
    <AppWithContext />
    <h1>App with Jotai</h1>
    <AppWithJotai />
  </StrictMode>,
  document.getElementById('root')
);
