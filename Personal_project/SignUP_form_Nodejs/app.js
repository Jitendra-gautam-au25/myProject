const express = require('express')
const bodyParser =require('body-parser')
const app  = express()
const signup = require('./routes/signup')
const morgan =require('morgan')
const jwt = require("jsonwebtoken");
const { engine } =require('express-handlebars');


app.engine(
    "hbs",
    engine({
      defaultLayout: "main",
      extname: ".hbs",
    })
  );
  app.set("view engine", "hbs");

app.use(bodyParser.json())
app.use(morgan('tiny'))
app.use('/api/signup',signup)

app.listen(3000,()=>{
    console.log("server is running port 3000")
})
