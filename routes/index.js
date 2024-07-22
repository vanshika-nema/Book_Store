var express = require('express');
var router = express.Router();

const book = require("../models/bookmodel");

const books = [];
// book.push(req.body);

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});
router.get('/register', function(req, res, next) {
  res.render('register', { title: 'Express' });
});
router.post('/register', function(req, res, next) {
  book.create(req.body)
  .then(()=>res.redirect("/show"))
  .catch((err)=>res.send(err));
  const data = req.body
  books.push(data);
  // res.redirect('/show');
});
router.get('/show', function(req, res, next) {
  res.render("show", {Books: books}) 
});
// router.get('/about', function(req, res, next) {
//   res.render("about", {Books: books}) 
// });
// router.get('/details/:index', function(req, res, next) {
//   res.json(books[req.params.index]) 
// });

router.get('/details/:index',function(req,res,next){
  const dets = books[req.params.index]
  res.render("details",{book: dets,index:req.params.index})
});

router.get('/delete/:index',function(req,res,next){
  books.splice(req.params.index,1);
  res.redirect("/show")
});

router.get('/update/:index',function(req,res,next){
  const dets = books[req.params.index]
  res.render("update",{books: dets,index:req.params.index})
  
});

router.post('/update/:index',function(req,res,next){
  books[req.params.index]=req.body;
  res.redirect(`/details/${req.params.index}`)
  
});
router.get('/about', function(req, res, next) {
  res.render('about', { title: 'Express' });
});

module.exports = router;


