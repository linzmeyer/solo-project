const express = require('express');
const pool = require('../modules/pool');
const router = express.Router();

// update the user's clue score
router.put('/', async (req, res) => {
  let userId = req.body.userId;
  let newScore = req.body.newScore;
  const client = await pool.connect();
  try {
    await client.query('BEGIN');

    // text to be inserted into user table for specific user based on id
    let sqlText = `UPDATE "user" SET "clue_score" = ($1) WHERE "id" = ($2);`;
    await client.query( sqlText, [newScore, userId] );

    await client.query( 'COMMIT' );
    res.sendStatus( 200 );
  } catch (err) {
    await client.query( 'ROLLBACK' );
    console.log( `Error with UPDATE`, err );
    res.sendStatus( 500 );
  } finally {
    client.release()
  }
}); // END PUT TRANSACTION

// get the user's clue score
router.get('/', async (req, res) => {
  console.log('get req.user.id:', req.user.id)
  let userId = req.user.id;
  const client = await pool.connect();
  try {
    await client.query('BEGIN');
    // sql text to select the clue score of a user based on their id
    let sqlText = `SELECT "clue_score" FROM "user" WHERE "id" = $1;`;
    await client.query( sqlText, [userId])
      .then((result) => { 
        // get clue_score by itself in an object
        let clueScore = result.rows[0];
        res.send( clueScore );
      })
      .catch((err) => {
        console.log('Error with SELECT', err);
        res.sendStatus(500);
      });
    await client.query( 'COMMIT' )
  } catch (err) {
    await client.query( 'ROLLBACK' )
    console.log(`Error with try: SELECT`, err);
    res.sendStatus( 500 );
  } finally {
    client.release()
  }
}); // END GET TRANSACTION


module.exports = router;