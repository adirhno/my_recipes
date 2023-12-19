/** @format */

class Render {
  constructor() {}
  appendMeals = function (meals) {
    $("#meals").html("");
    for (let i = 0; i < meals.length; i++) {
      let meal = `<div class="col-sm-11 meal" ><a class="title">${meals[i].title}</a><div class="img"><img src="${meals[i].thumbnail}"></div>
            <div class="ingredients">Ingredients:<ul id="ing${i}" class="ingredient"></ul></div></div> `;

      $("#meals").append(meal);
      this.addIngredients(meals[i].ingredients, i);
    }
  };

  addIngredients = function (ingredients, j) {
    for (let i = 0; i < ingredients.length; i++) {
      $(`#ing${j}`).append(`<li>${ingredients[i]}</li>`);
    }
  };
}
