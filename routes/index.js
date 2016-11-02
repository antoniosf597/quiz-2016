var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controllers');
/* GET home page. */





router.get('/', function(req, res, next) {
  res.render('index', { title: 'Quiz-2016' });
});

router.get('/quizes/question',quizController.question);
router.get('/quizes/answer',quizController.answer);
module.exports = router;
