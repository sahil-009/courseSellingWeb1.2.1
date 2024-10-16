// const express = require('express');
// const router = express.Router();

const { Router } = require('express'); 
const userCourse = Router();

    app.get("/courses", function(req, res){
        res.json({
            message: "User signed up successfully"
        });
    });
    
    app.get("/course/preview", function(req, res){
        res.json({
            message: "User signed up successfully"
        });
    }); 

module.exports = {
    userCourse: userCourse
}