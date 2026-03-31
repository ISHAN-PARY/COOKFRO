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
  },
  {
    id: 16,
    title: 'Paneer Butter Masala',
    description: 'Creamy paneer curry.',
    ingredients: ['paneer', 'butter', 'tomato', 'cream'],
    instructions: 'Cook tomato gravy. Add paneer and cream. Simmer.'
  },
  {
    id: 17,
    title: 'Mushroom Pepper Fry',
    description: 'Spicy mushroom dish.',
    ingredients: ['mushroom', 'pepper', 'onion'],
    instructions: 'Saute onion. Add mushroom and pepper. Cook well.'
  },
  {
    id:18,
    title: 'Aloo Gobi',
    description: 'Potato and cauliflower curry.',
    ingredients: ['potato', 'cauliflower', 'spices'],
    instructions: 'Cook potato and cauliflower with spices.'
  },
  {
    id:19,
    title: 'Chickpea Masala',
    description: 'Protein-rich chickpea curry.',
    ingredients: ['chickpea', 'tomato', 'onion'],
    instructions: 'Cook chickpeas with onion tomato gravy.'
  },
  {
    id: 20,
    title: 'Vegetable Fried Noodles',
    description: 'Quick stir fried noodles.',
    ingredients: ['noodles', 'vegetables', 'soy sauce'],
    instructions: 'Cook noodles. Stir fry with vegetables and sauce.'
  },
  {
    id: 21,
    title: 'Eggplant Fry',
    description: 'Crispy brinjal fry.',
    ingredients: ['eggplant', 'spices', 'oil'],
    instructions: 'Slice eggplant. Coat spices. Fry until crispy.'
  },
  {
    id: 22,
    title: 'Spinach Dal',
    description: 'Healthy lentil curry.',
    ingredients: ['lentils', 'spinach', 'garlic'],
    instructions: 'Cook lentils. Add spinach and garlic tempering.'
  },
  {
    id: 23,
    title: 'Coconut Rice',
    description: 'Aromatic coconut flavored rice.',
    ingredients: ['rice', 'coconut', 'curry leaves'],
    instructions: 'Cook rice. Mix with coconut and tempering.'
  },
  {
    id: 24,
    title: 'Vegetable Cutlet',
    description: 'Crispy veg patties.',
    ingredients: ['potato', 'vegetables', 'breadcrumbs'],
    instructions: 'Mix ingredients. Shape and fry.'
  },
  {
    id: 25,
    title: 'Tomato Chutney',
    description: 'Tangy side dish.',
    ingredients: ['tomato', 'chili', 'garlic'],
    instructions: 'Cook and blend all ingredients.'
  },

  {
    id: 26,
    title: 'Cabbage Stir Fry',
    description: 'Light cabbage dish.',
    ingredients: ['cabbage', 'mustard seeds', 'oil'],
    instructions: 'Stir fry cabbage with seasoning.'
  },
  {
    id: 27,
    title: 'Sweet Corn Soup',
    description: 'Thick corn soup.',
    ingredients: ['corn', 'water', 'pepper'],
    instructions: 'Boil and blend corn. Season.'
  },
  {
    id: 28,
    title: 'Paneer Tikka',
    description: 'Grilled paneer cubes.',
    ingredients: ['paneer', 'yogurt', 'spices'],
    instructions: 'Marinate paneer. Grill until cooked.'
  },
  {
    id: 29,
    title: 'Vegetable Upma',
    description: 'Savory semolina dish.',
    ingredients: ['semolina', 'vegetables', 'mustard seeds'],
    instructions: 'Roast semolina. Cook with veggies and water.'
  },
  {
    id: 30,
    title: 'Carrot Halwa',
    description: 'Sweet carrot dessert.',
    ingredients: ['carrot', 'milk', 'sugar'],
    instructions: 'Cook grated carrot in milk and sugar.'
  },
  {
    id: 31,
    title: 'Lentil Soup',
    description: 'Simple hearty soup.',
    ingredients: ['lentils', 'garlic', 'onion'],
    instructions: 'Boil lentils. Add sautéed garlic and onion.'
  },
  {
    id: 32,
    title: 'Stuffed Capsicum',
    description: 'Capsicum filled with masala.',
    ingredients: ['capsicum', 'potato', 'spices'],
    instructions: 'Stuff capsicum. Cook until soft.'
  },
  {
    id: 33,
    title: 'Vegetable Pulao',
    description: 'Rice with mixed vegetables.',
    ingredients: ['rice', 'vegetables', 'spices'],
    instructions: 'Cook rice with vegetables and spices.'
  },
  {
    id: 34,
    title: 'Onion Pakora',
    description: 'Crispy onion fritters.',
    ingredients: ['onion', 'gram flour', 'spices'],
    instructions: 'Mix ingredients. Deep fry.'
  },
  {
    id: 35,
    title: 'Curd Rice',
    description: 'Cooling yogurt rice.',
    ingredients: ['rice', 'curd', 'mustard seeds'],
    instructions: 'Mix rice with curd and tempering.'
  },

  {
    id: 36,
    title: 'Beetroot Stir Fry',
    description: 'Healthy beetroot dish.',
    ingredients: ['beetroot', 'coconut', 'oil'],
    instructions: 'Cook beetroot. Add coconut.'
  },
  {
    id: 37,
    title: 'Pumpkin Curry',
    description: 'Mild sweet curry.',
    ingredients: ['pumpkin', 'spices', 'coconut'],
    instructions: 'Cook pumpkin with spices and coconut.'
  },
  {
    id: 38,
    title: 'Moong Dal Khichdi',
    description: 'Comfort rice and dal dish.',
    ingredients: ['rice', 'moong dal', 'turmeric'],
    instructions: 'Cook everything together until soft.'
  },
  {
    id: 39,
    title: 'Vegetable Spring Rolls',
    description: 'Crispy rolls.',
    ingredients: ['spring roll sheets', 'vegetables', 'oil'],
    instructions: 'Fill sheets. Roll and fry.'
  },
  {
    id: 40,
    title: 'Rava Dosa',
    description: 'Crispy semolina dosa.',
    ingredients: ['semolina', 'water', 'spices'],
    instructions: 'Make batter. Cook thin dosa.'
  },
  {
    id: 41,
    title: 'Paneer Bhurji',
    description: 'Spiced scrambled paneer.',
    ingredients: ['paneer', 'onion', 'tomato', 'spices'],
    instructions: 'Crumble paneer. Cook with onion, tomato, and spices.'
  },
  {
    id: 42,
    title: 'Vegetable Stew',
    description: 'Mild coconut-based stew.',
    ingredients: ['vegetables', 'coconut milk', 'spices'],
    instructions: 'Cook vegetables in coconut milk with spices.'
  },
  {
    id: 43,
    title: 'Masala Dosa',
    description: 'Crispy dosa with potato filling.',
    ingredients: ['dosa batter', 'potato', 'spices'],
    instructions: 'Prepare dosa. Fill with spiced potato mixture.'
  },
  {
    id: 44,
    title: 'Green Peas Curry',
    description: 'Simple peas curry.',
    ingredients: ['green peas', 'onion', 'tomato'],
    instructions: 'Cook peas with onion tomato gravy.'
  },
  {
    id: 45,
    title: 'Vegetable Korma',
    description: 'Rich creamy curry.',
    ingredients: ['vegetables', 'cream', 'spices'],
    instructions: 'Cook vegetables in creamy spiced gravy.'
  },

  {
    id: 46,
    title: 'Idli',
    description: 'Steamed rice cakes.',
    ingredients: ['idli batter'],
    instructions: 'Pour batter into molds. Steam until cooked.'
  },
  {
    id: 47,
    title: 'Sambar',
    description: 'Lentil vegetable stew.',
    ingredients: ['lentils', 'vegetables', 'tamarind'],
    instructions: 'Cook lentils. Add vegetables and tamarind.'
  },
  {
    id: 48,
    title: 'Avial',
    description: 'Kerala mixed vegetable dish.',
    ingredients: ['vegetables', 'coconut', 'curd'],
    instructions: 'Cook vegetables. Mix with coconut and curd.'
  },
  {
    id: 49,
    title: 'Thoran',
    description: 'Dry vegetable coconut stir fry.',
    ingredients: ['vegetables', 'coconut', 'mustard seeds'],
    instructions: 'Stir fry vegetables with coconut.'
  },
  {
    id: 50,
    title: 'Kootu Curry',
    description: 'Kerala style curry.',
    ingredients: ['chickpea', 'yam', 'coconut'],
    instructions: 'Cook ingredients with coconut paste.'
  },

  {
    id: 51,
    title: 'Vegetable Omelette',
    description: 'Egg omelette with veggies.',
    ingredients: ['egg', 'vegetables', 'spices'],
    instructions: 'Mix and cook in pan.'
  },
  {
    id: 52,
    title: 'Tomato Rasam',
    description: 'Spicy tangy soup.',
    ingredients: ['tomato', 'tamarind', 'spices'],
    instructions: 'Boil and season.'
  },
  {
    id: 53,
    title: 'Curd Curry',
    description: 'Yogurt-based curry.',
    ingredients: ['curd', 'spices', 'curry leaves'],
    instructions: 'Cook curd with spices.'
  },
  {
    id: 54,
    title: 'Vegetable Uttapam',
    description: 'Thick dosa with toppings.',
    ingredients: ['dosa batter', 'vegetables'],
    instructions: 'Pour thick batter. Add toppings. Cook.'
  },
  {
    id: 55,
    title: 'Lemon Pickle',
    description: 'Spicy preserved lemon.',
    ingredients: ['lemon', 'salt', 'chili'],
    instructions: 'Mix and store for days.'
  },

  {
    id: 56,
    title: 'Coconut Chutney',
    description: 'Classic chutney.',
    ingredients: ['coconut', 'green chili', 'salt'],
    instructions: 'Grind all ingredients.'
  },
  {
    id: 57,
    title: 'Mint Chutney',
    description: 'Refreshing chutney.',
    ingredients: ['mint', 'coriander', 'lemon'],
    instructions: 'Blend everything.'
  },
  {
    id: 58,
    title: 'Vegetable Clear Soup',
    description: 'Light soup.',
    ingredients: ['vegetables', 'water', 'pepper'],
    instructions: 'Boil vegetables and strain.'
  },
  {
    id: 59,
    title: 'Spinach Rice',
    description: 'Healthy green rice.',
    ingredients: ['rice', 'spinach', 'spices'],
    instructions: 'Cook rice with spinach puree.'
  },
  {
    id: 60,
    title: 'Carrot Soup',
    description: 'Smooth carrot soup.',
    ingredients: ['carrot', 'water', 'pepper'],
    instructions: 'Cook and blend carrots.'
  },

  {
    id: 61,
    title: 'Vegetable Sandwich Toast',
    description: 'Toasted veg sandwich.',
    ingredients: ['bread', 'vegetables', 'butter'],
    instructions: 'Assemble and toast.'
  },
  {
    id: 62,
    title: 'Onion Tomato Sabzi',
    description: 'Simple curry.',
    ingredients: ['onion', 'tomato', 'spices'],
    instructions: 'Cook onion and tomato with spices.'
  },
  {
    id: 63,
    title: 'Cucumber Raita',
    description: 'Cooling side dish.',
    ingredients: ['curd', 'cucumber', 'salt'],
    instructions: 'Mix all ingredients.'
  },
  {
    id: 64,
    title: 'Vegetable Maggi',
    description: 'Instant noodles with veggies.',
    ingredients: ['noodles', 'vegetables', 'spice mix'],
    instructions: 'Cook noodles with vegetables.'
  },
  {
    id: 65,
    title: 'Sweet Pongal',
    description: 'Rice jaggery dessert.',
    ingredients: ['rice', 'jaggery', 'ghee'],
    instructions: 'Cook rice. Add jaggery and ghee.'
  },
  {
    id: 66,
    title: 'Vegetable Biryani',
    description: 'Spiced mixed vegetable rice.',
    ingredients: ['rice', 'vegetables', 'spices'],
    instructions: 'Cook rice with vegetables and aromatic spices.'
  },
  {
    id: 67,
    title: 'Paneer Fried Rice',
    description: 'Rice with paneer cubes.',
    ingredients: ['rice', 'paneer', 'soy sauce'],
    instructions: 'Stir fry rice with paneer and sauce.'
  },
  {
    id: 68,
    title: 'Mango Lassi',
    description: 'Sweet mango yogurt drink.',
    ingredients: ['mango', 'curd', 'sugar'],
    instructions: 'Blend all ingredients until smooth.'
  },
  {
    id: 69,
    title: 'Roti',
    description: 'Soft wheat flatbread.',
    ingredients: ['wheat flour', 'water'],
    instructions: 'Knead dough. Roll and cook on pan.'
  },
  {
    id: 70,
    title: 'Jeera Rice',
    description: 'Cumin flavored rice.',
    ingredients: ['rice', 'cumin', 'ghee'],
    instructions: 'Cook rice with cumin seeds in ghee.'
  },

  {
    id: 71,
    title: 'Paneer Korma',
    description: 'Rich paneer curry.',
    ingredients: ['paneer', 'cream', 'spices'],
    instructions: 'Cook paneer in creamy spiced gravy.'
  },
  {
    id: 72,
    title: 'Vegetable Jalfrezi',
    description: 'Spicy stir-fried vegetables.',
    ingredients: ['vegetables', 'spices', 'oil'],
    instructions: 'Stir fry vegetables with spices.'
  },
  {
    id: 73,
    title: 'Dal Tadka',
    description: 'Tempered lentils.',
    ingredients: ['lentils', 'garlic', 'ghee'],
    instructions: 'Cook lentils. Add garlic tempering.'
  },
  {
    id: 74,
    title: 'Bhindi Fry',
    description: 'Crispy okra fry.',
    ingredients: ['okra', 'spices', 'oil'],
    instructions: 'Slice and fry okra with spices.'
  },
  {
    id: 75,
    title: 'Vegetable Paratha',
    description: 'Stuffed flatbread.',
    ingredients: ['wheat flour', 'vegetables', 'spices'],
    instructions: 'Stuff dough and cook on pan.'
  },

  {
    id: 76,
    title: 'Coconut Ladoo',
    description: 'Sweet coconut balls.',
    ingredients: ['coconut', 'condensed milk'],
    instructions: 'Mix and shape into balls.'
  },
  {
    id: 77,
    title: 'Rice Kheer',
    description: 'Rice pudding dessert.',
    ingredients: ['rice', 'milk', 'sugar'],
    instructions: 'Cook rice in milk. Add sugar.'
  },
  {
    id: 78,
    title: 'Vegetable Samosa',
    description: 'Crispy stuffed snack.',
    ingredients: ['flour', 'potato', 'spices'],
    instructions: 'Prepare filling. Stuff and fry.'
  },
  {
    id: 79,
    title: 'Paneer Roll',
    description: 'Stuffed wrap.',
    ingredients: ['roti', 'paneer', 'sauce'],
    instructions: 'Fill roti with paneer and roll.'
  },
  {
    id: 80,
    title: 'Vegetable Manchurian',
    description: 'Indo-Chinese dish.',
    ingredients: ['vegetables', 'corn flour', 'sauce'],
    instructions: 'Make balls and cook in sauce.'
  },

  {
    id: 81,
    title: 'Gobi Manchurian',
    description: 'Cauliflower in sauce.',
    ingredients: ['cauliflower', 'corn flour', 'sauce'],
    instructions: 'Fry cauliflower and toss in sauce.'
  },
  {
    id: 82,
    title: 'Vegetable Hakka Noodles',
    description: 'Indo-Chinese noodles.',
    ingredients: ['noodles', 'vegetables', 'soy sauce'],
    instructions: 'Stir fry noodles with vegetables.'
  },
  {
    id: 83,
    title: 'Chole Bhature',
    description: 'Chickpea curry with fried bread.',
    ingredients: ['chickpea', 'flour', 'spices'],
    instructions: 'Cook chole. Fry bhature.'
  },
  {
    id: 84,
    title: 'Rajma Curry',
    description: 'Kidney bean curry.',
    ingredients: ['rajma', 'onion', 'tomato'],
    instructions: 'Cook beans with onion tomato gravy.'
  },
  {
    id: 85,
    title: 'Vegetable Kathi Roll',
    description: 'Street style wrap.',
    ingredients: ['roti', 'vegetables', 'sauce'],
    instructions: 'Fill roti and roll.'
  },

  {
    id: 86,
    title: 'Paneer Pakora',
    description: 'Fried paneer snack.',
    ingredients: ['paneer', 'gram flour', 'spices'],
    instructions: 'Dip paneer in batter and fry.'
  },
  {
    id: 87,
    title: 'Vegetable Daliya',
    description: 'Healthy broken wheat dish.',
    ingredients: ['daliya', 'vegetables', 'water'],
    instructions: 'Cook all ingredients together.'
  },
  {
    id: 88,
    title: 'Spinach Paratha',
    description: 'Green flatbread.',
    ingredients: ['wheat flour', 'spinach', 'spices'],
    instructions: 'Mix dough and cook.'
  },
  {
    id: 89,
    title: 'Corn Chaat',
    description: 'Spicy corn snack.',
    ingredients: ['corn', 'lemon', 'spices'],
    instructions: 'Mix all ingredients.'
  },
  {
    id: 90,
    title: 'Vegetable Omelette Roll',
    description: 'Egg roll with veggies.',
    ingredients: ['egg', 'vegetables', 'roti'],
    instructions: 'Make omelette. Roll in roti.'
  },

  {
    id: 91,
    title: 'Mushroom Soup',
    description: 'Creamy mushroom soup.',
    ingredients: ['mushroom', 'milk', 'pepper'],
    instructions: 'Cook and blend mushrooms.'
  },
  {
    id: 92,
    title: 'Vegetable Poha',
    description: 'Flattened rice dish.',
    ingredients: ['poha', 'vegetables', 'mustard seeds'],
    instructions: 'Cook poha with vegetables.'
  },
  {
    id: 93,
    title: 'Sabudana Khichdi',
    description: 'Tapioca pearl dish.',
    ingredients: ['sabudana', 'peanut', 'potato'],
    instructions: 'Cook soaked sabudana with peanuts.'
  },
  {
    id: 94,
    title: 'Vegetable Frankie',
    description: 'Street style wrap.',
    ingredients: ['roti', 'vegetables', 'sauce'],
    instructions: 'Fill and roll.'
  },
  {
    id: 95,
    title: 'Paneer Sandwich',
    description: 'Grilled paneer sandwich.',
    ingredients: ['bread', 'paneer', 'butter'],
    instructions: 'Assemble and grill.'
  },

  {
    id: 96,
    title: 'Vegetable Cutlet Burger',
    description: 'Veg patty burger.',
    ingredients: ['bun', 'cutlet', 'sauce'],
    instructions: 'Assemble burger.'
  },
  {
    id: 97,
    title: 'Cheese Corn Balls',
    description: 'Fried snack.',
    ingredients: ['corn', 'cheese', 'breadcrumbs'],
    instructions: 'Shape and fry.'
  },
  {
    id: 98,
    title: 'Vegetable Pizza',
    description: 'Homemade veg pizza.',
    ingredients: ['pizza base', 'vegetables', 'cheese'],
    instructions: 'Assemble and bake.'
  },
  {
    id: 99,
    title: 'Paneer Pizza',
    description: 'Paneer topping pizza.',
    ingredients: ['pizza base', 'paneer', 'cheese'],
    instructions: 'Top and bake.'
  },
  {
    id: 100,
    title: 'Garlic Mushroom',
    description: 'Sauteed mushrooms.',
    ingredients: ['mushroom', 'garlic', 'butter'],
    instructions: 'Saute mushrooms with garlic.'
  },

  {
    id: 101,
    title: 'Vegetable Pasta Alfredo',
    description: 'Creamy pasta.',
    ingredients: ['pasta', 'cream', 'vegetables'],
    instructions: 'Cook pasta. Add creamy sauce.'
  },
  {
    id: 102,
    title: 'Red Sauce Pasta',
    description: 'Tangy pasta dish.',
    ingredients: ['pasta', 'tomato', 'garlic'],
    instructions: 'Cook pasta. Mix with sauce.'
  },
  {
    id: 103,
    title: 'Vegetable Lasagna',
    description: 'Layered pasta bake.',
    ingredients: ['lasagna sheets', 'vegetables', 'cheese'],
    instructions: 'Layer and bake.'
  },
  {
    id: 104,
    title: 'Cheese Omelette',
    description: 'Egg omelette with cheese.',
    ingredients: ['egg', 'cheese', 'butter'],
    instructions: 'Cook eggs and add cheese.'
  },
  {
    id: 105,
    title: 'Herb Rice',
    description: 'Flavored rice.',
    ingredients: ['rice', 'herbs', 'butter'],
    instructions: 'Cook rice with herbs.'
  },

  {
    id: 106,
    title: 'Vegetable Soup',
    description: 'Simple mixed soup.',
    ingredients: ['vegetables', 'water', 'salt'],
    instructions: 'Boil and season.'
  },
  {
    id: 107,
    title: 'Paneer Fried Noodles',
    description: 'Noodles with paneer.',
    ingredients: ['noodles', 'paneer', 'soy sauce'],
    instructions: 'Stir fry together.'
  },
  {
    id: 108,
    title: 'Vegetable Wrap',
    description: 'Quick veggie wrap.',
    ingredients: ['roti', 'vegetables', 'sauce'],
    instructions: 'Fill and roll.'
  },
  {
    id: 109,
    title: 'Potato Wedges',
    description: 'Baked potato snack.',
    ingredients: ['potato', 'oil', 'spices'],
    instructions: 'Bake seasoned wedges.'
  },
  {
    id: 110,
    title: 'Paneer Salad',
    description: 'Healthy paneer salad.',
    ingredients: ['paneer', 'vegetables', 'lemon'],
    instructions: 'Mix all ingredients.'
  },

  {
    id: 111,
    title: 'Vegetable Fried Idli',
    description: 'Fried idli snack.',
    ingredients: ['idli', 'vegetables', 'spices'],
    instructions: 'Fry idli with vegetables.'
  },
  {
    id: 112,
    title: 'Curd Sandwich',
    description: 'Soft curd filling sandwich.',
    ingredients: ['bread', 'curd', 'vegetables'],
    instructions: 'Mix filling and assemble.'
  },
  {
    id: 113,
    title: 'Vegetable Rice Noodles',
    description: 'Light noodle dish.',
    ingredients: ['rice noodles', 'vegetables', 'soy sauce'],
    instructions: 'Cook and stir fry.'
  },
  {
    id: 114,
    title: 'Mango Rice',
    description: 'Tangy mango rice.',
    ingredients: ['rice', 'raw mango', 'spices'],
    instructions: 'Mix rice with mango seasoning.'
  },
  {
    id: 115,
    title: 'Chocolate Mug Cake',
    description: 'Quick microwave cake.',
    ingredients: ['flour', 'cocoa', 'milk'],
    instructions: 'Mix and microwave.'
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
