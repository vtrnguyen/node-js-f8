const Course = require('../models/Course')
const { multipleMongooseToObject } = require('../../util/mongoose');

class SiteController {
    // [GET] / news
    home(req, res, next) {
        Course.find({})
            .then((courses) => {
                res.render('home', {
                    // xử lý vấn đề của thư viện Handlebars
                    courses: multipleMongooseToObject(courses),
                });
            })
            .catch(next);
    }

    // [GET] /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();
