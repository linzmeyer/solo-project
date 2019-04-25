CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL,
    "admin" BOOLEAN NOT NULL DEFAULT FALSE,
    "solved_solution" BOOLEAN NOT NULL DEFAULT FALSE,
    "solutions_id" INT REFERENCES "solutions"
);

CREATE TABLE "stats" (
    "id" SERIAL PRIMARY KEY,
    "solved" BOOLEAN NOT NULL DEFAULT FALSE,
    "clues_id" INT REFERENCES "clues",
    "user_id" INT REFERENCES "user"
);

CREATE TABLE "solutions" (
    "id" SERIAL PRIMARY KEY,
    "solution" VARCHAR (100) NOT NULL,
    "image_url" VARCHAR (1000),
    "reward" VARCHAR (1000),
    "active" BOOLEAN
);

CREATE TABLE "clues" (
    "id" SERIAL PRIMARY KEY,
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
INSERT INTO "solutions" ("solution", "reward")
VALUES ('init solution', 'init reward');

-- Update the solution table with a new solution and reward
UPDATE "solutions" SET "solution" = 'chase', "reward" = 'treats';




