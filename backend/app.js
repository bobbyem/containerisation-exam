const express = require('express');
const cors = require('cors');
const env = require('dotenv').config();
const app = express();

const PORT = process.env.PORT || 3000;
const corsOptions = {
    origin: 'http://localhost:5173',
}

//Middleware
//Parse JSON
app.use(express.json());
app.use(cors(corsOptions));


app.get('/', (req, res) => {
    res.json('Hello from the Backend Goblins!');
})

//Start server
app.listen(PORT, () => {console.log('listening on port ' + PORT);});