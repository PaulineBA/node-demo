var express = require('express');
var router = express.Router();

/* GET users listing. */
router.get('/', (req, res) => {
  const booksCollection = [
    { title: 'The Bible' },
    { title: 'The Quran' }
  ]
  res.json({books: [{books: booksCollection}]});
});

module.exports = router;
