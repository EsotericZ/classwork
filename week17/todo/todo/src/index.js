// import (require) but for React/Front end
// Import from React allows us to yse JSX syntax
import React from 'react';
// ReactDOM takes out app, renders to page. Only use once and right here
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(
  <App />,
  document.getElementById('root')
);