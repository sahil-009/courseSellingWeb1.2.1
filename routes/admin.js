const express = require('express');
const { Router } = require('express');
const  route = Router();
const jwt = require('jsonwebtoken');
const { adminModel } = require('../db');
const JWT_ADMIN_PASSWORD = "userpassword";


 route.post("/signup", async function(req, res) {
    const { email, firstName, lastName, password } = req.body;

    await adminModel.create({
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password
    });
    res.json({
        message: "User signed up successfully"
    });
});

 route.post("/signin", async function(req, res) {

    const { email, password } = req.body;
    const admin = await adminModel.findOne({
         email: email,
          password: password //122345
    });

    // Token based authentication
    if (admin){
        const token = jwt.sign({ 
            id: admin._id,
         }, JWT_ADMIN_PASSWORD);
        return res.json({
            message: "User signed in successfully",
            token: token
        });
    }
    else{
        res.status(403).json({
            message: "Invalid email or password"
        });
    }
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
