var express = require('express');
var router = express.Router();
var quizController = require('../controllers/quiz_controllers');
var commentController = require('../controllers/comment_controller');
var sessionController = require('../controllers/session_controller');
var userController = require('../controllers/user_controller.js');
/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: 'Quiz-2016' });
});

// Autoload
router.param('quizId', quizController.load); // autoload :quizId
router.param('commentId', commentController.load); // autoload

router.param('userId', userController.load);
//router.get('/quizes/question',quizController.question);
//router.get('/quizes/answer',quizController.answer);

//Definicion de rutas de session
router.get('/login', sessionController.new); // formulario login
router.post('/login', sessionController.create);
router.get('/logout', sessionController.destroy);



router.get('/quizes', quizController.index);
router.get('/quizes/:quizId(\\d+)', quizController.show);
router.get('/quizes/:quizId(\\d+)/answer', quizController.answer);
router.get('/quizes/new', sessionController.loginRequired, quizController.new);
router.post('/quizes/create',  sessionController.loginRequired ,quizController.create);
router.get('/quizes/:quizId(\\d+)/edit',sessionController.loginRequired, quizController.edit);
router.put('/quizes/:quizId(\\d+)',sessionController.loginRequired, quizController.update);
router.delete('/quizes/:quizId(\\d+)',sessionController.adminRequired, quizController.destroy);


router.get('/quizes/:quizId(\\d+)/comments/new', commentController.new);
router.post('/quizes/:quizId(\\d+)/comments', commentController.create);
router.get('/quizes/:quizId(\\d+)/comments/:commentId(\\d+)/publish',
sessionController.loginRequired, commentController.publish);


router.get('/users/new', userController.new);
router.post('/users/create', userController.create);
router.get('/users', userController.index);
router.get('/users/:userId(\\d+)/edit',userController.edit);
router.put('/users/:userId(\\d+)', userController.update);
router.delete('/users/:userId(\\d+)', userController.destroy);

module.exports = router;