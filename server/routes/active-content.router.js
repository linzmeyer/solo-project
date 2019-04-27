const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// GET all active content from the database
router.get('/', (req, res) => {
  const queryText = `SELECT "reward" FROM "solutions";`;
  pool.query(queryText)
    .then((result) => {
      console.log(result.rows);
      res.send(result.rows);
    })
    .catch((err) => {
      console.log('Error completing SELECT all clues query', err);
      res.sendStatus(500);
    });
}); // End GET


// GET the active reward from the database
router.get('/reward', (req, res) => {
  const queryText = `SELECT "reward" FROM "solutions" WHERE "active" = 'TRUE';`;
  pool.query(queryText)
    .then((result) => {
      let reward = result.rows[0].reward;
      res.send( reward );
    })
    .catch((err) => {
      console.log('Error completing SELECT all clues query', err);
      res.sendStatus(500);
    });
}); // End GET


module.exports = router;