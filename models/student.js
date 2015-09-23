var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var studentSchema = new Schema({
    user_id:Number,
    firstName: String,
    middleName: String,
    lastName: String,
    alias: String,
    email: String,
    role: {type String,default: "Student"},
    photo_url: String,
    status: String,
    status_message: String,
    created: {type: Date, default: Date.now}
    });

//To add parent reference  parent: { type: Schema.ObjectId,ref:'parent'}

var Student = mongoose.model('Student', studentSchema);

module.exports = {
    Student: Student
};