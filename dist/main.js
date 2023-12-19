/** @format */
const render = new Render();
const apiManager = new ApiManager();

$("#searchButton").on("click", function () {
  const ingredient = $("#input").val();
  if (ingredient == "") {
    alert("Please add an ingredint!");
    return;
  }
  apiManager.getMeals(ingredient).then((data) => {
    $("#sensitivity").css("display", "inline");
    console.log("data: " + data);
    render.appendMeals(data);
  });
});

$("#meals").on("click", ".img", function () {
  alert($(this).parent().find("li")[0].innerHTML);
});

$("#glutenFree").on("click", function () {
  const ingredient = $("#input").val();
  apiManager.getMealsFreeGluten(ingredient).then((data) => {
    render.appendMeals(data);
  });
});

$("#dairyFree").on("click", function () {
  const ingredient = $("#input").val();
  apiManager.getMealsFreeDairy(ingredient).then((data) => {
    render.appendMeals(data);
  });
});

$("#sensitivityButton").on("click", function () {
  const sensitivity = $("#sensitivityInput").val();
  const ingredient = $("#input").val();
  apiManager.getSensitivityMeals(ingredient, sensitivity).then((data) => {
    render.appendMeals(data);
  });
});
