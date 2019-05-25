const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET all clues from the database
router.get('/', (req, res) => {
  const queryText = `SELECT "clue_number", "description", "answer", "location" FROM "clues" ORDER BY "clue_number";`;
  pool.query(queryText)
    .then((result) => { res.send(result.rows); })
    .catch((err) => {
      console.log('Error completing SELECT all clues query', err);
      res.sendStatus(500);
    });
}); // End GET


module.exports = router;
