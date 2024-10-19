const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/coursera-app', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

const schema = mongoose.Schema;
const objectId = mongoose.Types.ObjectId;

const userSchema = new schema({
    email: { type: String, unique: true }, // Change 'types' to 'type'
    firstName: String,
    lastName: String,    
    password: String
});

const adminSchema = new schema({
    email: { type: String, unique: true }, // Change 'types' to 'type'
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

const userModel = mongoose.model('User', userSchema); // Consider capitalizing model names
const adminModel = mongoose.model('Admin', adminSchema);
const courseModel = mongoose.model('Course', courseSchema);
const purchaseModel = mongoose.model('Purchase', purchaseSchema);

module.exports = {
    userModel,
    adminModel,
    courseModel,
    purchaseModel
};
