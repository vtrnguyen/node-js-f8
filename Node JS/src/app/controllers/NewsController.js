class NewsController {
    // [GET] / news
    index(req, res) {
        res.render('news');
    }

    // [GET] /news/:slug
    show(req, res) {
        res.send('Xin chào thế giới');
    }
}

module.exports = new NewsController();
