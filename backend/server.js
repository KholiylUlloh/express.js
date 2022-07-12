
const express = require('express');
const cors = require('cors');

const app = express();
app.use(cors());
// get, put, post and delete

//routes
const houseRouter = require('./routes/users')
// const category = require('./routes/category')
app.use('/', houseRouter)
app.listen(3001, () => console.log('server listening on'));
