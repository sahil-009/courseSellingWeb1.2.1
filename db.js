const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/edx-course-db');
const schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;

const userSchema = new schema({
    email: {types: String, unique: true},
    firstName: String,
    lastName: String,    
    password: String
});

const adminSchema = new schema({
    email: {types: String, unique: true},
    firstName: String,
    lastName: String,    
    password: String,
});

const courseSchema = new schema({
    title: String,
    imgUrl: String,
    description: String,
    price: Number,
    creatorId: objectId
});

const purchaseSchema = new schema({
    userId: objectId,
    courseId: objectId
});

const userModel = mongoose.model('user', userSchema);
const adminModel = mongoose.model('admin', adminSchema);
const courseModel = mongoose.model('course', courseSchema);
const purchaseModel = mongoose.model('purchase', purchaseSchema);

module.exports = {
    userModel: userModel,
    adminModel: adminModel,
    courseModel: courseModel,
    purchaseModel: purchaseModel
};
