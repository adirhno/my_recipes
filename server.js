/** @format */

const express = require("express");
const app = express();
const path = require("path");
const axios = require("axios");

app.use(express.static(path.join(__dirname, "dist")));
app.use(express.static(path.join(__dirname, "node_modules")));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
const url =
  "https://recipes-goodness-elevation.herokuapp.com/recipes/ingredient/";

app.get("/", (req, res) => {
  res.send("welcome to your server!");
});

app.get("/recipes/dairy/:ingredient", (req, res) => {
  dairyIngredients = [
    "Cream",
    "Cheese",
    "Milk",
    "Butter",
    "Creme",
    "Ricotta",
    "Mozzarella",
    "Custard",
    "Cream Cheese",
  ];
  axios.get(url + req.params.ingredient).then((data) => {
    let meals = [];
    data.data.results.forEach((m) => {
      let meal = {
        id: m.idMeal,
        ingredients: m.ingredients,
        title: m.title,
        thumbnail: m.thumbnail,
        href: m.href,
      };
      meals.push(meal);
    });

    newMeals = meals.filter((m) => {
      return !m.ingredients.find((ingredient) =>
        dairyIngredients.includes(ingredient)
      );
    });

    res.send(newMeals);
  });
});

app.get("/recipes/gluten/:ingredient", (req, res) => {
  glutenIngredients = ["flour", "bread", "spaghetti", "biscuits", "milk"];
  axios.get(url + req.params.ingredient).then((data) => {
    let meals = [];
    data.data.results.forEach((m) => {
      let meal = {
        id: m.idMeal,
        ingredients: m.ingredients,
        title: m.title,
        thumbnail: m.thumbnail,
        href: m.href,
      };
      meals.push(meal);
    });

    newMeals = meals.filter((m) => {
      return !m.ingredients.find((ingredient) =>
        glutenIngredients.includes(ingredient)
      );
    });

    res.send(newMeals);
  });
});

app.get("/recipes/:ingredient", (req, res) => {
  let newArr = [];
  axios.get(url + req.params.ingredient).then((data) => {
    data.data.results.forEach((m) => {
      let meal = {
        id: m.idMeal,
        ingredients: m.ingredients,
        title: m.title,
        thumbnail: m.thumbnail,
        href: m.href,
      };
      newArr.push(meal);
    });
    res.send(newArr);
  });
});

app.get("/recipes/:ingredient/:sensitivity", (req, res) => {
  const sensitivity = req.params.sensitivity;
  axios.get(url + req.params.ingredient).then((data) => {
    let meals = [];
    data.data.results.forEach((m) => {
      let meal = {
        id: m.idMeal,
        ingredients: m.ingredients,
        title: m.title,
        thumbnail: m.thumbnail,
        href: m.href,
      };
      meals.push(meal);
    });

    newMeals = meals.filter((m) => {
      return !m.ingredients.find(
        (ing) => sensitivity.toLowerCase() === ing.toLowerCase()
      );
    });

    // console.log(newMeals);
    res.send(newMeals);
  });
});

const PORT = 2233;
app.listen(PORT, () => {
  console.log("this server is listening to port " + PORT);
});
