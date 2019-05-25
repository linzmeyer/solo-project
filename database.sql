CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "is_admin" BOOLEAN NOT NULL DEFAULT FALSE,
    "solved_solution" BOOLEAN NOT NULL DEFAULT FALSE,
    "solutions_id" INT REFERENCES "solutions"
);

CREATE TABLE "solutions" (
    "id" SERIAL PRIMARY KEY,
    "solution_number" INT NOT NULL,
    "solution" VARCHAR (100) NOT NULL,
    "clue" VARCHAR (1000),
    "image_url" VARCHAR (1000),
    "reward" VARCHAR (1000),
    "active" BOOLEAN NOT NULL DEFAULT FALSE
);

CREATE TABLE "stats" (
    "id" SERIAL PRIMARY KEY,
    "solved" BOOLEAN NOT NULL DEFAULT FALSE,
    "clues_id" INT REFERENCES "clues",
    "user_id" INT REFERENCES "user"
);

CREATE TABLE "clues" (
    "id" SERIAL PRIMARY KEY,
    "clue_number" INT NOT NULL,
    "description" VARCHAR (1000),
    "answer" VARCHAR (100),
    "location" VARCHAR (1000)
);

-- Test data for clues table
INSERT INTO "clues" ("clue_number", "description", "answer", "location")
VALUES ('1', 'description of clue 1', 'flower', 'North end of bridge');

INSERT INTO "clues" ("clue_number", "description", "answer", "location")
VALUES ('2', 'description of clue 2', 'red squirrel', 'Under benches');

INSERT INTO "clues" ("clue_number", "description", "answer", "location")
VALUES ('3', 'description of clue 3', 'red winged black bird', 'back of oak tree');

INSERT INTO "clues" ("clue_number", "description", "answer", "location")
VALUES ('4', 'description of clue 4', 'turtle', 'in firepit');

INSERT INTO "clues" ("clue_number", "description", "answer", "location")
VALUES ('5', 'description of clue 5', 'quaking aspen', 'under the lake');

-- Init POST to solutions table
INSERT INTO "solutions" ("solution_number", "solution", "clue", "reward", "active")
VALUES ('1', 'init solution', 'init solution clue', 'init reward', TRUE);

-- Update the solution table with a new solution and reward
UPDATE "solutions" SET "solution" = 'chase', "reward" = 'treats';

-- Select the active reward
SELECT "reward" FROM "solutions" WHERE "active" = 'TRUE';



