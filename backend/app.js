const express = require('express');
const env = require('dotenv').config();
const app = express();
const PORT = process.env.PORT || 3000;

//Middleware
//Parse JSON
app.use(express.json());



//Start server
app.listen(PORT, () => {console.log('listening on port ' + PORT);});