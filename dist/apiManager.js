/** @format */

class ApiManager {
  constructor() {}

  getMeals(ingredient, sensetiviteIngredient) {
    return $.get(`/recipes/${ingredient}/${sensetiviteIngredient}`);
  }

  getSensitiveIngredientMeals(ingredient, sensitivity) {
    return $.get(`/recipes/specific/${ingredient}/${sensitivity}`);
  }
}
