// Array to store ingredients
let ingredients = [];
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
  result.innerHTML = ""; // Clear previous suggestions
  let suggestions = [];

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

}
