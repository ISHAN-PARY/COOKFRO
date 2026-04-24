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
    instructions: 'Cook rice. Scramble eggs. Mix scrambled eggs with rice.'
  },
  {
    id: 2,
    title: 'French Toast',
    description: 'Classic French toast with bread and egg.',
    ingredients: ['bread', 'egg', 'spices'],
    instructions: 'mix egg with spicesDip bread in egg. Fry until golden.'
  },
  {
    id: 3,
    title: 'Banana Milkshake',
    description: 'Refreshing banana milkshake.',
    ingredients: ['milk', 'banana', 'sugar'],
    instructions: 'Blend banana, milk, and sugar.'
  },
  {
    id: 4,
    title: 'Grilled Cheese',
    description: 'Cheesy grilled sandwich.',
    ingredients: ['bread', 'cheese'],
    instructions: 'toast bread. Add cheese. Grill until chease is melted.'
  },
  {
    id: 5,
    title: 'Omelette',
    description: 'Egg omelette with onion.',
    ingredients: ['egg', 'onion','spices'],
    instructions: 'Beat eggs, onion, spices, cook in a pan until it is set.'
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
    ingredients: ['chicken', 'tomato', 'onion', 'spices'],
    instructions: 'Cook chicken with tomato, onion, and spices.'
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
    title: 'Pasta',
    description: 'Pasta in tomato sauce.',
    ingredients: ['pasta', 'tomato', 'onion'],
    instructions: 'Cook pasta, make tomato sauce, mix together  .'
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
    ingredients: ['carrot','meat', 'tomato', 'cucumber'],
    instructions: 'Chop and mix all ingredients toghether.'
  },
  {
    id: 13,
    title: 'Roasted Potatoes',
    description: 'Crispy roasted potatoes.',
    ingredients: ['potato', 'oil', 'salt'],
    instructions: 'add salt to potatoes and roast potatoes in oil in oil.'
  },
  {
    id: 14,
    title: 'Milk tea',
    description: 'Simple milk tea.',
    ingredients: ['milk', 'sugar', 'tea powder'],
    instructions: 'boil tea powder with milk and add some  sugar.'
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
    title: 'Butter paneer',
    description: 'Creamy paneer curry.',
    ingredients: ['paneer', 'butter', 'tomato', 'cream'],
    instructions: 'Cook tomato gravy. Add paneer and cream. Simmer.'
  },
  {
    id: 17,
    title: 'Mushroom Fry',
    description: 'Spicy mushroom dish.',
    ingredients: ['mushroom', 'pepper', 'onion'],
    instructions: 'cook onion in heated oil, until it is brown onion. Add mushroom and pepper. Cook well.'
  },
  {
    id:18,
    title: 'Aloo Gobi',
    description: 'A vegetarian dish from india.',
    ingredients: ['potato', 'cauliflower', 'spices'],
    instructions: 'Cook potato and cauliflower add spices.'
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
    description: 'Simple veg fried noodles.',
    ingredients: ['noodles', 'vegetables', 'soy sauce'],
    instructions: 'Cook noodles. Stir fry with vegetables and sauce.'
  },
  {
    id: 21,
    title: 'Brinjal Fry',
    description: 'Crispy brinjal fry.',
    ingredients: ['Brinjal', 'spices', 'oil'],
    instructions: 'Slice Brinjal. Coat spices. Fry until crispy.'
  },
  {
    id: 22,
    title: 'Spinach Dal',
    description: 'Healthy curry.',
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
    ingredients: ['potato', 'vegetables', 'breadcrumbs','egg'],
    instructions: 'steam cook potato. mix potato and vegetables until it becomes a dough . shape it . take egg white and dip into it and put bread crumbs on it .fry it in oil or air fryer.'
  },
  {
    id: 25,
    title: 'Tomato Chutney',
    description: 'Tangy side dish best for dosa from south india .',
    ingredients: ['tomato', 'chili', 'garlic','dal','curry leaves'],
    instructions: 'Cook tomato, chilli, garlic .blend it .add curry leaves to oil and put the blend and mix.'
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
    description: 'easy dish from south india.',
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
    description: 'Simple soup.',
    ingredients: ['lentils', 'garlic', 'onion'],
    instructions: 'Boil lentils. Add sautéed garlic and onion.'
  },
  {
    id: 32,
    title: 'Stuffed Capsicum',
    description: 'Capsicum filled with masala.',
    ingredients: ['capsicum', 'potato', 'spices'],
    instructions: 'steam cook potatoes. mix potatoes with spices .Stuff capsicum with the mix . Cook capsicum  until soft.'
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
    title: 'Onion Pakoda',
    description: 'Crispy onion fritters.',
    ingredients: ['onion', 'gram flour', 'spices'],
    instructions: 'Mix gram flour and spices with water .sperad the mixture into onions . Deep fry the onions.'
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
    instructions: 'Cook pumpkin add water and add with spices and coconut.'
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
  },
  {
  id: 116,
  title: 'Simple Veg Rice',
  description: 'Quick vegetable rice.',
  ingredients: ['rice', 'vegetables', 'salt'],
  instructions: 'Cook rice. Mix vegetables and salt.'
},
{
  id: 117,
  title: 'Egg Curry',
  description: 'Spicy egg curry.',
  ingredients: ['egg', 'onion', 'spices'],
  instructions: 'Boil eggs. Cook in onion gravy.'
},
{
  id: 118,
  title: 'Butter Toast',
  description: 'Crispy butter toast.',
  ingredients: ['bread', 'butter'],
  instructions: 'Apply butter and toast.'
},
{
  id: 119,
  title: 'Tomato Soup',
  description: 'Warm tomato soup.',
  ingredients: ['tomato', 'water', 'salt'],
  instructions: 'Boil and blend tomatoes.'
},
{
  id: 120,
  title: 'Veg Sandwich',
  description: 'Simple vegetable sandwich.',
  ingredients: ['bread', 'vegetables', 'butter'],
  instructions: 'Assemble and serve.'
},
{
  id: 121,
  title: 'Masala Omelette',
  description: 'Spicy omelette.',
  ingredients: ['egg', 'onion', 'spices'],
  instructions: 'Mix and cook.'
},
{
  id: 122,
  title: 'Lemon Rice',
  description: 'Tangy lemon rice.',
  ingredients: ['rice', 'lemon', 'spices'],
  instructions: 'Mix cooked rice with lemon.'
},
{
  id: 123,
  title: 'Garlic Rice',
  description: 'Flavorful garlic rice.',
  ingredients: ['rice', 'garlic', 'oil'],
  instructions: 'Cook rice with garlic.'
},
{
  id: 124,
  title: 'Cheese Toast',
  description: 'Melted cheese bread.',
  ingredients: ['bread', 'cheese'],
  instructions: 'Top cheese and toast.'
},
{
  id: 125,
  title: 'Veg Soup',
  description: 'Light vegetable soup.',
  ingredients: ['vegetables', 'water'],
  instructions: 'Boil and season.'
},
{
  id: 126,
  title: 'Fried Egg',
  description: 'Simple fried egg.',
  ingredients: ['egg', 'oil'],
  instructions: 'Fry egg in pan.'
},
{
  id: 127,
  title: 'Plain Rice',
  description: 'Steamed rice.',
  ingredients: ['rice', 'water'],
  instructions: 'Cook rice.'
},
{
  id: 128,
  title: 'Potato Fry',
  description: 'Crispy potato fry.',
  ingredients: ['potato', 'oil', 'salt'],
  instructions: 'Fry potatoes.'
},
{
  id: 129,
  title: 'Onion Salad',
  description: 'Fresh onion salad.',
  ingredients: ['onion', 'salt', 'lemon'],
  instructions: 'Mix ingredients.'
},
{
  id: 130,
  title: 'Egg Toast',
  description: 'Egg coated toast.',
  ingredients: ['bread', 'egg'],
  instructions: 'Dip and fry.'
},
{
  id: 131,
  title: 'Milk Tea',
  description: 'Hot milk tea.',
  ingredients: ['milk', 'tea', 'sugar'],
  instructions: 'Boil and serve.'
},
{
  id: 132,
  title: 'Black Tea',
  description: 'Strong tea.',
  ingredients: ['tea', 'water'],
  instructions: 'Boil and strain.'
},
{
  id: 133,
  title: 'Fruit Bowl',
  description: 'Mixed fruits.',
  ingredients: ['fruits'],
  instructions: 'Cut and mix.'
},
{
  id: 134,
  title: 'Banana Snack',
  description: 'Quick banana snack.',
  ingredients: ['banana'],
  instructions: 'Slice and serve.'
},
{
  id: 135,
  title: 'Rice Porridge',
  description: 'Soft rice porridge.',
  ingredients: ['rice', 'water'],
  instructions: 'Cook until soft.'
},
{
  id: 136,
  title: 'Veg Stir Fry',
  description: 'Quick stir fry.',
  ingredients: ['vegetables', 'oil'],
  instructions: 'Stir fry veggies.'
},
{
  id: 137,
  title: 'Egg Bhurji',
  description: 'Scrambled eggs.',
  ingredients: ['egg', 'onion', 'spices'],
  instructions: 'Cook scrambled eggs.'
},
{
  id: 138,
  title: 'Tomato Rice',
  description: 'Spiced tomato rice.',
  ingredients: ['rice', 'tomato'],
  instructions: 'Cook together.'
},
{
  id: 139,
  title: 'Cucumber Salad',
  description: 'Fresh salad.',
  ingredients: ['cucumber', 'salt'],
  instructions: 'Mix ingredients.'
},
{
  id: 140,
  title: 'Bread Jam',
  description: 'Sweet bread.',
  ingredients: ['bread', 'jam'],
  instructions: 'Spread and eat.'
},
{
  id: 141,
  title: 'Butter Rice',
  description: 'Simple butter rice.',
  ingredients: ['rice', 'butter'],
  instructions: 'Mix butter in rice.'
},
{
  id: 142,
  title: 'Egg Roll',
  description: 'Simple egg roll.',
  ingredients: ['egg', 'roti'],
  instructions: 'Wrap egg in roti.'
},
{
  id: 143,
  title: 'Veg Wrap',
  description: 'Vegetable wrap.',
  ingredients: ['roti', 'vegetables'],
  instructions: 'Fill and roll.'
},
{
  id: 144,
  title: 'Sweet Milk',
  description: 'Sweet milk drink.',
  ingredients: ['milk', 'sugar'],
  instructions: 'Mix and drink.'
},
{
  id: 145,
  title: 'Boiled Egg',
  description: 'Hard boiled egg.',
  ingredients: ['egg'],
  instructions: 'Boil egg.'
},
{
  id: 146,
  title: 'Veg Noodles',
  description: 'Simple noodles.',
  ingredients: ['noodles', 'vegetables'],
  instructions: 'Cook and mix.'
},
{
  id: 147,
  title: 'Rice Upma',
  description: 'Rice upma.',
  ingredients: ['rice', 'spices'],
  instructions: 'Cook and mix.'
},
{
  id: 148,
  title: 'Onion Fry',
  description: 'Fried onion.',
  ingredients: ['onion', 'oil'],
  instructions: 'Fry onion.'
},
{
  id: 149,
  title: 'Egg Sandwich',
  description: 'Egg sandwich.',
  ingredients: ['bread', 'egg'],
  instructions: 'Assemble and serve.'
},
{
  id: 150,
  title: 'Veg Cutlet',
  description: 'Crispy veg snack.',
  ingredients: ['vegetables', 'breadcrumbs'],
  instructions: 'Shape and fry.'
},
{
  id: 151,
  title: 'Paneer Rice',
  description: 'Rice with paneer cubes.',
  ingredients: ['rice', 'paneer', 'spices'],
  instructions: 'Cook rice. Add paneer and spices.'
},
{
  id: 152,
  title: 'Chicken Rice',
  description: 'Simple chicken rice.',
  ingredients: ['rice', 'chicken', 'salt'],
  instructions: 'Cook rice with chicken.'
},
{
  id: 153,
  title: 'Veg Curry',
  description: 'Mixed vegetable curry.',
  ingredients: ['vegetables', 'spices'],
  instructions: 'Cook vegetables with spices.'
},
{
  id: 154,
  title: 'Egg Masala',
  description: 'Egg masala gravy.',
  ingredients: ['egg', 'onion', 'spices'],
  instructions: 'Cook eggs in masala.'
},
{
  id: 155,
  title: 'Bread Butter',
  description: 'Classic bread butter.',
  ingredients: ['bread', 'butter'],
  instructions: 'Spread butter on bread.'
},
{
  id: 156,
  title: 'Corn Salad',
  description: 'Sweet corn salad.',
  ingredients: ['corn', 'salt', 'lemon'],
  instructions: 'Mix all ingredients.'
},
{
  id: 157,
  title: 'Veg Maggi',
  description: 'Maggi with vegetables.',
  ingredients: ['noodles', 'vegetables'],
  instructions: 'Cook noodles with vegetables.'
},
{
  id: 158,
  title: 'Milk Coffee',
  description: 'Hot milk coffee.',
  ingredients: ['milk', 'coffee', 'sugar'],
  instructions: 'Mix and serve hot.'
},
{
  id: 159,
  title: 'Chicken Fry',
  description: 'Spicy fried chicken.',
  ingredients: ['chicken', 'spices', 'oil'],
  instructions: 'Fry chicken with spices.'
},
{
  id: 160,
  title: 'Veg Rice Bowl',
  description: 'Healthy rice bowl.',
  ingredients: ['rice', 'vegetables'],
  instructions: 'Combine and serve.'
},
{
  id: 161,
  title: 'Potato Curry',
  description: 'Simple potato curry.',
  ingredients: ['potato', 'spices'],
  instructions: 'Cook potatoes with spices.'
},
{
  id: 162,
  title: 'Egg Rice',
  description: 'Egg fried rice.',
  ingredients: ['rice', 'egg'],
  instructions: 'Stir fry rice with egg.'
},
{
  id: 163,
  title: 'Veg Pasta',
  description: 'Vegetable pasta.',
  ingredients: ['pasta', 'vegetables'],
  instructions: 'Cook pasta and mix veggies.'
},
{
  id: 164,
  title: 'Tomato Curry',
  description: 'Tangy tomato curry.',
  ingredients: ['tomato', 'spices'],
  instructions: 'Cook tomatoes with spices.'
},
{
  id: 165,
  title: 'Egg Noodles',
  description: 'Egg noodles.',
  ingredients: ['noodles', 'egg'],
  instructions: 'Cook noodles and mix egg.'
},
{
  id: 166,
  title: 'Veg Omelette',
  description: 'Omelette with veggies.',
  ingredients: ['egg', 'vegetables'],
  instructions: 'Cook mixture in pan.'
},
{
  id: 167,
  title: 'Chicken Soup',
  description: 'Light chicken soup.',
  ingredients: ['chicken', 'water'],
  instructions: 'Boil and season.'
},
{
  id: 168,
  title: 'Rice Salad',
  description: 'Cold rice salad.',
  ingredients: ['rice', 'vegetables'],
  instructions: 'Mix and serve.'
},
{
  id: 169,
  title: 'Paneer Fry',
  description: 'Fried paneer cubes.',
  ingredients: ['paneer', 'oil'],
  instructions: 'Fry paneer.'
},
{
  id: 170,
  title: 'Veg Burger',
  description: 'Simple veg burger.',
  ingredients: ['bun', 'vegetables'],
  instructions: 'Assemble burger.'
},
{
  id: 171,
  title: 'Egg Burger',
  description: 'Egg burger.',
  ingredients: ['bun', 'egg'],
  instructions: 'Assemble and serve.'
},
{
  id: 172,
  title: 'Veg Pizza Slice',
  description: 'Vegetable pizza.',
  ingredients: ['base', 'vegetables', 'cheese'],
  instructions: 'Top and bake.'
},
{
  id: 173,
  title: 'Chicken Pizza',
  description: 'Chicken pizza.',
  ingredients: ['base', 'chicken', 'cheese'],
  instructions: 'Bake pizza.'
},
{
  id: 174,
  title: 'Cheese Pasta',
  description: 'Cheesy pasta.',
  ingredients: ['pasta', 'cheese'],
  instructions: 'Mix and cook.'
},
{
  id: 175,
  title: 'Veg Wrap Roll',
  description: 'Veg roll.',
  ingredients: ['roti', 'vegetables'],
  instructions: 'Fill and roll.'
},
{
  id: 176,
  title: 'Chicken Wrap',
  description: 'Chicken roll.',
  ingredients: ['roti', 'chicken'],
  instructions: 'Wrap and serve.'
},
{
  id: 177,
  title: 'Potato Sandwich',
  description: 'Potato sandwich.',
  ingredients: ['bread', 'potato'],
  instructions: 'Assemble and toast.'
},
{
  id: 178,
  title: 'Egg Curry Rice',
  description: 'Rice with egg curry.',
  ingredients: ['rice', 'egg curry'],
  instructions: 'Serve together.'
},
{
  id: 179,
  title: 'Veg Soup Bowl',
  description: 'Vegetable soup.',
  ingredients: ['vegetables', 'water'],
  instructions: 'Cook and serve.'
},
{
  id: 180,
  title: 'Chicken Rice Bowl',
  description: 'Chicken rice bowl.',
  ingredients: ['rice', 'chicken'],
  instructions: 'Mix and serve.'
},
{
  id: 181,
  title: 'Paneer Sandwich',
  description: 'Paneer sandwich.',
  ingredients: ['bread', 'paneer'],
  instructions: 'Assemble and grill.'
},
{
  id: 182,
  title: 'Veg Toast',
  description: 'Vegetable toast.',
  ingredients: ['bread', 'vegetables'],
  instructions: 'Toast and serve.'
},
{
  id: 183,
  title: 'Milkshake Vanilla',
  description: 'Vanilla milkshake.',
  ingredients: ['milk', 'vanilla'],
  instructions: 'Blend and serve.'
},
{
  id: 184,
  title: 'Chocolate Shake',
  description: 'Chocolate milkshake.',
  ingredients: ['milk', 'chocolate'],
  instructions: 'Blend ingredients.'
},
{
  id: 185,
  title: 'Strawberry Shake',
  description: 'Strawberry drink.',
  ingredients: ['milk', 'strawberry'],
  instructions: 'Blend and serve.'
},
{
  id: 186,
  title: 'Veg Fried Rice',
  description: 'Classic fried rice.',
  ingredients: ['rice', 'vegetables'],
  instructions: 'Stir fry rice.'
},
{
  id: 187,
  title: 'Chicken Fried Rice',
  description: 'Chicken fried rice.',
  ingredients: ['rice', 'chicken'],
  instructions: 'Cook together.'
},
{
  id: 188,
  title: 'Paneer Fried Rice',
  description: 'Paneer rice.',
  ingredients: ['rice', 'paneer'],
  instructions: 'Stir fry.'
},
{
  id: 189,
  title: 'Veg Cutlet Plate',
  description: 'Cutlet snack.',
  ingredients: ['vegetables', 'crumbs'],
  instructions: 'Shape and fry.'
},
{
  id: 190,
  title: 'Egg Cutlet',
  description: 'Egg cutlet.',
  ingredients: ['egg', 'crumbs'],
  instructions: 'Fry and serve.'
},
{
  id: 191,
  title: 'Chicken Cutlet',
  description: 'Chicken snack.',
  ingredients: ['chicken', 'crumbs'],
  instructions: 'Fry cutlet.'
},
{
  id: 192,
  title: 'Veg Soup Creamy',
  description: 'Creamy soup.',
  ingredients: ['vegetables', 'cream'],
  instructions: 'Cook and blend.'
},
{
  id: 193,
  title: 'Tomato Pasta',
  description: 'Tomato pasta.',
  ingredients: ['pasta', 'tomato'],
  instructions: 'Cook and mix.'
},
{
  id: 194,
  title: 'Garlic Pasta',
  description: 'Garlic flavored pasta.',
  ingredients: ['pasta', 'garlic'],
  instructions: 'Cook and mix.'
},
{
  id: 195,
  title: 'Veg Chowmein',
  description: 'Street noodles.',
  ingredients: ['noodles', 'vegetables'],
  instructions: 'Stir fry.'
},
{
  id: 196,
  title: 'Chicken Chowmein',
  description: 'Chicken noodles.',
  ingredients: ['noodles', 'chicken'],
  instructions: 'Cook together.'
},
{
  id: 197,
  title: 'Paneer Chowmein',
  description: 'Paneer noodles.',
  ingredients: ['noodles', 'paneer'],
  instructions: 'Mix and cook.'
},
{
  id: 198,
  title: 'Veg Salad Bowl',
  description: 'Healthy salad.',
  ingredients: ['vegetables'],
  instructions: 'Mix and serve.'
},
{
  id: 199,
  title: 'Fruit Salad',
  description: 'Fresh fruits.',
  ingredients: ['fruits'],
  instructions: 'Cut and mix.'
},
{
  id: 200,
  title: 'Egg Salad',
  description: 'Protein salad.',
  ingredients: ['egg', 'vegetables'],
  instructions: 'Mix ingredients.'
},
{
  id: 201,
  title: 'Chicken Salad',
  description: 'Chicken salad.',
  ingredients: ['chicken', 'vegetables'],
  instructions: 'Mix and serve.'
},
{
  id: 202,
  title: 'Paneer Salad',
  description: 'Paneer salad.',
  ingredients: ['paneer', 'vegetables'],
  instructions: 'Combine and serve.'
},
{
  id: 203,
  title: 'Veg Roll',
  description: 'Veg roll.',
  ingredients: ['roti', 'vegetables'],
  instructions: 'Wrap and serve.'
},
{
  id: 204,
  title: 'Chicken Roll',
  description: 'Chicken roll.',
  ingredients: ['roti', 'chicken'],
  instructions: 'Wrap and serve.'
},
{
  id: 205,
  title: 'Egg Roll Street',
  description: 'Street egg roll.',
  ingredients: ['roti', 'egg'],
  instructions: 'Cook and wrap.'
},
{
  id: 206,
  title: 'Veg Pizza Mini',
  description: 'Mini pizza.',
  ingredients: ['base', 'veg', 'cheese'],
  instructions: 'Bake.'
},
{
  id: 207,
  title: 'Chicken Pizza Mini',
  description: 'Mini chicken pizza.',
  ingredients: ['base', 'chicken'],
  instructions: 'Bake.'
},
{
  id: 208,
  title: 'Paneer Pizza Mini',
  description: 'Mini paneer pizza.',
  ingredients: ['base', 'paneer'],
  instructions: 'Bake.'
},
{
  id: 209,
  title: 'Veg Rice Deluxe',
  description: 'Rich veg rice.',
  ingredients: ['rice', 'veg'],
  instructions: 'Cook and serve.'
},
{
  id: 210,
  title: 'Chicken Rice Deluxe',
  description: 'Rich chicken rice.',
  ingredients: ['rice', 'chicken'],
  instructions: 'Cook and serve.'
},
{
  id: 211,
  title: 'Paneer Rice Deluxe',
  description: 'Rich paneer rice.',
  ingredients: ['rice', 'paneer'],
  instructions: 'Cook.'
},
{
  id: 212,
  title: 'Veg Soup Hot',
  description: 'Hot soup.',
  ingredients: ['vegetables'],
  instructions: 'Boil.'
},
{
  id: 213,
  title: 'Chicken Soup Hot',
  description: 'Hot chicken soup.',
  ingredients: ['chicken'],
  instructions: 'Cook.'
},
{
  id: 214,
  title: 'Paneer Soup',
  description: 'Paneer soup.',
  ingredients: ['paneer'],
  instructions: 'Cook.'
},
{
  id: 215,
  title: 'Veg Snack Plate',
  description: 'Snack combo.',
  ingredients: ['veg'],
  instructions: 'Serve.'
},
{
  id: 216,
  title: 'Chicken Snack Plate',
  description: 'Chicken snack.',
  ingredients: ['chicken'],
  instructions: 'Serve.'
},
{
  id: 217,
  title: 'Egg Snack Plate',
  description: 'Egg snack.',
  ingredients: ['egg'],
  instructions: 'Serve.'
},
{
  id: 218,
  title: 'Paneer Snack Plate',
  description: 'Paneer snack.',
  ingredients: ['paneer'],
  instructions: 'Serve.'
},
{
  id: 219,
  title: 'Veg Combo Meal',
  description: 'Veg combo.',
  ingredients: ['rice', 'veg'],
  instructions: 'Serve.'
},
{
  id: 220,
  title: 'Chicken Combo Meal',
  description: 'Chicken combo.',
  ingredients: ['rice', 'chicken'],
  instructions: 'Serve.'
},
{
  id: 221,
  title: 'Egg Rice Bowl',
  description: 'Egg rice combo.',
  ingredients: ['rice', 'egg'],
  instructions: 'Mix and serve.'
},
{
  id: 222,
  title: 'Veg Rice Mix',
  description: 'Mixed veg rice.',
  ingredients: ['rice', 'vegetables'],
  instructions: 'Cook and mix.'
},
{
  id: 223,
  title: 'Chicken Masala',
  description: 'Spicy chicken.',
  ingredients: ['chicken', 'spices'],
  instructions: 'Cook well.'
},
{
  id: 224,
  title: 'Paneer Masala',
  description: 'Paneer curry.',
  ingredients: ['paneer', 'spices'],
  instructions: 'Cook paneer.'
},
{
  id: 225,
  title: 'Veg Masala',
  description: 'Veg curry.',
  ingredients: ['vegetables', 'spices'],
  instructions: 'Cook vegetables.'
},
{
  id: 326,
  title: 'Rice Combo Plate',
  description: 'Rice combo meal.',
  ingredients: ['rice', 'curry'],
  instructions: 'Serve together.'
},
{
  id: 327,
  title: 'Veg Deluxe Plate',
  description: 'Veg deluxe meal.',
  ingredients: ['vegetables', 'rice'],
  instructions: 'Serve fresh.'
},
{
  id: 328,
  title: 'Chicken Deluxe Plate',
  description: 'Chicken deluxe meal.',
  ingredients: ['chicken', 'rice'],
  instructions: 'Serve hot.'
},
{
  id: 329,
  title: 'Paneer Deluxe Plate',
  description: 'Paneer deluxe meal.',
  ingredients: ['paneer', 'rice'],
  instructions: 'Serve hot.'
},
{
  id: 330,
  title: 'Egg Deluxe Plate',
  description: 'Egg deluxe meal.',
  ingredients: ['egg', 'rice'],
  instructions: 'Serve hot.'
},

...Array.from({ length: 20 }, (_, i) => {
  const id = 331 + i;
  return {
    id,
    title: `Quick Recipe ${id}`,
    description: 'Fast and easy recipe.',
    ingredients: ['basic ingredients'],
    instructions: 'Cook and serve quickly.'
  };
})
];
Array.from()
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
