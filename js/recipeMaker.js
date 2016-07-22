var nameInput = document.getElementById("recipeName");
var flourInput = document.getElementById("flourWeight");
var waterInput = document.getElementById("waterWeight");
var saltInput = document.getElementById("saltWeight");
var starterInput = document.getElementById("starterWeight");
var oilInput = document.getElementById("oilWeight");
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
      //bind buttons of tasks to their corresponding functions
    bindTaskEvents(placeHolder.children[i]);
  }
}

//convert inputed ingredient weights and output a recipe
var createRecipe = function() {

  var flour = parseFloat(flourInput.value);
  var water = parseFloat(waterInput.value);
  var salt = parseFloat(saltInput.value);
  var starter = parseFloat(starterInput.value);
  var oil = parseFloat(oilInput.value);

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

  //create li for flour
  var flourListItem = document.createElement("li");
  //add name and converted number to li
  flourListItem.innerText = "Flour: 100%";
  //append li to ul
  recipeList.appendChild(flourListItem);

  //create li for water
  var waterListItem = document.createElement("li");
  //add name and converted number to li
  var convertedWater = getBakersPercent(water, flour);
  waterListItem.innerText = "Water: " + convertedWater + "%";
  //append li to ul
  recipeList.appendChild(waterListItem);

  //create li for salt
  var saltListItem = document.createElement("li");
  //add name and converted number to li
  var convertedSalt = getBakersPercent(salt, flour);
  saltListItem.innerText = "Salt: " + convertedSalt + "%";
  //append li to ul
  recipeList.appendChild(saltListItem);

  //create li for starter
  var starterListItem = document.createElement("li");
  //add name and converted number to li
  var convertedStarter = getBakersPercent(starter, flour);
  starterListItem.innerText = "Starter: " + convertedStarter + "%";
  //append li to ul
  recipeList.appendChild(starterListItem);

  //create li for oil
  var oilListItem = document.createElement("li");
  //add name and converted number to li
  var convertedOil = getBakersPercent(oil, flour);
  oilListItem.innerText = "Oil: " + convertedOil + "%";
  //append li to ul
  recipeList.appendChild(oilListItem);

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

}

//pull up saved recipes from localStorage
if ("savedDiv" in localStorage) {
  placeHolder.innerHTML = localStorage.getItem("savedDiv");
  activateButtons();
};

//covert and save recipe when convert button is pressed
convertButton.addEventListener("click", createRecipe);















