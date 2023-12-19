/** @format */

class ApiManager {
  constructor() {}

  getMeals(ingredient) {
    return $.get(`/recipes/${ingredient}`);
  }

  getMealsFreeGluten(ingredient) {
    return $.get(`/recipes/gluten/${ingredient}`);
  }

  getMealsFreeDairy(ingredient) {
    return $.get(`/recipes/dairy/${ingredient}`);
  }
  getSensitivityMeals(ingredient,sensitivity){
    return $.get(`/recipes/${ingredient}/${sensitivity}`);
  }
}
