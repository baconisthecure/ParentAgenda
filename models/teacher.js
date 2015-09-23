var mongoose = require('mongoose');
var Schema = mongoose.Schema;



var teacherSchema = new Schema({
    user_id:Number,
    fname: String,
    mname: String,
    lname: String,
    alias: String,
    email: String,
    role: {type String,default: "Teacher"},
    photo_url: String,
    status: String,
    status_message: String,
    created: {type: Date, default: Date.now}
    });

var Teacher = mongoose.model('Teacher', teacherSchema);

module.exports = {
    Teacher: Teacher
};