const express =require('express');
const { userRoutes } = require('./routes/user');
const { createCourseRoutes } = require('./routes/course');
const { createAdminRoutes } = require('./routes/admin');
const app = express();



app.use("/user", userRoutes);
app.use("/course", createCourseRoutes);
app.use("/admin", createAdminRoutes);


app.listen(3000);


