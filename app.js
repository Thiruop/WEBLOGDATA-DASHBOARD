const express=require('express')
const mongoose = require("./models/db");
const path = require('path');const port = 4000;
const {data,user} = ('./models/schema')
const linkweb=require('./routers/userrouter')
const app = express()
app.use('/assets', express.static(path.join(__dirname, 'assets')))
app.use(express.urlencoded({ extended: true }));
app.set("view engine", "ejs");
app.use('/', linkweb)
app.listen(port, () => {
     console.log("server is running in 4000");
   });
