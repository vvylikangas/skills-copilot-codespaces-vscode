//create web server
const express = require('express');
const app = express();
//get the path of the file system
const path = require('path');
// get the body of the request
const bodyParser = require('body-parser');
// set up the body parser
app.use(bodyParser.urlencoded({ extended: true }));
// set up the public directory
app.use(express.static(path.join(__dirname, 'public')));
// set up the view engine
app.set('view engine', 'ejs');
// set up the data base
const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/comments', { useNewUrlParser: true, useUnifiedTopology: true });
// set up the schema
const commentSchema = new mongoose.Schema({
    name: String,
    comment: String
});
// set up the model
const Comment = mongoose.model('Comment', commentSchema);
// set up the route
app.get('/', (req, res) => {
    res.render('home');
});
app.get('/comments', (req, res) => {
    Comment.find({}, (err, comments) => {
        if (err) {
            console.log(err);
        } else {
            res.render('comments', { comments });
        }
    })
});
app.post('/comments', (req, res) => {
    Comment.create(req.body.comment, (err, comment) => {
        if (err) {
            console.log(err);
        } else {
            res.redirect('/comments');
        }
    })
});
// set up the port
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});

