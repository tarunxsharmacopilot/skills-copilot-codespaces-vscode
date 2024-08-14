// Create web server
var express = require('express');
var app = express();
app.listen(3000);
// Create route
app.get('/comments', function(req, res) {
  res.send('This is the comments page');
});
// Create route
app.get('/comments/new', function(req, res) {
  res.send('This is the comments page for new comments');
});
// Create route
app.get('/comments/1', function(req, res) {
  res.send('This is the comments page for comment 1');
});
// Create route
app.get('/comments/1/edit', function(req, res) {
  res.send('This is the comments page for editing comment 1');
});
// Create route
app.get('/comments/1/delete', function(req, res) {
  res.send('This is the comments page for deleting comment 1');
});