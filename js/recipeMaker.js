var nameInput = document.getElementById("recipeName");
var flourInput = document.getElementById("flourWeight");
var waterInput = document.getElementById("waterWeight");
var saltInput = document.getElementById("saltWeight");
var starterInput = document.getElementById("starterWeight");
var oilInput = document.getElementById("oilWeight");
var convertButton = document.getElementById("recipeSubmit");

var getBakersPercent = function(ingWeight, flourWeight) {
  return Math.round((ingWeight / flourWeight) * 100); 
}


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
  //add div to the DOM
  var backToTop = document.getElementById("backTop");
  var contentOfPage = document.getElementById("content");
  contentOfPage.insertBefore(convertedRecipe, backToTop);

}


var submitInfo = function(){
  console.log(nameInput.value);
  console.log(parseFloat(flourInput.value));
  console.log(parseFloat(waterInput.value));
  console.log(parseFloat(saltInput.value));
  console.log(parseFloat(starterInput.value));
  console.log(parseFloat(oilInput.value));
}

convertButton.addEventListener("click", createRecipe);