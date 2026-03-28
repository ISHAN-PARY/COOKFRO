// Pantry 
let ingredients = [];
const basicItems = ["vegetables", "chicken", "rice", "milk", "bread", "eggs", "onion", "tomato"];

// Add ingredient
function addIngredient() {
  const input = document.getElementById("ingredientInput");
  const value = input.value.trim().toLowerCase();
  if (value && !ingredients.includes(value)) {
    ingredients.push(value);
    updateIngredientList();
    input.value = "";
  }
}

// Update pantry list with remove buttons
function updateIngredientList() {
  const list = document.getElementById("ingredientList");
  list.innerHTML = "";
  ingredients.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;
    const removeBtn = document.createElement("button");
    removeBtn.textContent = "x";
    removeBtn.className = "remove-btn";
    removeBtn.onclick = () => removeIngredient(index);
    li.appendChild(removeBtn);
    list.appendChild(li);
  });
}

// Remove ingredient
function removeIngredient(index) {
  ingredients.splice(index, 1);
  updateIngredientList();
}

// Suggest recipes based on pantry
function suggestRecipes() {
  const result = document.getElementById("recipeResult");
  result.innerHTML = "";
  let suggestions = [];

let suggestion = [];

if (ingredients.includes("egg") && ingredients.includes("rice")) suggestions.push("🍳 Egg Fried Rice");
if (ingredients.includes("bread") && ingredients.includes("egg")) suggestions.push("🥪 French Toast");
if (ingredients.includes("milk") && ingredients.includes("banana")) suggestions.push("🥤 Banana Milkshake");
if (ingredients.includes("bread") && ingredients.includes("cheese")) suggestions.push("🥪 Grilled Cheese");
if (ingredients.includes("egg") && ingredients.includes("milk") && ingredients.includes("onion")) suggestions.push("🥚 Omelette");
if (ingredients.includes("chicken") && ingredients.includes("vegetables")) suggestions.push("🍗 Chicken Stir Fry");
if (ingredients.includes("chicken") && ingredients.includes("tomato") && ingredients.includes("onion")) suggestions.push("🍛 Chicken Curry");
if (ingredients.includes("beef") && ingredients.includes("potato") && ingredients.includes("carrot")) suggestions.push("🥩 Beef Stew");
if (ingredients.includes("pasta") && ingredients.includes("tomato") && ingredients.includes("onion")) suggestions.push("🍝 Pasta with Tomato Sauce");
if (ingredients.includes("rice") && ingredients.includes("shrimp") && ingredients.includes("vegetables")) suggestions.push("🍤 Shrimp Stir Fry");
if (ingredients.includes("bread") && ingredients.includes("garlic") && ingredients.includes("butter")) suggestions.push("🥖 Garlic Bread");
if (ingredients.includes("vegetables") && ingredients.includes("tomato") && ingredients.includes("cucumber")) suggestions.push("🥗 Vegetable Salad");
if (ingredients.includes("potato") && ingredients.includes("oil") && ingredients.includes("salt")) suggestions.push("🍠 Roasted Potatoes");
if (ingredients.includes("milk") && ingredients.includes("sugar")) suggestions.push("🥛 Milkshake");
if (ingredients.includes("milk") && ingredients.includes("banana") && ingredients.includes("honey")) suggestions.push("🍹 Banana Smoothie");
if (ingredients.includes)("beef fry")&&suggestions.push("🥩beef fry")
if (ingredients.includes)("chicken")&&suggestions.push("chicken fry")



  if (suggestions.length === 0) suggestions.push("🤔 sorry! i could not anwser ");

  result.innerHTML = "<ul>" + suggestions.map(r => `<li>${r}</li>`).join("") + "</ul>";

  
}

