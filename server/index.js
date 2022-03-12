require('dotenv').config();
const express = require('express');
const app = express();
const cors = require('cors');
const massive = require('massive');


app.use(express.json());
app.use(cors());

const {SERVER_PORT, CONNECTION_STRING} = process.env;

massive({
    connectionString: CONNECTION_STRING,
    ssl: {
        rejectUnauthorized: false
    }
}).then(db => {
    app.set("db", db)
    console.log("Database is connected master")
    app.listen(SERVER_PORT, () => console.log(`Server is listening on port ${SERVER_PORT}, Master Kenobi!`))
}).catch(error => console.log(error, 'Could not connect to server Chance. Uh-Oh!'))


