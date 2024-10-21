const { Router } = require('express');
const { userModel ,courseModel } = require('../db');
const jwt = require('jsonwebtoken');
const { JWT_USER_PASSWORD } = require('../config');
const { userMiddleware } = require('../middleware/user');

// const JWT_USER_PASSWORD = "userpassword";


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

    //need hash  the password using bcrypt library not to store the plan text password
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

// route.get("/purchases", userMiddleware ,async function(req, res) {
//     // const userId = req.body.id;
//     // const purchases = await purchaseModel.find({
//     //     userId
//     // });
//     // const courseData = await courseModel.find({
//     //     _id: purchases.map(x => x._id)
//     // });
//     res.json({
//         message: "User purchases",
//     })
// });




module.exports ={
    route: route,
    
}
