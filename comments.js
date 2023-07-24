// Create web server
var express = require('express');
var router = express.Router();
var passport = require('passport');
var commentController = require('../controllers/commentController');

// GET request for creating a new comment. NOTE This must come before routes that display comment (uses id).
router.get('/comment/create', commentController.comment_create_get);

// POST request for creating comment.
router.post('/comment/create', commentController.comment_create_post);

// GET request to delete comment.
router.get('/comment/:id/delete', commentController.comment_delete_get);

// POST request to delete comment.
router.post('/comment/:id/delete', commentController.comment_delete_post);

// GET request to update comment.
router.get('/comment/:id/update', commentController.comment_update_get);

// POST request to update comment.
router.post('/comment/:id/update', commentController.comment_update_post);

// GET request for one comment.
router.get('/comment/:id', commentController.comment_detail);

// GET request for list of all comment items.
router.get('/comments', commentController.comment_list);

module.exports = router;