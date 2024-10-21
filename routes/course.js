const { Router } = require('express');
const {usermiddleware} = require('../middleware/user');
const {purchaseModel, courseModel} = require('../db');
const  route = Router();

route.post("/purchase", usermiddleware, async function(req, res) {
    const userId = req.user._id;
    const courseId = req.body.courseId;

//check user has actually paid or not

    await purchaseModel.create({
        userId,
        courseId
    });
    res.json({
        message: "Course purchased successfully"
    });

route.get("/preview",async function(req, res) {});
    const courses = await courseModel.find({});   
    res.json({
        courses
    });
});




module.exports =  route;  
