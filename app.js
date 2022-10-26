const express = require('express');
const path = require('path');
const debug = require('debug')('app');

const app = express();
const port = process.env.PORT || 3000;

app.use(express.static(path.join(__dirname, '/public/')));

app.listen(port, () => {
  // console.log(`listening on port ${chalk.green('3000')}`);
  debug(`listening on port ${port}`);
});
