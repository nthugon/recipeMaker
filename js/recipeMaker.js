var nameInput = document.getElementById("recipeName");
var flourInput = document.getElementById("Flour");
var waterInput = document.getElementById("Water");
var saltInput = document.getElementById("Salt");
var starterInput = document.getElementById("Starter");
var oilInput = document.getElementById("Oil");
var convertButton = document.getElementById("recipeSubmit");
var placeHolder = document.getElementById("placeHolder");

//find percentage of flour's weight for a given ingredient
var getBakersPercent = function(ingWeight, flourWeight) {
  return Math.round(((ingWeight / flourWeight) * 100) * 10) / 10;
}

//check to see if browser supports localStorage
var supportsLocalStorage = function() {
  try {
    return "localStorage" in window && window["localStorage"] !== null;
  } catch (e) {
    return false;
  }
}

//remove saved recipe from DOM and localStorage
var deleteRecipe = function() {
  //delete recipe from DOM
  var recipeToDelete = this.parentNode;
  var containerDiv = recipeToDelete.parentNode;
  containerDiv.removeChild(recipeToDelete);
  //delete recipe from localStorage
  if (supportsLocalStorage) {
  var divToSave = placeHolder.innerHTML;
  localStorage.setItem("savedDiv", divToSave);
  };
}

//bind buttons of tasks to their corresponding functions
var bindTaskEvents = function(recipe) {
  var deleteButton = recipe.querySelector("button.deleteButton");
  //bind deleteRecipe to deleteButton
  deleteButton.onclick = deleteRecipe;
}

//cycle through recipes to activate buttons
var activateButtons  = function(){
    for(var i = 0; i < placeHolder.children.length; i++) {
    //bind button to task
    bindTaskEvents(placeHolder.children[i]);
  }
}

//convert inputed ingredient weights and output a recipe
var createRecipe = function() {

  //add li to recipe ul containing name and converted weight of ingredient
  var ingLine = function(ing) {
    //create li
    var li = document.createElement("li");
    //convert ingredient to baker's percentage
    var convertedIng = getBakersPercent(parseFloat(ing.value), parseFloat(flourInput.value));
    // var convertedIng = getBakersPercent(ing, flour);
    //add name and converted number to li
    li.innerText = ing.id + ": " + convertedIng + "%";
    //append li to ul
    recipeList.appendChild(li);
  }

  //create a div for recipe
  var convertedRecipe = document.createElement("div");
  //add class to div
  convertedRecipe.classList.add("recipeContainer");
  //create h2 for div
  var heading = document.createElement("h2");
  heading.innerText = nameInput.value;
  //add heading as child to div
  convertedRecipe.appendChild(heading);

  //add ul
  var recipeList = document.createElement("ul");
  //add class to ul
  recipeList.classList.add("convertedRecipeList");
  //add li to recipe ul containing name and converted weight of ingredient
  ingLine(flourInput);
  ingLine(waterInput);
  ingLine(saltInput);
  ingLine(starterInput);
  ingLine(oilInput);
  //append ul to div
  convertedRecipe.appendChild(recipeList);

  //create delete button
  var deleteButton = document.createElement("button");
  deleteButton.innerText = "Delete";
  //add class to button
  deleteButton.className = "deleteButton";
  //append delete button to div
  convertedRecipe.appendChild(deleteButton);

  //append created div to placeHolder div in HTML
  placeHolder.appendChild(convertedRecipe);
  //add created div to localStorage
  if (supportsLocalStorage) {
  var divToSave = placeHolder.innerHTML;
  localStorage.setItem("savedDiv", divToSave);
  };
  //activate buttons on recipes
  activateButtons();
  //clear input fields
  nameInput.value = "";
  flourInput.value = "";
  waterInput.value = "";
  saltInput.value = "";
  starterInput.value = "";
  oilInput.value = "";

}

//pull up saved recipes from localStorage
if ("savedDiv" in localStorage) {
  placeHolder.innerHTML = localStorage.getItem("savedDiv");
  activateButtons();
};

//covert and save recipe when convert button is pressed
convertButton.addEventListener("click", createRecipe);















