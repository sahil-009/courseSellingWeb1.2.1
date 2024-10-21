const express = require('express');
const { Router } = require('express');
const  route = Router();
const jwt = require('jsonwebtoken');
const { adminModel } = require('../db');
const { JWT_ADMIN_PASSWORD } = require('../config');

// const JWT_ADMIN_PASSWORD = "userpassword";


 route.post("/signup", async function(req, res) {
    const { email, firstName, lastName, password } = 

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

route.post("/courses", adminMiddleware, async function(req, res)
 {
    const {title, description, price, imageUrl} = req.body;
    const course = await courseModel.create({
        title: title,
        description: description,
        price: price,
        imageUrl: imageUrl,
        creatorId: adminId
               
    })
    res.json({
        message: "Course created successfully",
        courseId: course._id
    });
});
route.put("/courses", function(req, res) {
    res.json({
        message: "signup endpoint"
    });
});
route.put("/courses/bulk", function(req, res) {
    res.json({
        message: "signup endpoint"
    });
});


module.exports =  route; 
