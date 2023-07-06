const express = require('express');
const chalk = require('chalk');
const debug = require('debug')('app');

const app = express();
const port = 3000;

app.get("/",(req,res)=>{

    res.send('Hi There D.');

})

app.listen(port,()=>{
    console.log("listening on port  : "+chalk.blue(port));
})