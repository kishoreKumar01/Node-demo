const express = require('express');
const app = express();

const usersRoute = app.get("/user", (req,res)=>{
    res.send(`<h1>This is the user Page</h1>`)
})

module.exports = userRoute;