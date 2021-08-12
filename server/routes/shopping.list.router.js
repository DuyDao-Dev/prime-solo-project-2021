const express = require("express");
const router = express.Router();
const pool = require("../modules/pool");
const rejectUnauthenticated =
  require("../modules/authentication-middleware").rejectUnauthenticated;

router.get("/", rejectUnauthenticated, (req, res) => {
  console.log(`What is req.body doing?`, req.body);
  // Add query to get all genres
  const allIngredientsQuery = `
    SELECT *
    FROM shopping_list
    WHERE user_id=$1
    ORDER BY id ASC;`;

  pool
    .query(allIngredientsQuery, [req.user.id])
    .then((result) => {
      res.send(result.rows);
    })
    .catch((err) => {
      console.log("Error GETting favorite list on favorite.router", err);
      res.sendStatus(500);
    });
});

// POST new ingredients
router.post("/ingredients", rejectUnauthenticated, (req, res) => {
  console.log(
    "What is happening in shopping.list POST router?",
    req.body
  );
  const ingredients = req.body.ingredients;

let promiseList = [];
    console.log('What is ingredients on router.post', ingredients);
  for (const ing of ingredients) {
    const query = pool.query('INSERT INTO "shopping_list" ("ingredient_name", "user_id") VALUES ($1, $2);', [ing, req.user.id]);
    promiseList.push(query);
  }
  Promise.all(promiseList)
    .then((resp) => {
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log("Error POSTing Ingredient to db", error);
      res.sendStatus(500);
    });
});



// update ingredients in shopping_list table on database
router.put("/:ingredientId", rejectUnauthenticated, (req, res) => {
  // req.body should contain a category_id to add to this favorite image
  //   const newStatus = req.body.newStatus;
  const ingredientId = req.params.ingredientId;
  console.log('What is the req.params.id doing in shopping list PUT?',req.params.id)
//   console.log("newStatus is:", newStatus);
  console.log("ingredientId is:", ingredientId);
  const queryCategory = `
  UPDATE shopping_list
  SET "status" = NOT status
  WHERE id = $1;`;

  pool
    .query(queryCategory, [ingredientId])
    .then(() => {
      res.sendStatus(200);
    })
    .catch((err) => {
      console.log("Error UPDATING PUT for shopping_list", err);
      res.sendStatus(500);
    });
});

// delete ingredients in shopping_list table on database
router.delete("/ingredients", rejectUnauthenticated, (req, res) => {
  // endpoint functionality
  const deleteIngredientsQuery = `
  DELETE from shopping_list
  WHERE status=TRUE AND user_id=$1;`;
  pool
    .query(deleteIngredientsQuery, [req.user.id])
    .then((result) => {
      console.log(`Successfully DELETED from database`, result);
      res.sendStatus(201);
    })
    .catch((error) => {
      console.log(`Did not DELETE from database`, error);
      res.sendStatus(500);
    });
});


module.exports = router;
