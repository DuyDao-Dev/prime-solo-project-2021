
-- USER is a reserved keyword with Postgres
-- You must use double quotes in every query that user is in:
-- ex. SELECT * FROM "user";
-- Otherwise you will have errors!
CREATE TABLE "user" (
    "id" SERIAL PRIMARY KEY,
    "username" VARCHAR (80) UNIQUE NOT NULL,
    "password" VARCHAR (1000) NOT NULL
);

CREATE TABLE "shopping_list" (
    "id" SERIAL PRIMARY KEY,
    "ingredient_name" VARCHAR (80) NOT NULL,
    "status" BOOLEAN DEFAULT FALSE,
    "user_id" VARCHAR (80) NOT NULL
);

CREATE TABLE "favorite_recipe" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) NOT NULL,
    "image" VARCHAR (255) NOT NULL,
    "url" VARCHAR (255) NOT NULL,
    "user_id" VARCHAR (80) NOT NULL
);

