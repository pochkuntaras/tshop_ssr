require('babel-register');

const result = require('./render').default;
const express = require('express');
const application = express();

application.get('/', (req, res) => {
  res.send(`
    <!DOCTYPE html>
    <html>
      <head>
        <title>Getting Started</title>
      </head>
      <body>
        ${result}
      </body>
    </html>
  `);
});

application.listen(
  3005,
  () => console.log('Listening at localhost:3005')
);
