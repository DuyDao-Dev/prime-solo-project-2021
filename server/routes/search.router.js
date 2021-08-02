const express = require("express");
const router = express.Router();
const axios = require("axios");
require("dotenv").config();

let offset = 0;

router.get("/:search", (req, res) => {
  const search = req.params.search;
  offset += 5;
  console.log(`Search get router`, req.params.search);

  axios
    .get(
      `https://api.edamam.com/api/recipes/v2?type=public&q=%24%7Bid%7D&app_id=42f22cbe&app_key=c3f8615cb868c6628ceb47245c103500&ingr=1-8&imageSize=REGULAR&random=true&field=uri&field=label&field=image&field=source&field=url&field=ingredientLines&limit=5&q=${search}&offset${offset}`
      //   `https://api.edamam.com/api/recipes/v2?type=public&q=%24%7Bid%7D&app_id=42f22cbe&app_key=c3f8615cb868c6628ceb47245c103500&ingr=5-8&imageSize=REGULAR&random=true&field=uri&field=label&field=image&field=source&field=url&field=ingredientLines&field=ingredients&limit=5&q=${search}`
      //   `https://api.edamam.com/api/recipes/v2?type=public&q=%24%7Bid%7D&app_id=42f22cbe&app_key=c3f8615cb868c6628ceb47245c103500&ingr=5-8&imageSize=REGULAR&random=true&field=uri&field=label&field=image&field=source&field=url&field=shareAs&field=yield&field=dietLabels&field=healthLabels&field=cautions&field=ingredientLines&field=ingredients&limit=5&q=${search}`
      //   `https://api.edamam.com/api/recipes/v2?type=public&q=%24%7Bid%7D&app_id=${APP_ID}&app_key=${API_KEY}&ingr=ingr%3D1-5&imageSize=REGULAR&random=true&field=uri&field=label&field=image&field=source&field=url&field=ingredients&limit=5&q=${search}`
      // ${process.env.APP_ID}&app_key=${process.env.API_KEY} //Currently not working in the API link
    )
    .then((response) => {
      console.log(`server GETting response`, response.data.hits[0]);
      // res.sendStatus(200);
      res.send(response.data);
      //Fixed the empty array in searchResults reducer by taking out data from (response.data.data)
    })
    .catch((err) => {
      console.log(err);
      // res.sendStatus(500);
    });
});

module.exports = router;
