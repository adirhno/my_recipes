/** @format */

const { sensitivesArr } = require("../config");

class RecipesUltities {
  static filterData = function (results) {
    let newArr = [];
    results.forEach((m) => {
      let meal = {
        id: m.idMeal,
        ingredients: m.ingredients,
        title: m.title,
        thumbnail: m.thumbnail,
        href: m.href,
      };
      newArr.push(meal);
    });
    return newArr;
  };

  static filterSensitivity = function (meals, sensetiveIngredient) {
    let newMeals = [];
    newMeals = meals.filter((m) => {
      return !m.ingredients.find((ingredient) =>
        sensitivesArr[sensetiveIngredient].includes(ingredient)
      );
    });
    return newMeals;
  };

  static specSensitiveIngredient = function (meals, sensitiveIngredient) {
    let newMeals = [];
    newMeals = meals.filter((m) => {
      return !m.ingredients.find(
        (ingredient) =>
          sensitiveIngredient.toLowerCase() === ingredient.toLowerCase()
      );
    });
    return newMeals;
  };

  static isContainIngredient = function (sensetiveIngredient, meals) {
    if (sensitivesArr[sensetiveIngredient]) {
      return this.filterSensitivity(
        this.filterData(meals),
        sensetiveIngredient
      );
    }
  };
}
module.exports = RecipesUltities;
