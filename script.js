// ================= PANTRY =================
let ingredients = [];

// Add ingredient
function addIngredient() {
  const input = document.getElementById("ingredientInput");
  const value = input.value.trim().toLowerCase();

  if (value && !ingredients.includes(value)) {
    ingredients.push(value);
    updateIngredientList();
    savePantry();
    input.value = "";
  }
}

// Clear all ingredients
function clearPantry() {
  ingredients = [];
  updateIngredientList();
  savePantry();
}

// Save pantry to localStorage
function savePantry() {
  localStorage.setItem('cookfro-pantry', JSON.stringify(ingredients));
}

// Load pantry from localStorage
function loadPantry() {
  const stored = localStorage.getItem('cookfro-pantry');
  if (stored) {
    ingredients = JSON.parse(stored);
    updateIngredientList();
  }
}

// Update pantry list
function updateIngredientList() {
  const list = document.getElementById("ingredientList");
  list.innerHTML = "";

  ingredients.forEach((item, index) => {
    const li = document.createElement("li");
    li.textContent = item;

    const removeBtn = document.createElement("button");
    removeBtn.textContent = "x";
    removeBtn.className = "remove-btn";
    removeBtn.title = "Remove ingredient";
    removeBtn.onclick = () => {
      removeIngredient(index);
      savePantry();
    };

    li.appendChild(removeBtn);
    list.appendChild(li);
  });
}

// Remove ingredient
function removeIngredient(index) {
  ingredients.splice(index, 1);
  updateIngredientList();
  savePantry();
}

// ================= RECIPES =================
const recipes = [
  {
    id: 1,
    title: 'Egg Fried Rice',
    description: 'Quick fried rice with egg.',
    ingredients: ['egg', 'rice'],
    instructions: 'Cook rice. Scramble eggs. Stir fry together.'
  },
  {
    id: 2,
    title: 'French Toast',
    description: 'Classic French toast with bread and egg.',
    ingredients: ['bread', 'egg'],
    instructions: 'Dip bread in egg. Fry until golden.'
  },
  {
    id: 3,
    title: 'Banana Milkshake',
    description: 'Refreshing banana milkshake.',
    ingredients: ['milk', 'banana'],
    instructions: 'Blend banana and milk.'
  },
  {
    id: 4,
    title: 'Grilled Cheese',
    description: 'Cheesy grilled sandwich.',
    ingredients: ['bread', 'cheese'],
    instructions: 'Assemble and grill sandwich.'
  },
  {
    id: 5,
    title: 'Omelette',
    description: 'Egg omelette with onion.',
    ingredients: ['egg', 'onion'],
    instructions: 'Beat eggs, onion, cook.'
  },
  {
    id: 6,
    title: 'Chicken Stir Fry',
    description: 'Chicken and vegetables stir fry.',
    ingredients: ['chicken', 'vegetables'],
    instructions: 'Stir fry chicken and vegetables.'
  },
  {
    id: 7,
    title: 'Chicken Curry',
    description: 'Spicy chicken curry.',
    ingredients: ['chicken', 'tomato', 'onion'],
    instructions: 'Cook chicken with tomato and onion.'
  },
  {
    id: 8,
    title: 'Beef Stew',
    description: 'Hearty beef stew.',
    ingredients: ['beef', 'potato', 'carrot'],
    instructions: 'Stew beef with potato and carrot.'
  },
  {
    id: 9,
    title: 'Pasta with Tomato Sauce',
    description: 'Pasta in tomato sauce.',
    ingredients: ['pasta', 'tomato', 'onion'],
    instructions: 'Cook pasta, make tomato sauce, combine.'
  },
  {
    id: 10,
    title: 'Shrimp Stir Fry',
    description: 'Shrimp and vegetables stir fry.',
    ingredients: ['rice', 'shrimp', 'vegetables'],
    instructions: 'Stir fry shrimp, vegetables, and rice.'
  },
  {
    id: 11,
    title: 'Garlic Bread',
    description: 'Toasted garlic bread.',
    ingredients: ['bread', 'garlic', 'butter'],
    instructions: 'Spread garlic butter on bread, toast.'
  },
  {
    id: 12,
    title: 'Vegetable Salad',
    description: 'Fresh vegetable salad.',
    ingredients: ['vegetables', 'tomato', 'cucumber'],
    instructions: 'Chop and mix all ingredients.'
  },
  {
    id: 13,
    title: 'Roasted Potatoes',
    description: 'Crispy roasted potatoes.',
    ingredients: ['potato', 'oil', 'salt'],
    instructions: 'Roast potatoes with oil and salt.'
  },
  {
    id: 14,
    title: 'Milkshake',
    description: 'Simple milkshake.',
    ingredients: ['milk', 'sugar'],
    instructions: 'Blend milk and sugar.'
  },
  {
    id: 15,
    title: 'Banana Smoothie',
    description: 'Banana smoothie with honey.',
    ingredients: ['milk', 'banana', 'honey'],
    instructions: 'Blend banana, milk, and honey.'
  }
];

// ================= DISPLAY =================
function displayRecipes(recipesToDisplay) {
  const container = document.getElementById("recipes-container");
  container.innerHTML = "";

  if (recipesToDisplay.length === 0) {
    container.innerHTML = "<p>Sorry! I could not answer. 😢</p>";
    return;
  }

  recipesToDisplay.forEach(recipe => {
    const card = document.createElement("div");
    card.classList.add("recipe-card");

    card.innerHTML = `
      <h3>${recipe.title}</h3>
      <p>${recipe.description}</p>
      <button onclick=\"viewRecipe(${recipe.id})\">View Recipe</button>
    `;

    container.appendChild(card);
  });
}

// ================= BUTTON CLICK (MAIN FEATURE) =================
function getRecipes() {
  if (ingredients.length === 0) {
    alert("Please add ingredients first!");
    return;
  }

  const filtered = recipes.filter(recipe => {
    return recipe.ingredients.some(ing =>
      ingredients.some(userIng => ing && ing.includes(userIng))
    );
  });

  displayRecipes(filtered);
}

// ================= INIT =================
window.onload = function() {
  loadPantry();
};

// ================= VIEW DETAILS =================
function viewRecipe(id) {
  const recipe = recipes.find(r => r.id === id);

  if (!recipe) return;

  const section = document.getElementById("recipe-details");
  const content = document.getElementById("recipe-content");

  content.innerHTML = `
    <h2>${recipe.title}</h2>
    <p>${recipe.description}</p>

    <h3>Ingredients:</h3>
    <ul>
      ${recipe.ingredients.map(i => `<li>${i}</li>`).join("")}
    </ul>

    <h3>Instructions:</h3>
    <p>${recipe.instructions}</p>
  `;

  section.classList.remove("hidden");
}

// Close recipe
function closeRecipe() {
  document.getElementById("recipe-details").classList.add("hidden");
}
