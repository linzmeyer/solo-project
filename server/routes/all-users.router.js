const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();


// GET all clues from the database
router.get('/', (req, res) => {
  const queryText = `SELECT * FROM "user";`;
  pool.query(queryText)
    .then((result) => { 
      console.log( 'result.rows:', result.rows );
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('Error with SELECT query', err);
      res.sendStatus(500);
    });
}); // End GET

module.exports = router;