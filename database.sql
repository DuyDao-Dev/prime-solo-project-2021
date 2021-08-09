
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
    "ingredient_name" VARCHAR (80) UNIQUE NOT NULL,
    "status" BOOLEAN DEFAULT FALSE
);

CREATE TABLE "favorite_recipe" (
    "id" SERIAL PRIMARY KEY,
    "name" VARCHAR (80) UNIQUE NOT NULL,
    "image" VARCHAR (255) NOT NULL,
    "url" VARCHAR (255) NOT NULL
);


INSERT INTO "favorite_recipe" ("name", "image", "url")
VALUES ('M&M Cookies', 'https://cdn.sallysbakingaddiction.com/wp-content/uploads/2012/01/mm-cookies-600x900.jpg.webp','https://lmld.org/monster-cookie-dough-dip-cheeseball/');