const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const cors = require('cors');
const AuthRouter = require('./Route/AuthRouter');
const ProductRouter = require('./Route/ProductRouter');

require('dotenv').config();
require('./Models/db');
const PORT = process.env.PORT || 5000

app.use(bodyParser.json());
app.use(cors());
app.use('/auth', AuthRouter);
app.use('/product', ProductRouter);
app.listen(PORT, ()=>{
    console.log(`server is running ${PORT}`)
})