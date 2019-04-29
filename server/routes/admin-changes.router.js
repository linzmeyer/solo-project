const express = require('express');
const router = express.Router();
const pool = require('../modules/pool.js');

// update the solution
router.put('/', async (req, res) => {

  console.log('in change clues route');
  console.log('req.body:', req.body);

  // values for solutions table
  let solution = req.body.solution;
  let reward = req.body.reward;
  let active = 'TRUE';

  // values for clue 1 row of clues table
  let clue1Description = req.body.clue1Hint;
  let clue1Answer = req.body.clue1Answer;
  let clue1Location = req.body.clue1Location;

  // values for clue 2 row of clues table
  let clue2Description = req.body.clue2Hint;
  let clue2Answer = req.body.clue2Answer;
  let clue2Location = req.body.clue2Location;

  // values for clue 3 row of clues table
  let clue3Description = req.body.clue3Hint;
  let clue3Answer = req.body.clue3Answer;
  let clue3Location = req.body.clue3Location;

  // values for clue 4 row of clues table
  let clue4Description = req.body.clue4Hint;
  let clue4Answer = req.body.clue4Answer;
  let clue4Location = req.body.clue4Location;

  // values for clue 5 row of clues table
  let clue5Description = req.body.clue5Hint;
  let clue5Answer = req.body.clue5Answer;
  let clue5Location = req.body.clue5Location;

  const client = await pool.connect();

  try {
    await client.query('BEGIN');

    // text to be inserted into solutions table for solution_number 1
    let sqlSolution1Text = `
      UPDATE "solutions"
      SET ("solution", "reward", "active") = ($1, $2, $3)
      WHERE "solution_number" = '1';
    `;

    let sqlClue1Text = `
      UPDATE "clues"
      SET ("description", "answer", "location") = ($1, $2, $3)
      WHERE "clue_number" = '1';
    `;

    let sqlClue2Text = `
      UPDATE "clues"
      SET ("description", "answer", "location") = ($1, $2, $3)
      WHERE "clue_number" = '2';
    `;

    let sqlClue3Text = `
      UPDATE "clues"
      SET ("description", "answer", "location") = ($1, $2, $3)
      WHERE "clue_number" = '3';
    `;

    let sqlClue4Text = `
      UPDATE "clues"
      SET ("description", "answer", "location") = ($1, $2, $3)
      WHERE "clue_number" = '4';
    `;

    let sqlClue5Text = `
      UPDATE "clues"
      SET ("description", "answer", "location") = ($1, $2, $3)
      WHERE "clue_number" = '5';
    `;

    // update solution, reward, and active status in solutions table
    await client.query( sqlSolution1Text, [ solution, reward, active ] );
    // update clue 1 row in clues table
    await client.query( sqlClue1Text, [ clue1Description, clue1Answer, clue1Location ]);
    // update clue 2 row in clues table
    await client.query( sqlClue2Text, [ clue2Description, clue2Answer, clue2Location ]);
    // update clue 3 row in clues table
    await client.query( sqlClue3Text, [ clue3Description, clue3Answer, clue3Location ]);
    // update clue 4 row in clues table
    await client.query( sqlClue4Text, [ clue4Description, clue4Answer, clue4Location ]);
    // update clue 5 row in clues table
    await client.query( sqlClue5Text, [ clue5Description, clue5Answer, clue5Location ]);

    await client.query('COMMIT')
    res.sendStatus(200);
  } catch (e) {
    await client.query('ROLLBACK')
    console.log(`Error making database query ${ sqlSolution1Text }`, error);
    res.sendStatus(500);
  } finally {
    client.release()
  }
}); // END TRANSACTION

module.exports = router;