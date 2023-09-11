//mongo
require('./config/db');

const app = require('express')();
const port = 300;

const UserRouter = require('./api/User');

//For accepting post form data

const bodyParser = require('express').json;
app.use(bodyParser());

app.listen(port, () => console.log(`Server is running on port ${port}`));