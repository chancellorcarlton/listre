require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
// const massive = require('massive');
const authCtrl= require('./controller');


app.use(express.json());
app.use(cors());

const {DATABASE_URL} = process.env;

const PORT = 4444

//Endpoints
app.post('/auth/register', authCtrl.register)
app.post('/auth/login', authCtrl.login)

// massive({
//     connectionString: CONNECTION_STRING,
//     ssl: {
//         rejectUnauthorized: false
//     }
// }).then(db => {
//     app.set("db", db)
//     console.log("Database is connected")
    app.listen(PORT, () => console.log(`Server is listening on port ${PORT}`))
// }).catch(error => console.log(error, 'Could not connect to server'))


