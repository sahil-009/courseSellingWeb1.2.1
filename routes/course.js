const { Router } = require('express');
const  route = Router();


 route.get("/courses", function(req, res) {
    res.json({
        message: "Courses fetched successfully"
    });
});

 route.get("/course/preview", function(req, res) {
    res.json({
        message: "Course preview fetched successfully"
    });
});


module.exports =  route;  
