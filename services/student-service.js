var Student = require('../models/student').Student;


exports.addStudent = function(student, next) {
 
    var newStudent = new Student({
        firstName: student.firstName,
        middleName: student.middleName,
        lastName: student.lastName,
        alias: student.alias,
        email: student.email.toLowerCase(),
        photo_url:student.photo_url,
        status:student.status,
        status_message:student.status_message
    });
    newStudent.save(function(err) {
      if (err) {
        return next(err);
      }            
      next(null);
    });
  });
};

exports.findStudent = function(email, next) {
    Student.findOne({email: email.toLowerCase()}, function(err, student) {
        next(err, student);    
    });
};




