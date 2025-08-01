const dotenv = require('dotenv');  
 

const express = require('express');
const app = express();
const cors = require('cors');
dotenv.config();

const uploadRoutes = require('./routes/uploadRoutes');

app.use(cors());
app.use(express.json());

app.use('/api', uploadRoutes);

module.exports = app;