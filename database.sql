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





