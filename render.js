import React from 'react';
import ReactDOMServer from 'react-dom/server';
import App from './src/App';

const result = ReactDOMServer.renderToStaticMarkup(
  React.createElement(App)
);

export default result;
