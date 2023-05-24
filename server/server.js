const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const db = require('./config/database');

app.use(cors())
app.use(bodyParser.json())

app.use('/register', require('./routes/register'));
app.use('/signin', require('./routes/signin'));

const isvalid =()=>{
    db.authenticate()
    .then(()=> console.log('Connected to the database'))
    .catch(err => console.log(err))
}

app.get('/', (req, res)=>{
    res.send("WELCOME TO HOME")
})

app.listen(3005, ()=>{
    isvalid()
})