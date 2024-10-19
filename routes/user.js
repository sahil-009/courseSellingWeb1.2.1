const { Router } = require('express');
const { userModel } = require('../db');
const jwt = require('jsonwebtoken');
const JWT_USER_PASSWORD = "userpassword";


const  route = Router(); 

 route.post("/signup", async function(req, res) {
    const { email, firstName, lastName, password } = req.body;

    await userModel.create({
        email: email,
        firstName: firstName,
        lastName: lastName,
        password: password
    });
    res.json({
        message: "User signed up successfully"
    });
});

 route.post("/signin",async function(req, res) {

    //need hash the password using bcrypt library
    const { email, password } = req.body;
    const user = await userModel.findOne({
         email: email,
          password: password //122345
    });

    // Token based authentication
    if (user){
        const token = jwt.sign({ 
            id: user._id,
         }, JWT_USER_PASSWORD);
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

// Export the router directly
module.exports =  route;
