function sayHello() {
  alert("Welcome to Cookfro!");
}   
function getRecipe() {
  let input = document.getElementById("ingredients").value.toLowerCase();
  let result = document.getElementById("result");

  if (input.includes("egg") && input.includes("rice")) {
    result.innerHTML = "🍳 Try Egg Fried Rice!";
  } 
  else if (input.includes("bread") && input.includes("egg")) {
    result.innerHTML = "🥪 Try French Toast!";
  } 
  else if (input.includes("milk") && input.includes("banana")) {
    result.innerHTML = "🥤 Try Banana Milkshake!";
  } 
  else {
    result.innerHTML = "🤔 Try a simple stir fry!";
  }
}
function getRecipe() {
  const input = document.getElementById("ingredients").value.toLowerCase();
  const result = document.getElementById("result");

  if (!input) {
    result.innerHTML = "⚠️ Please enter some ingredients!";
    return;
  }

  if (input.includes("egg") && input.includes("rice")) {
    result.innerHTML = "🍳 Try Egg Fried Rice!";
  } else if (input.includes("bread") && input.includes("egg")) {
    result.innerHTML = "🥪 Try French Toast!";
  } else if (input.includes("milk") && input.includes("banana")) {
    result.innerHTML = "🥤 Try Banana Milkshake!";
  } else {
    result.innerHTML = "🤔 Try a simple stir fry!";
  }
}
// Array to store ingredients
let ingredients = [];

// Basic shopping list items
const basicItems = ["vegetables", "chicken", "rice", "milk", "bread", "eggs", "onion", "tomato"];

// Add ingredient from input
function addIngredient() {
  const input = document.getElementById("ingredientInput");
  const value = input.value.trim().toLowerCase();
  if (value && !ingredients.includes(value)) {
    ingredients.push(value);
    updateIngredientList();
    input.value = "";
  }
}

// Update the ingredient list in UI
function updateIngredientList() {
  const list = document.getElementById("ingredientList");
  list.innerHTML = "";
  ingredients.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    list.appendChild(li);
  });
}

// Suggest recipes based on ingredients
function suggestRecipes() {
  const result = document.getElementById("recipeResult");
  let suggestions = [];

  // Example rules
  if (ingredients.includes("egg") && ingredients.includes("rice")) {
    suggestions.push("🍳 Egg Fried Rice");
  }
  if (ingredients.includes("bread") && ingredients.includes("egg")) {
    suggestions.push("🥪 French Toast");
  }
  if (ingredients.includes("milk") && ingredients.includes("banana")) {
    suggestions.push("🥤 Banana Milkshake");
  }
  if (ingredients.includes("chicken") && ingredients.includes("vegetables")) {
    suggestions.push("🍗 Chicken Stir Fry");
  }

  if (suggestions.length === 0) {
    suggestions.push("🤔 Try a simple stir fry!");
  }

  result.innerHTML = "<h3>Recipe Suggestions:</h3><ul>" + suggestions.map(r => `<li>${r}</li>`).join("") + "</ul>";

  // Update shopping list
  updateShoppingList();
}

// Display basic shopping list
function updateShoppingList() {
  const shopping = document.getElementById("shoppingList");
  shopping.innerHTML = "";
  basicItems.forEach(item => {
    const li = document.createElement("li");
    li.textContent = item;
    shopping.appendChild(li);
  });
}
