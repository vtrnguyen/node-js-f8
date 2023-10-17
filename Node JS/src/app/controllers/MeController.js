const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose');

class MeController {
    // [GET] /me/stored/courses
    storedCourses(req, res, next) {
        
        Promise.all([Course.find({}), Course.countWithDeleted({ deleted: true })])
            .then(([courses, deletedCount]) => res.render('me/stored-courses', {
                deletedCount: deletedCount,
                courses: multipleMongooseToObject(courses),
            }))
            .catch(next);
    }

    trashCourses(req, res, next) { 
        Course.findDeleted({ deleted: true }) 
            .then((courses) => res.render('me/trash-courses', { 
                courses: multipleMongooseToObject(courses.filter(course => course.deleted)),
             }), ) 
             .catch(next); }
}

module.exports = new MeController();
