const express = require('express');
const { Router } = require('express');
const  route = Router();


 route.post("/signup", function(req, res) {
    res.json({
        message: "User signed up successfully"
    });
});

 route.post("/signin", function(req, res) {
    res.json({
        message: "User signed in successfully"
    });
});

 route.post("/courses", function(req, res) {
    res.json({
        message: "Course created successfully"
    });
});

module.exports =  route; 
