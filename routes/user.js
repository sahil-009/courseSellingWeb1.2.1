// const express = require("express");
// const router = express.Router();

const { Router } = require('express');
const userRouter = Router();
    app.post("/signup", function(req, res){
        res.json({
            message: "User signed up successfully"
        });
    });
    
    app.post("/signin", function(req, res){
        res.json({
            message: "User signed up successfully"
        });
    });
 
    app.post("/courses", function(req, res){
        res.json({
            message: "User signed up successfully"
        });
    });


module.exports = {
    userRouter: userRouter
};