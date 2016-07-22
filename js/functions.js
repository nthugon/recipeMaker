  //add li to recipe ul containing name and converted weight of ingredient
  var ingLine = function(ing) {
    //create li
    var li = document.createElement("li");
    //convert ingredient to baker's percentage
    var convertedIng = getBakersPercent(ing, flour);
    //add name and converted number to li
    li.innerText = ing + ": " + convertedIng + "%";
    //append li to ul
    recipeList.appendChild(li);
  }