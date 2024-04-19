require('dotenv').config({});
const express = require('express');
const app = express();

app.use(express.json());

app.use('/api/v1', require('./routes/index.routes'));
app.listen(process.env.PORT, ()=> {
    console.log('server is running ')
});