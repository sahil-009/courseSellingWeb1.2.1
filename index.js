const express = require('express');
const userRouter = require('./routes/user');  
const createCourseRoutes = require('./routes/course');  
const userAdmin = require('./routes/admin');  

const app = express();

app.use(express.json());
app.use("/user", userRouter); 
app.use("/course", createCourseRoutes); 
app.use("/admin", userAdmin);

const PORT = 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
