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
  description: 'A quick and flavorful fried rice made with fluffy scrambled eggs, garlic, and savory seasonings — perfect for a fast meal.',
  
  ingredients: [
    '2 eggs',
    '1 cup cooked rice',
    '1 tbsp oil',
    '2 cloves garlic (minced)',
    '2 tbsp soy sauce',
    'Salt and pepper to taste',
    '2 tbsp chopped spring onions'
  ],

  instructions: [
    'Heat oil in a pan over medium heat.',
    'Add minced garlic and sauté for about 30 seconds until fragrant.',
    'Crack the eggs into the pan and scramble until fully cooked.',
    'Add the cooked rice and mix well with the eggs.',
    'Pour in soy sauce, add salt and pepper, and stir thoroughly.',
    'Cook for another 2–3 minutes, then garnish with chopped spring onions.'
  ],
},
{
  id: 2,
  title: 'French Toast',
  description: 'Golden, crispy French toast with a soft, custardy center — perfect for breakfast.',
  ingredients: [
    '2 slices bread',
    '2 eggs',
    '1/4 cup milk',
    '1 tbsp sugar',
    '1/2 tsp cinnamon (optional)',
    '1 tbsp butter'
  ],
  instructions: [
    'In a bowl, whisk eggs, milk, sugar, and cinnamon.',
    'Dip each bread slice into the mixture, coating both sides.',
    'Heat butter in a pan over medium heat.',
    'Cook bread slices until golden brown on both sides.',
    'Serve hot with honey or syrup.'
  ],
},
{
  id: 3,
  title: 'Banana Milkshake',
  description: 'A creamy and refreshing banana milkshake, perfect for a quick energy boost.',
  ingredients: [
    '1 ripe banana',
    '1 cup milk',
    '2 tsp sugar or honey',
    '2 ice cubes (optional)'
  ],
  instructions: [
    'Peel and slice the banana.',
    'Add banana, milk, sugar, and ice cubes to a blender.',
    'Blend until smooth and creamy.',
    'Pour into a glass and serve chilled.'
  ],
},
{
  id: 4,
  title: 'Grilled Cheese Sandwich',
  description: 'Crispy, buttery bread with gooey melted cheese inside.',
  ingredients: [
    '2 slices bread',
    '2 slices cheese',
    '1 tbsp butter'
  ],
  instructions: [
    'Spread butter on one side of each bread slice.',
    'Place cheese between the unbuttered sides.',
    'Heat a pan and cook sandwich until golden brown.',
    'Flip and cook until cheese is melted.',
    'Serve hot.'
  ],
},
{
  id: 5,
  title: 'Omelette',
  description: 'A soft and fluffy omelette with onions and simple spices.',
  ingredients: [
    '2 eggs',
    '2 tbsp chopped onion',
    '1 tbsp chopped green chili (optional)',
    'Salt and pepper to taste',
    '1 tbsp oil or butter'
  ],
  instructions: [
    'Beat eggs with salt and pepper in a bowl.',
    'Heat oil in a pan and sauté onions.',
    'Pour in the eggs and cook on medium heat.',
    'Fold the omelette once set.',
    'Serve hot.'
  ],
},
{
  id: 6,
  title: 'Chicken Stir Fry',
  description: 'Quick and flavorful chicken stir fry with fresh vegetables.',
  ingredients: [
    '200g chicken (sliced)',
    '1 cup mixed vegetables',
    '2 tbsp soy sauce',
    '1 tbsp oil',
    '2 cloves garlic',
    'Salt and pepper to taste'
  ],
  instructions: [
    'Heat oil in a pan and sauté garlic.',
    'Add chicken and cook until browned.',
    'Add vegetables and stir fry for 3–4 minutes.',
    'Pour soy sauce, add salt and pepper.',
    'Cook for another 2 minutes and serve.'
  ],
},
{
  id: 7,
  title: 'Chicken Curry',
  description: 'A rich and spicy chicken curry cooked in a flavorful onion-tomato gravy.',
  ingredients: [
    '250g chicken',
    '1 onion (chopped)',
    '2 tomatoes (chopped)',
    '2 tbsp oil',
    '1 tsp ginger garlic paste',
    'Spices (turmeric, chili powder, garam masala)',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil and sauté onions until golden.',
    'Add ginger garlic paste and cook briefly.',
    'Add tomatoes and cook until soft.',
    'Add spices and mix well.',
    'Add chicken and cook until done.',
    'Simmer for 10 minutes and serve.'
  ],
},
{
  id: 8,
  title: 'Beef Stew',
  description: 'A hearty and comforting beef stew with tender meat and vegetables.',
  ingredients: [
    '300g beef',
    '2 potatoes (chopped)',
    '1 carrot (chopped)',
    '1 onion',
    '2 cups water or broth',
    'Salt and pepper'
  ],
  instructions: [
    'Heat oil and sauté onions.',
    'Add beef and cook until browned.',
    'Add vegetables and mix.',
    'Pour water or broth and simmer for 30–40 minutes.',
    'Season and serve hot.'
  ],
},
{
  id: 9,
  title: 'Pasta with Tomato Sauce',
  description: 'Simple and delicious pasta tossed in a rich tomato sauce.',
  ingredients: [
    '1 cup pasta',
    '2 tomatoes (pureed)',
    '2 cloves garlic',
    '1 tbsp oil',
    'Salt and herbs'
  ],
  instructions: [
    'Cook pasta according to instructions.',
    'Heat oil and sauté garlic.',
    'Add tomato puree and cook for 5–7 minutes.',
    'Add salt and herbs.',
    'Mix pasta with sauce and serve.'
  ],
},
{
  id: 10,
  title: 'Shrimp Stir Fry',
  description: 'Quick shrimp stir fry with vegetables and savory sauce.',
  ingredients: [
    '200g shrimp',
    '1 cup vegetables',
    '2 tbsp soy sauce',
    '1 tbsp oil',
    '2 cloves garlic'
  ],
  instructions: [
    'Heat oil and sauté garlic.',
    'Add shrimp and cook until pink.',
    'Add vegetables and stir fry.',
    'Add soy sauce and mix well.',
    'Cook for 2–3 minutes and serve.'
  ],
},
 {
  id: 11,
  title: 'Garlic Bread',
  description: 'Crispy toasted bread with buttery garlic flavor — perfect as a side or snack.',
  ingredients: [
    '4 slices bread',
    '2 tbsp butter (softened)',
    '2 cloves garlic (minced)',
    '1 tbsp chopped parsley (optional)'
  ],
  instructions: [
    'Mix butter and minced garlic in a bowl.',
    'Spread the garlic butter evenly on bread slices.',
    'Toast in a pan or oven until golden and crispy.',
    'Garnish with parsley and serve warm.'
  ],
},
{
  id: 12,
  title: 'Vegetable Salad',
  description: 'A fresh and crunchy mix of vegetables, perfect for a healthy side dish.',
  ingredients: [
    '1 carrot (chopped)',
    '1 tomato (chopped)',
    '1 cucumber (sliced)',
    '1/2 onion (optional)',
    'Salt to taste',
    '1 tbsp lemon juice'
  ],
  instructions: [
    'Wash and chop all vegetables.',
    'Combine them in a large bowl.',
    'Add salt and lemon juice.',
    'Toss well and serve fresh.'
  ],
},
{
  id: 13,
  title: 'Roasted Potatoes',
  description: 'Crispy and golden roasted potatoes with simple seasoning.',
  ingredients: [
    '2 potatoes (cubed)',
    '2 tbsp oil',
    'Salt to taste',
    '1/2 tsp pepper',
    '1/2 tsp paprika (optional)'
  ],
  instructions: [
    'Preheat oven to 200°C.',
    'Toss potatoes with oil, salt, and spices.',
    'Spread evenly on a baking tray.',
    'Roast for 25–30 minutes until crispy.',
    'Serve hot.'
  ],
},
{
  id: 14,
  title: 'Milk Tea',
  description: 'Warm and comforting milk tea, perfect for any time of the day.',
  ingredients: [
    '1 cup milk',
    '1/2 cup water',
    '1 tsp tea powder',
    '2 tsp sugar'
  ],
  instructions: [
    'Boil water and add tea powder.',
    'Add milk and bring to a boil.',
    'Add sugar and stir well.',
    'Strain into a cup and serve hot.'
  ],
},
{
  id: 15,
  title: 'Banana Smoothie',
  description: 'A smooth and creamy banana drink with natural sweetness.',
  ingredients: [
    '1 banana',
    '1 cup milk',
    '1 tbsp honey',
    '2 ice cubes'
  ],
  instructions: [
    'Add all ingredients to a blender.',
    'Blend until smooth.',
    'Pour into a glass.',
    'Serve chilled.'
  ],
},
{
  id: 16,
  title: 'Butter Paneer',
  description: 'Rich and creamy paneer curry cooked in a buttery tomato gravy.',
  ingredients: [
    '200g paneer',
    '2 tomatoes (pureed)',
    '2 tbsp butter',
    '2 tbsp cream',
    '1 tsp ginger garlic paste',
    'Spices (chili powder, garam masala)',
    'Salt to taste'
  ],
  instructions: [
    'Heat butter and sauté ginger garlic paste.',
    'Add tomato puree and cook until thick.',
    'Add spices and mix well.',
    'Add paneer cubes and simmer for 5 minutes.',
    'Stir in cream and serve hot.'
  ],
},
{
  id: 17,
  title: 'Mushroom Fry',
  description: 'Spicy and flavorful mushroom stir fry with onions.',
  ingredients: [
    '200g mushrooms',
    '1 onion (sliced)',
    '1 tbsp oil',
    '1/2 tsp pepper',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil and sauté onions until golden.',
    'Add mushrooms and cook until soft.',
    'Add salt and pepper.',
    'Cook until moisture evaporates.',
    'Serve hot.'
  ],
},
{
  id: 18,
  title: 'Aloo Gobi',
  description: 'Classic Indian dish made with potatoes and cauliflower cooked with spices.',
  ingredients: [
    '2 potatoes (cubed)',
    '1 cup cauliflower florets',
    '2 tbsp oil',
    'Spices (turmeric, chili powder)',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil and add spices.',
    'Add potatoes and cook for 5 minutes.',
    'Add cauliflower and mix well.',
    'Cover and cook until tender.',
    'Serve hot.'
  ],
},
{
  id: 19,
  title: 'Chickpea Masala',
  description: 'Protein-rich chickpeas cooked in a spicy onion-tomato gravy.',
  ingredients: [
    '1 cup boiled chickpeas',
    '1 onion (chopped)',
    '2 tomatoes (chopped)',
    '2 tbsp oil',
    'Spices (garam masala, chili powder)',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil and sauté onions.',
    'Add tomatoes and cook until soft.',
    'Add spices and mix.',
    'Add chickpeas and cook for 10 minutes.',
    'Serve hot.'
  ],
},
{
  id: 20,
  title: 'Vegetable Fried Noodles',
  description: 'Quick stir-fried noodles with crunchy vegetables and savory sauce.',
  ingredients: [
    '1 pack noodles',
    '1 cup mixed vegetables',
    '2 tbsp soy sauce',
    '1 tbsp oil',
    '2 cloves garlic'
  ],
  instructions: [
    'Cook noodles and drain.',
    'Heat oil and sauté garlic.',
    'Add vegetables and stir fry.',
    'Add noodles and soy sauce.',
    'Mix well and cook for 2–3 minutes.',
    'Serve hot.'
  ],
},
{
  id: 21,
  title: 'Brinjal Fry',
  description: 'Crispy and flavorful brinjal slices pan-fried with simple spices.',
  ingredients: [
    '1 large brinjal (sliced)',
    '2 tbsp oil',
    '1/2 tsp turmeric powder',
    '1 tsp chili powder',
    'Salt to taste'
  ],
  instructions: [
    'Slice the brinjal into thin rounds.',
    'Mix turmeric, chili powder, and salt.',
    'Coat the brinjal slices evenly with the spice mix.',
    'Heat oil in a pan over medium heat.',
    'Fry the slices until golden and crispy on both sides.',
    'Serve hot.'
  ]
},
{
  id: 22,
  title: 'Spinach Dal',
  description: 'A nutritious and comforting dal made with lentils and fresh spinach.',
  ingredients: [
    '1 cup lentils (toor dal or moong dal)',
    '1 cup chopped spinach',
    '2 cloves garlic',
    '1 tbsp oil or ghee',
    '1/2 tsp turmeric',
    'Salt to taste'
  ],
  instructions: [
    'Cook lentils with turmeric until soft.',
    'Heat oil or ghee in a pan and sauté garlic.',
    'Add chopped spinach and cook until wilted.',
    'Mix in the cooked lentils and salt.',
    'Simmer for 5 minutes and serve hot.'
  ]
},
{
  id: 23,
  title: 'Coconut Rice',
  description: 'Aromatic rice mixed with fresh coconut and mild spices.',
  ingredients: [
    '1 cup cooked rice',
    '1/2 cup grated coconut',
    '1 tbsp oil',
    '1 tsp mustard seeds',
    '1 dried red chili',
    'Curry leaves',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil and add mustard seeds.',
    'Add red chili and curry leaves.',
    'Add grated coconut and sauté lightly.',
    'Mix in cooked rice and salt.',
    'Stir well and cook for 2–3 minutes.',
    'Serve warm.'
  ]
},
{
  id: 24,
  title: 'Vegetable Cutlet',
  description: 'Crispy vegetable patties with a soft and flavorful inside.',
  ingredients: [
    '2 boiled potatoes',
    '1/2 cup mixed vegetables (carrot, peas)',
    '1/2 cup breadcrumbs',
    '1 egg (optional)',
    'Salt and spices to taste',
    'Oil for frying'
  ],
  instructions: [
    'Mash boiled potatoes in a bowl.',
    'Add cooked vegetables, salt, and spices.',
    'Mix well and shape into patties.',
    'Dip in beaten egg (optional) and coat with breadcrumbs.',
    'Heat oil and fry until golden and crispy.',
    'Serve hot.'
  ]
},
{
  id: 25,
  title: 'Tomato Chutney',
  description: 'Tangy and slightly spicy chutney that pairs perfectly with dosa or idli.',
  ingredients: [
    '2 tomatoes',
    '2 dried red chilies',
    '2 cloves garlic',
    '1 tbsp oil',
    '1 tsp mustard seeds',
    'Curry leaves',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil and sauté tomatoes, chilies, and garlic until soft.',
    'Cool and blend into a smooth paste.',
    'Heat a little oil, add mustard seeds and curry leaves.',
    'Pour in the chutney and mix well.',
    'Cook for 2–3 minutes and serve.'
  ]
},
{
  id: 26,
  title: 'Cabbage Stir Fry',
  description: 'Light and simple cabbage stir fry with mild spices and a fresh crunch.',
  ingredients: [
    '2 cups shredded cabbage',
    '1 tbsp oil',
    '1 tsp mustard seeds',
    '1 green chili (chopped)',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil in a pan and add mustard seeds.',
    'Add chopped green chili and sauté briefly.',
    'Add shredded cabbage and mix well.',
    'Cook on medium heat until slightly soft but still crunchy.',
    'Add salt, mix, and serve warm.'
  ]
},
{
  id: 27,
  title: 'Sweet Corn Soup',
  description: 'Warm and comforting sweet corn soup with a mild, slightly sweet flavor.',
  ingredients: [
    '1 cup sweet corn',
    '2 cups water',
    '1 tsp corn flour (optional)',
    'Salt and pepper to taste'
  ],
  instructions: [
    'Boil sweet corn in water until soft.',
    'Blend half the corn to make it slightly thick.',
    'Add salt and pepper.',
    'Mix corn flour with water and add to soup (optional).',
    'Simmer for a few minutes and serve hot.'
  ]
},
{
  id: 28,
  title: 'Paneer Tikka',
  description: 'Soft paneer cubes marinated in spices and grilled to a smoky finish.',
  ingredients: [
    '200g paneer (cubed)',
    '1/2 cup yogurt',
    '1 tsp chili powder',
    '1/2 tsp turmeric',
    '1 tsp garam masala',
    'Salt to taste',
    '1 tbsp oil'
  ],
  instructions: [
    'Mix yogurt, spices, and salt to prepare marinade.',
    'Add paneer cubes and coat well.',
    'Let it marinate for at least 20 minutes.',
    'Heat a pan or grill and add a little oil.',
    'Cook paneer until lightly charred on all sides.',
    'Serve hot.'
  ]
},
{
  id: 29,
  title: 'Vegetable Upma',
  description: 'A soft and flavorful semolina dish cooked with vegetables and mild spices.',
  ingredients: [
    '1 cup semolina (rava)',
    '1/2 cup mixed vegetables',
    '1 tbsp oil',
    '1 tsp mustard seeds',
    '2 cups water',
    'Salt to taste'
  ],
  instructions: [
    'Dry roast semolina until light golden and keep aside.',
    'Heat oil and add mustard seeds.',
    'Add vegetables and sauté for a few minutes.',
    'Add water and bring to a boil.',
    'Slowly add semolina while stirring to avoid lumps.',
    'Cook until soft and serve warm.'
  ]
},
{
  id: 30,
  title: 'Carrot Halwa',
  description: 'A rich and sweet dessert made with grated carrots, milk, and sugar.',
  ingredients: [
    '2 cups grated carrot',
    '2 cups milk',
    '1/4 cup sugar',
    '2 tbsp ghee',
    'Cashews or raisins (optional)'
  ],
  instructions: [
    'Heat ghee in a pan and add grated carrots.',
    'Cook for a few minutes until slightly soft.',
    'Add milk and cook on low heat until it thickens.',
    'Add sugar and mix well.',
    'Cook until the mixture becomes thick and slightly glossy.',
    'Garnish with nuts and serve warm.'
  ]
},
 {
  id: 31,
  title: 'Lentil Soup',
  description: 'A simple and comforting lentil soup that is warm, filling, and easy to make.',
  ingredients: [
    '1 cup lentils',
    '1 small onion (chopped)',
    '2 cloves garlic (minced)',
    '3 cups water',
    '1 tbsp oil',
    'Salt and pepper to taste'
  ],
  instructions: [
    'Rinse lentils thoroughly.',
    'Heat oil in a pot and sauté onion and garlic.',
    'Add lentils and water, then bring to a boil.',
    'Reduce heat and simmer until lentils are soft.',
    'Add salt and pepper, mix well, and serve hot.'
  ]
},
{
  id: 32,
  title: 'Stuffed Capsicum',
  description: 'Capsicum filled with a flavorful spiced potato mixture and cooked until tender.',
  ingredients: [
    '3 capsicums',
    '2 boiled potatoes',
    '1 tbsp oil',
    '1/2 tsp turmeric',
    '1 tsp chili powder',
    'Salt to taste'
  ],
  instructions: [
    'Cut the tops off capsicums and remove seeds.',
    'Mash boiled potatoes and mix with spices and salt.',
    'Stuff the mixture into capsicums.',
    'Heat oil in a pan and place the stuffed capsicums.',
    'Cover and cook on low heat until soft, turning occasionally.',
    'Serve warm.'
  ]
},
{
  id: 33,
  title: 'Vegetable Pulao',
  description: 'Fragrant rice cooked with mixed vegetables and mild spices.',
  ingredients: [
    '1 cup rice',
    '1/2 cup mixed vegetables',
    '2 cups water',
    '1 tbsp oil or ghee',
    'Whole spices (bay leaf, cloves)',
    'Salt to taste'
  ],
  instructions: [
    'Wash and soak rice for 10 minutes.',
    'Heat oil or ghee and add whole spices.',
    'Add vegetables and sauté briefly.',
    'Add rice and water, then mix gently.',
    'Cook until rice is soft and fluffy.',
    'Serve hot.'
  ]
},
{
  id: 34,
  title: 'Onion Pakoda',
  description: 'Crispy and crunchy onion fritters, perfect as a snack.',
  ingredients: [
    '2 onions (sliced)',
    '1 cup gram flour',
    '1/2 tsp chili powder',
    'Salt to taste',
    'Water as needed',
    'Oil for frying'
  ],
  instructions: [
    'Mix sliced onions with gram flour, spices, and salt.',
    'Add a little water to form a thick batter.',
    'Heat oil in a pan.',
    'Drop small portions into hot oil.',
    'Fry until golden and crispy.',
    'Serve hot.'
  ]
},
{
  id: 35,
  title: 'Curd Rice',
  description: 'A cooling and comforting rice dish mixed with fresh curd and mild seasoning.',
  ingredients: [
    '1 cup cooked rice',
    '1/2 cup curd',
    '1 tbsp milk (optional)',
    '1 tsp mustard seeds',
    'Curry leaves',
    'Salt to taste'
  ],
  instructions: [
    'Mash the cooked rice slightly.',
    'Add curd and mix well.',
    'Add milk if needed for a softer texture.',
    'Heat oil and add mustard seeds and curry leaves.',
    'Pour the tempering over the rice and mix.',
    'Serve cool or at room temperature.'
  ]
},
{
  id: 36,
  title: 'Beetroot Stir Fry',
  description: 'A healthy and mildly sweet stir fry made with fresh beetroot and coconut.',
  ingredients: [
    '1 cup grated beetroot',
    '2 tbsp grated coconut',
    '1 tbsp oil',
    '1 tsp mustard seeds',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil in a pan and add mustard seeds.',
    'Add grated beetroot and mix well.',
    'Cook on medium heat until soft.',
    'Add salt and grated coconut.',
    'Mix well and cook for another 2 minutes.',
    'Serve warm.'
  ]
},
{
  id: 37,
  title: 'Pumpkin Curry',
  description: 'A mildly sweet and flavorful pumpkin curry with simple spices.',
  ingredients: [
    '2 cups pumpkin (cubed)',
    '1 tbsp oil',
    '1/2 tsp turmeric',
    '1 tsp chili powder',
    '1/4 cup grated coconut',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil in a pan and add pumpkin pieces.',
    'Add turmeric, chili powder, and salt.',
    'Mix well and cook until pumpkin is soft.',
    'Add grated coconut and mix.',
    'Cook for a few more minutes and serve.'
  ]
},
{
  id: 38,
  title: 'Moong Dal Khichdi',
  description: 'A soft and comforting one-pot dish made with rice and moong dal.',
  ingredients: [
    '1/2 cup rice',
    '1/2 cup moong dal',
    '3 cups water',
    '1/2 tsp turmeric',
    '1 tbsp ghee',
    'Salt to taste'
  ],
  instructions: [
    'Wash rice and dal together.',
    'Add water, turmeric, and salt.',
    'Cook until soft and slightly mushy.',
    'Heat ghee and pour over the khichdi.',
    'Mix well and serve hot.'
  ]
},
{
  id: 39,
  title: 'Vegetable Spring Rolls',
  description: 'Crispy rolls filled with sautéed vegetables, perfect as a snack.',
  ingredients: [
    'Spring roll sheets',
    '1 cup mixed vegetables (shredded)',
    '1 tbsp soy sauce',
    '1 tbsp oil',
    'Oil for frying'
  ],
  instructions: [
    'Heat oil and sauté vegetables until slightly soft.',
    'Add soy sauce and mix well.',
    'Place filling on spring roll sheets and roll tightly.',
    'Seal edges with water.',
    'Heat oil and fry until golden and crispy.',
    'Serve hot.'
  ]
},
{
  id: 40,
  title: 'Rava Dosa',
  description: 'A thin and crispy dosa made with semolina, quick and easy to prepare.',
  ingredients: [
    '1 cup semolina (rava)',
    '1/2 cup rice flour',
    '2 cups water',
    '1 tsp cumin seeds',
    'Salt to taste'
  ],
  instructions: [
    'Mix semolina, rice flour, water, and salt to form a thin batter.',
    'Add cumin seeds and mix.',
    'Heat a pan and pour the batter thinly.',
    'Cook until crispy and golden.',
    'Flip if needed and cook briefly.',
    'Serve hot.'
  ]
},
 {
  id: 41,
  title: 'Paneer Bhurji',
  description: 'A quick and flavorful scrambled paneer dish cooked with onions and spices.',
  ingredients: [
    '200g paneer (crumbled)',
    '1 onion (chopped)',
    '1 tomato (chopped)',
    '1 tbsp oil',
    '1/2 tsp turmeric',
    '1 tsp chili powder',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil in a pan and sauté onions until soft.',
    'Add tomatoes and cook until mushy.',
    'Add turmeric, chili powder, and salt.',
    'Add crumbled paneer and mix well.',
    'Cook for 5 minutes and serve hot.'
  ]
},
{
  id: 42,
  title: 'Vegetable Stew',
  description: 'A mild and creamy vegetable stew cooked in coconut milk.',
  ingredients: [
    '1 cup mixed vegetables',
    '1 cup coconut milk',
    '1 tbsp oil',
    '1/2 tsp black pepper',
    'Curry leaves',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil and add curry leaves.',
    'Add vegetables and cook for a few minutes.',
    'Pour in coconut milk and mix.',
    'Add salt and pepper.',
    'Simmer until vegetables are soft.',
    'Serve warm.'
  ]
},
{
  id: 43,
  title: 'Masala Dosa',
  description: 'A crispy dosa filled with a spiced potato mixture, a classic South Indian dish.',
  ingredients: [
    'Dosa batter',
    '2 boiled potatoes',
    '1 onion (sliced)',
    '1 tsp mustard seeds',
    '1/2 tsp turmeric',
    'Salt to taste',
    'Oil as needed'
  ],
  instructions: [
    'Mash boiled potatoes and keep aside.',
    'Heat oil, add mustard seeds and onions, and sauté.',
    'Add turmeric and salt, then mix in mashed potatoes.',
    'Spread dosa batter on a hot pan.',
    'Place potato filling inside and fold.',
    'Cook until crispy and serve hot.'
  ]
},
{
  id: 44,
  title: 'Green Peas Curry',
  description: 'A simple and tasty curry made with green peas in a light gravy.',
  ingredients: [
    '1 cup green peas',
    '1 onion (chopped)',
    '1 tomato (chopped)',
    '1 tbsp oil',
    '1/2 tsp turmeric',
    '1 tsp chili powder',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil and sauté onions until soft.',
    'Add tomatoes and cook until mushy.',
    'Add spices and mix well.',
    'Add green peas and cook for a few minutes.',
    'Add a little water and simmer.',
    'Serve hot.'
  ]
},
{
  id: 45,
  title: 'Vegetable Korma',
  description: 'A rich and creamy vegetable curry cooked with mild spices.',
  ingredients: [
    '1 cup mixed vegetables',
    '1/2 cup cream or coconut milk',
    '1 tbsp oil',
    '1 tsp garam masala',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil and sauté vegetables.',
    'Add a little water and cook until soft.',
    'Add cream or coconut milk.',
    'Add garam masala and salt.',
    'Simmer for a few minutes and serve.'
  ]
},
{
  id: 46,
  title: 'Idli',
  description: 'Soft and fluffy steamed rice cakes, a classic South Indian breakfast.',
  ingredients: [
    '2 cups idli batter',
    'Oil for greasing'
  ],
  instructions: [
    'Grease idli molds with a little oil.',
    'Pour batter into the molds.',
    'Steam for 10–12 minutes until cooked.',
    'Allow to cool slightly before removing.',
    'Serve warm with chutney or sambar.'
  ]
},
{
  id: 47,
  title: 'Sambar',
  description: 'A flavorful lentil and vegetable stew with a tangy and spicy taste.',
  ingredients: [
    '1 cup toor dal',
    '1 cup mixed vegetables',
    '1 tbsp sambar powder',
    '1 small piece tamarind',
    '1 tsp mustard seeds',
    'Curry leaves',
    'Salt to taste'
  ],
  instructions: [
    'Cook dal until soft.',
    'Cook vegetables separately until tender.',
    'Add tamarind water and sambar powder to vegetables.',
    'Mix in cooked dal and salt.',
    'Prepare tempering with mustard seeds and curry leaves and add to sambar.',
    'Simmer for a few minutes and serve hot.'
  ]
},
{
  id: 48,
  title: 'Avial',
  description: 'A traditional Kerala dish made with mixed vegetables, coconut, and curd.',
  ingredients: [
    '2 cups mixed vegetables',
    '1/2 cup grated coconut',
    '1/2 cup curd',
    '1 tbsp coconut oil',
    'Curry leaves',
    'Salt to taste'
  ],
  instructions: [
    'Cook vegetables until tender.',
    'Grind coconut into a coarse paste.',
    'Add coconut paste to vegetables and mix.',
    'Add curd and salt, mix gently.',
    'Drizzle coconut oil and add curry leaves.',
    'Cook briefly and serve warm.'
  ]
},
{
  id: 49,
  title: 'Thoran',
  description: 'A simple and flavorful dry vegetable stir fry with coconut.',
  ingredients: [
    '2 cups chopped vegetables',
    '1/2 cup grated coconut',
    '1 tbsp oil',
    '1 tsp mustard seeds',
    'Curry leaves',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil and add mustard seeds and curry leaves.',
    'Add chopped vegetables and cook until soft.',
    'Add salt and grated coconut.',
    'Mix well and cook for a few minutes.',
    'Serve warm.'
  ]
},
{
  id: 50,
  title: 'Kootu Curry',
  description: 'A traditional Kerala curry made with chickpeas, vegetables, and coconut.',
  ingredients: [
    '1 cup chickpeas (soaked and cooked)',
    '1 cup vegetables (yam or raw banana)',
    '1/2 cup grated coconut',
    '1 tbsp oil',
    '1 tsp mustard seeds',
    'Curry leaves',
    'Salt to taste'
  ],
  instructions: [
    'Cook vegetables until soft.',
    'Add cooked chickpeas and mix.',
    'Grind coconut into a coarse paste and add to the mixture.',
    'Add salt and cook for a few minutes.',
    'Prepare tempering with mustard seeds and curry leaves and add on top.',
    'Serve hot.'
  ]
},
{
  id: 51,
  title: 'Vegetable Omelette',
  description: 'A soft and fluffy omelette loaded with fresh vegetables and simple spices.',
  ingredients: [
    '2 eggs',
    '1/4 cup chopped vegetables (onion, tomato, capsicum)',
    '1 tbsp oil or butter',
    'Salt and pepper to taste'
  ],
  instructions: [
    'Beat eggs in a bowl and add salt and pepper.',
    'Mix in chopped vegetables.',
    'Heat oil or butter in a pan.',
    'Pour the mixture and cook on medium heat.',
    'Flip gently and cook the other side.',
    'Serve hot.'
  ]
},
{
  id: 52,
  title: 'Tomato Rasam',
  description: 'A light and tangy South Indian soup made with tomatoes and spices.',
  ingredients: [
    '2 tomatoes (crushed)',
    '1 tbsp tamarind pulp',
    '1 tsp rasam powder',
    '1 tsp mustard seeds',
    'Curry leaves',
    'Salt to taste'
  ],
  instructions: [
    'Boil crushed tomatoes with water.',
    'Add tamarind pulp, rasam powder, and salt.',
    'Simmer for a few minutes.',
    'Prepare tempering with mustard seeds and curry leaves.',
    'Add tempering to rasam.',
    'Serve hot.'
  ]
},
{
  id: 53,
  title: 'Curd Curry',
  description: 'A mild and creamy yogurt-based curry with simple seasoning.',
  ingredients: [
    '1 cup curd',
    '1 tbsp gram flour',
    '1 tbsp oil',
    '1 tsp mustard seeds',
    'Curry leaves',
    'Salt to taste'
  ],
  instructions: [
    'Whisk curd with gram flour until smooth.',
    'Heat oil and add mustard seeds and curry leaves.',
    'Pour in the curd mixture and stir continuously.',
    'Cook on low heat until slightly thick.',
    'Add salt and mix well.',
    'Serve warm.'
  ]
},
{
  id: 54,
  title: 'Vegetable Uttapam',
  description: 'A thick and soft dosa topped with fresh vegetables.',
  ingredients: [
    '2 cups dosa batter',
    '1/2 cup chopped vegetables',
    'Oil as needed',
    'Salt to taste'
  ],
  instructions: [
    'Heat a pan and pour a thick layer of batter.',
    'Sprinkle chopped vegetables on top.',
    'Drizzle a little oil around the edges.',
    'Cook until the bottom is golden.',
    'Flip and cook briefly.',
    'Serve hot.'
  ]
},
{
  id: 55,
  title: 'Lemon Pickle',
  description: 'A tangy and spicy preserved lemon pickle full of bold flavors.',
  ingredients: [
    '4 lemons (cut)',
    '2 tbsp salt',
    '1 tbsp chili powder',
    '1 tbsp oil',
    '1/2 tsp mustard seeds'
  ],
  instructions: [
    'Mix lemon pieces with salt and keep aside for a day.',
    'Heat oil and add mustard seeds.',
    'Add chili powder and mix.',
    'Combine with the lemon mixture.',
    'Store in a clean jar for a few days before using.',
    'Serve as a side.'
  ]
},
{
  id: 56,
  title: 'Coconut Chutney',
  description: 'A classic South Indian chutney made with fresh coconut and mild spices.',
  ingredients: [
    '1 cup grated coconut',
    '2 green chilies',
    '1 small piece ginger',
    'Salt to taste',
    '1/2 cup water',
    '1 tsp mustard seeds',
    'Curry leaves',
    '1 tbsp oil'
  ],
  instructions: [
    'Grind coconut, green chilies, ginger, salt, and water into a smooth paste.',
    'Transfer to a bowl.',
    'Heat oil and add mustard seeds and curry leaves.',
    'Pour tempering over the chutney.',
    'Mix well and serve fresh.'
  ]
},
{
  id: 57,
  title: 'Mint Chutney',
  description: 'A refreshing and flavorful chutney made with mint and coriander leaves.',
  ingredients: [
    '1 cup mint leaves',
    '1/2 cup coriander leaves',
    '1 green chili',
    '1 tbsp lemon juice',
    'Salt to taste'
  ],
  instructions: [
    'Wash and clean the mint and coriander leaves.',
    'Add all ingredients to a blender.',
    'Blend into a smooth paste.',
    'Adjust salt and lemon juice as needed.',
    'Serve fresh.'
  ]
},
{
  id: 58,
  title: 'Vegetable Clear Soup',
  description: 'A light and healthy soup made with fresh vegetables and simple seasoning.',
  ingredients: [
    '1 cup chopped vegetables',
    '3 cups water',
    '1/2 tsp black pepper',
    'Salt to taste'
  ],
  instructions: [
    'Boil water and add vegetables.',
    'Cook until vegetables are tender.',
    'Add salt and pepper.',
    'Simmer for a few minutes.',
    'Serve hot.'
  ]
},
{
  id: 59,
  title: 'Spinach Rice',
  description: 'A nutritious rice dish made with fresh spinach and mild spices.',
  ingredients: [
    '1 cup rice',
    '1 cup spinach (blended)',
    '1 tbsp oil',
    '1/2 tsp cumin seeds',
    'Salt to taste'
  ],
  instructions: [
    'Cook rice and keep aside.',
    'Heat oil and add cumin seeds.',
    'Add spinach puree and cook for a few minutes.',
    'Add salt and mix in cooked rice.',
    'Stir well and serve hot.'
  ]
},
{
  id: 60,
  title: 'Carrot Soup',
  description: 'A smooth and slightly sweet soup made from fresh carrots.',
  ingredients: [
    '2 carrots (chopped)',
    '2 cups water',
    '1/2 tsp black pepper',
    'Salt to taste'
  ],
  instructions: [
    'Boil carrots in water until soft.',
    'Blend into a smooth puree.',
    'Return to heat and add salt and pepper.',
    'Simmer for a few minutes.',
    'Serve warm.'
  ]
},
{
  id: 61,
  title: 'Vegetable Sandwich Toast',
  description: 'A crispy toasted sandwich filled with fresh vegetables and butter.',
  ingredients: [
    '4 slices bread',
    '1/2 cup chopped vegetables (onion, tomato, cucumber)',
    'Butter as needed',
    'Salt and pepper to taste'
  ],
  instructions: [
    'Spread butter on bread slices.',
    'Place chopped vegetables evenly on one slice.',
    'Sprinkle salt and pepper.',
    'Cover with another slice of bread.',
    'Toast on a pan or sandwich maker until golden and crispy.',
    'Serve hot.'
  ]
},
{
  id: 62,
  title: 'Onion Tomato Sabzi',
  description: 'A simple and quick curry made with onions, tomatoes, and basic spices.',
  ingredients: [
    '2 onions (chopped)',
    '2 tomatoes (chopped)',
    '1 tbsp oil',
    '1/2 tsp turmeric',
    '1 tsp chili powder',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil in a pan and sauté onions until soft.',
    'Add tomatoes and cook until mushy.',
    'Add turmeric, chili powder, and salt.',
    'Mix well and cook for a few minutes.',
    'Serve warm.'
  ]
},
{
  id: 63,
  title: 'Cucumber Raita',
  description: 'A cooling yogurt side dish with fresh cucumber and mild seasoning.',
  ingredients: [
    '1 cup curd',
    '1/2 cup grated cucumber',
    'Salt to taste',
    'A pinch of cumin powder'
  ],
  instructions: [
    'Whisk curd until smooth.',
    'Add grated cucumber and mix well.',
    'Add salt and cumin powder.',
    'Mix thoroughly and serve chilled.'
  ]
},
{
  id: 64,
  title: 'Vegetable Maggi',
  description: 'A quick and tasty noodle dish cooked with vegetables and spice mix.',
  ingredients: [
    '1 packet noodles',
    '1/2 cup chopped vegetables',
    'Maggi spice mix',
    '2 cups water'
  ],
  instructions: [
    'Boil water in a pan.',
    'Add vegetables and cook for a few minutes.',
    'Add noodles and spice mix.',
    'Cook until noodles are soft and water is absorbed.',
    'Serve hot.'
  ]
},
{
  id: 65,
  title: 'Sweet Pongal',
  description: 'A traditional sweet dish made with rice, jaggery, and ghee.',
  ingredients: [
    '1/2 cup rice',
    '1/2 cup jaggery',
    '2 cups water',
    '2 tbsp ghee',
    'A few cashews and raisins'
  ],
  instructions: [
    'Cook rice until soft.',
    'Melt jaggery in a little water and strain.',
    'Add jaggery syrup to cooked rice and mix.',
    'Heat ghee and fry cashews and raisins.',
    'Add to the pongal and mix well.',
    'Serve warm.'
  ]
},
{
  id: 66,
  title: 'Vegetable Biryani',
  description: 'A fragrant rice dish cooked with mixed vegetables and aromatic spices.',
  ingredients: [
    '1 cup basmati rice',
    '1 cup mixed vegetables',
    '1 onion (sliced)',
    '1 tbsp biryani masala',
    '2 tbsp oil or ghee',
    'Salt to taste'
  ],
  instructions: [
    'Cook rice until 80% done and set aside.',
    'Heat oil or ghee and sauté onions until golden.',
    'Add vegetables and cook for a few minutes.',
    'Add biryani masala and salt.',
    'Layer partially cooked rice over vegetables.',
    'Cover and cook on low heat until fully done.',
    'Mix gently and serve hot.'
  ]
},
{
  id: 67,
  title: 'Paneer Fried Rice',
  description: 'A quick stir-fried rice dish with paneer and simple seasonings.',
  ingredients: [
    '1 cup cooked rice',
    '1/2 cup paneer (cubed)',
    '1/2 cup vegetables',
    '1 tbsp soy sauce',
    '1 tbsp oil',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil in a pan and sauté paneer until lightly golden.',
    'Add vegetables and stir fry for a few minutes.',
    'Add cooked rice and mix well.',
    'Add soy sauce and salt.',
    'Stir fry on high heat for 2–3 minutes.',
    'Serve hot.'
  ]
},
{
  id: 68,
  title: 'Mango Lassi',
  description: 'A refreshing and creamy yogurt drink made with ripe mango.',
  ingredients: [
    '1 ripe mango (chopped)',
    '1 cup curd',
    '2 tbsp sugar',
    '1/2 cup chilled water or milk'
  ],
  instructions: [
    'Add mango, curd, sugar, and water or milk to a blender.',
    'Blend until smooth and creamy.',
    'Adjust sweetness if needed.',
    'Serve chilled.'
  ]
},
{
  id: 69,
  title: 'Roti',
  description: 'Soft and simple whole wheat flatbread made fresh on a pan.',
  ingredients: [
    '1 cup wheat flour',
    'Water as needed'
  ],
  instructions: [
    'Mix flour with water to form a soft dough.',
    'Knead well and rest for 10 minutes.',
    'Divide into small balls and roll into circles.',
    'Cook on a hot pan until both sides are done.',
    'Serve warm.'
  ]
},
{
  id: 70,
  title: 'Jeera Rice',
  description: 'A simple and aromatic rice dish flavored with cumin seeds.',
  ingredients: [
    '1 cup rice',
    '1 tsp cumin seeds',
    '1 tbsp ghee',
    'Salt to taste'
  ],
  instructions: [
    'Cook rice and keep aside.',
    'Heat ghee in a pan and add cumin seeds.',
    'Once they splutter, add cooked rice.',
    'Add salt and mix gently.',
    'Cook for a few minutes and serve hot.'
  ]
},
{
  id: 71,
  title: 'Paneer Korma',
  description: 'A rich and creamy paneer curry cooked with mild spices and a smooth gravy.',
  ingredients: [
    '200g paneer (cubed)',
    '1 onion (chopped)',
    '1/2 cup cream or coconut milk',
    '1 tbsp oil',
    '1 tsp garam masala',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil in a pan and sauté onions until soft.',
    'Add paneer cubes and cook lightly.',
    'Pour in cream or coconut milk and mix well.',
    'Add garam masala and salt.',
    'Simmer for a few minutes until thick.',
    'Serve hot.'
  ]
},
{
  id: 72,
  title: 'Vegetable Jalfrezi',
  description: 'A spicy stir-fried vegetable dish with bold flavors and a slightly tangy taste.',
  ingredients: [
    '1 cup mixed vegetables',
    '1 onion (sliced)',
    '1 tomato (chopped)',
    '1 tbsp oil',
    '1 tsp chili powder',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil and sauté onions until slightly soft.',
    'Add vegetables and cook on high heat.',
    'Add tomatoes, chili powder, and salt.',
    'Stir fry for a few minutes.',
    'Cook until vegetables are tender but crisp.',
    'Serve hot.'
  ]
},
{
  id: 73,
  title: 'Dal Tadka',
  description: 'A comforting lentil dish topped with a flavorful garlic tempering.',
  ingredients: [
    '1 cup cooked lentils (toor dal or moong dal)',
    '3 cloves garlic (chopped)',
    '1 tbsp ghee',
    '1/2 tsp cumin seeds',
    'Salt to taste'
  ],
  instructions: [
    'Heat ghee in a pan and add cumin seeds.',
    'Add chopped garlic and sauté until golden.',
    'Pour this tempering over cooked lentils.',
    'Add salt and mix well.',
    'Simmer for a few minutes.',
    'Serve hot.'
  ]
},
{
  id: 74,
  title: 'Bhindi Fry',
  description: 'A crispy and flavorful okra dish cooked with simple spices.',
  ingredients: [
    '2 cups okra (sliced)',
    '1 tbsp oil',
    '1/2 tsp turmeric',
    '1 tsp chili powder',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil in a pan.',
    'Add sliced okra and cook on medium heat.',
    'Add turmeric, chili powder, and salt.',
    'Stir occasionally until crispy.',
    'Serve hot.'
  ]
},
{
  id: 75,
  title: 'Vegetable Paratha',
  description: 'A stuffed flatbread filled with spiced vegetables, perfect for breakfast or lunch.',
  ingredients: [
    '1 cup wheat flour',
    '1/2 cup mixed vegetables (mashed)',
    '1/2 tsp chili powder',
    'Salt to taste',
    'Water as needed',
    'Oil or ghee for cooking'
  ],
  instructions: [
    'Prepare dough using flour and water.',
    'Mix vegetables with chili powder and salt.',
    'Stuff the mixture into dough balls and roll out.',
    'Cook on a hot pan with oil or ghee.',
    'Cook both sides until golden.',
    'Serve hot.'
  ]
},
{
  id: 76,
  title: 'Coconut Ladoo',
  description: 'A quick and delicious sweet made with coconut and condensed milk.',
  ingredients: [
    '2 cups grated coconut',
    '1 cup condensed milk',
    '1/2 tsp cardamom powder'
  ],
  instructions: [
    'Heat a pan and add grated coconut.',
    'Pour in condensed milk and mix well.',
    'Cook on low heat until the mixture thickens.',
    'Add cardamom powder and mix.',
    'Allow to cool slightly.',
    'Shape into small balls and serve.'
  ]
},
{
  id: 77,
  title: 'Rice Kheer',
  description: 'A creamy and sweet rice pudding flavored with milk and sugar.',
  ingredients: [
    '1/2 cup rice',
    '3 cups milk',
    '1/2 cup sugar',
    '1/2 tsp cardamom powder'
  ],
  instructions: [
    'Cook rice in milk on low heat.',
    'Stir occasionally until rice is soft and milk thickens.',
    'Add sugar and mix well.',
    'Add cardamom powder.',
    'Simmer for a few minutes.',
    'Serve warm or chilled.'
  ]
},
{
  id: 78,
  title: 'Vegetable Samosa',
  description: 'A crispy deep-fried snack filled with spiced potato and vegetables.',
  ingredients: [
    'Samosa sheets or dough',
    '2 boiled potatoes (mashed)',
    '1/2 cup peas',
    '1 tsp chili powder',
    'Salt to taste',
    'Oil for frying'
  ],
  instructions: [
    'Prepare filling by mixing potatoes, peas, spices, and salt.',
    'Fill the mixture into samosa sheets and shape.',
    'Seal edges properly.',
    'Heat oil and deep fry until golden and crispy.',
    'Serve hot.'
  ]
},
{
  id: 79,
  title: 'Paneer Roll',
  description: 'A delicious wrap filled with spiced paneer and simple sauces.',
  ingredients: [
    '2 rotis',
    '1/2 cup paneer (cubed)',
    '1 onion (sliced)',
    '1 tbsp oil',
    'Salt and spices to taste'
  ],
  instructions: [
    'Heat oil and sauté paneer with onions and spices.',
    'Cook for a few minutes.',
    'Place the filling on a roti.',
    'Roll tightly and serve warm.'
  ]
},
{
  id: 80,
  title: 'Vegetable Manchurian',
  description: 'Crispy vegetable balls tossed in a flavorful Indo-Chinese sauce.',
  ingredients: [
    '1 cup mixed vegetables (grated)',
    '2 tbsp corn flour',
    '1 tbsp soy sauce',
    '1 tbsp oil',
    'Salt to taste',
    'Oil for frying'
  ],
  instructions: [
    'Mix vegetables with corn flour and salt.',
    'Shape into small balls.',
    'Deep fry until crispy.',
    'Heat oil and add soy sauce.',
    'Add fried balls and toss well.',
    'Serve hot.'
  ]
},
{
  id: 81,
  title: 'Gobi Manchurian',
  description: 'Crispy cauliflower florets tossed in a spicy and tangy Indo-Chinese sauce.',
  ingredients: [
    '1 cup cauliflower florets',
    '2 tbsp corn flour',
    '1 tbsp all-purpose flour',
    '1 tbsp soy sauce',
    '1 tbsp oil',
    'Salt to taste',
    'Oil for frying'
  ],
  instructions: [
    'Mix corn flour, all-purpose flour, salt, and water to make a batter.',
    'Dip cauliflower florets in batter.',
    'Deep fry until crispy and golden.',
    'Heat oil and add soy sauce.',
    'Add fried cauliflower and toss well.',
    'Serve hot.'
  ]
},
{
  id: 82,
  title: 'Vegetable Hakka Noodles',
  description: 'A popular Indo-Chinese noodle dish stir-fried with vegetables and sauces.',
  ingredients: [
    '1 packet noodles',
    '1 cup mixed vegetables',
    '1 tbsp soy sauce',
    '1 tbsp oil',
    'Salt to taste'
  ],
  instructions: [
    'Cook noodles and drain.',
    'Heat oil and stir fry vegetables on high heat.',
    'Add cooked noodles and mix well.',
    'Add soy sauce and salt.',
    'Stir fry for a few minutes.',
    'Serve hot.'
  ]
},
{
  id: 83,
  title: 'Chole Bhature',
  description: 'A classic North Indian dish of spicy chickpea curry served with fried bread.',
  ingredients: [
    '1 cup chickpeas (soaked and cooked)',
    '1 onion (chopped)',
    '1 tomato (chopped)',
    '1 tsp chole masala',
    'Flour for bhature',
    'Oil for frying',
    'Salt to taste'
  ],
  instructions: [
    'Cook chickpeas with onion, tomato, spices, and salt.',
    'Prepare dough using flour and water.',
    'Roll and deep fry to make bhature.',
    'Serve hot with chole.'
  ]
},
{
  id: 84,
  title: 'Rajma Curry',
  description: 'A hearty and flavorful kidney bean curry cooked in a rich gravy.',
  ingredients: [
    '1 cup rajma (soaked and cooked)',
    '1 onion (chopped)',
    '1 tomato (chopped)',
    '1 tbsp oil',
    '1 tsp garam masala',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil and sauté onions until soft.',
    'Add tomatoes and cook until mushy.',
    'Add garam masala and salt.',
    'Add cooked rajma and mix.',
    'Simmer for 10 minutes.',
    'Serve hot.'
  ]
},
{
  id: 85,
  title: 'Vegetable Kathi Roll',
  description: 'A street-style wrap filled with spiced vegetables and rolled in soft roti.',
  ingredients: [
    '2 rotis',
    '1 cup mixed vegetables',
    '1 tbsp oil',
    'Salt and spices to taste'
  ],
  instructions: [
    'Heat oil and cook vegetables with spices.',
    'Place the filling on a roti.',
    'Roll tightly.',
    'Serve warm.'
  ]
},
{
  id: 86,
  title: 'Paneer Pakora',
  description: 'Crispy deep-fried paneer fritters coated in a spiced gram flour batter.',
  ingredients: [
    '200g paneer (sliced)',
    '1/2 cup gram flour (besan)',
    '1/2 tsp chili powder',
    'Salt to taste',
    'Water as needed',
    'Oil for frying'
  ],
  instructions: [
    'Mix gram flour, chili powder, salt, and water to make a thick batter.',
    'Dip paneer slices into the batter.',
    'Heat oil and deep fry until golden and crispy.',
    'Drain excess oil and serve hot.'
  ]
},
{
  id: 87,
  title: 'Vegetable Daliya',
  description: 'A healthy and filling dish made with broken wheat and vegetables.',
  ingredients: [
    '1/2 cup daliya (broken wheat)',
    '1/2 cup vegetables',
    '2 cups water',
    '1 tbsp oil',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil and sauté vegetables.',
    'Add daliya and roast for a minute.',
    'Add water and salt.',
    'Cook until soft and fluffy.',
    'Serve warm.'
  ]
},
{
  id: 88,
  title: 'Spinach Paratha',
  description: 'A nutritious flatbread made with spinach and whole wheat flour.',
  ingredients: [
    '1 cup wheat flour',
    '1/2 cup spinach (pureed)',
    'Salt to taste',
    'Water as needed',
    'Oil or ghee for cooking'
  ],
  instructions: [
    'Mix flour, spinach puree, and salt to form a dough.',
    'Knead well and rest for 10 minutes.',
    'Roll into flat circles.',
    'Cook on a hot pan with oil or ghee.',
    'Cook both sides until golden.',
    'Serve hot.'
  ]
},
{
  id: 89,
  title: 'Corn Chaat',
  description: 'A quick and tangy snack made with sweet corn and spices.',
  ingredients: [
    '1 cup boiled corn',
    '1 tbsp lemon juice',
    '1/2 tsp chili powder',
    'Salt to taste'
  ],
  instructions: [
    'Add boiled corn to a bowl.',
    'Add lemon juice, chili powder, and salt.',
    'Mix well.',
    'Serve immediately.'
  ]
},
{
  id: 90,
  title: 'Vegetable Omelette Roll',
  description: 'A soft omelette with vegetables rolled inside a roti for a quick meal.',
  ingredients: [
    '2 eggs',
    '1/2 cup vegetables',
    '1 roti',
    'Salt and spices to taste',
    '1 tbsp oil'
  ],
  instructions: [
    'Beat eggs with vegetables, salt, and spices.',
    'Heat oil and cook the omelette.',
    'Place the omelette on a roti.',
    'Roll tightly.',
    'Serve warm.'
  ]
},
{
  id: 91,
  title: 'Mushroom Soup',
  description: 'A creamy and comforting soup made with fresh mushrooms and simple seasoning.',
  ingredients: [
    '1 cup mushrooms (chopped)',
    '2 cups water or milk',
    '1 tbsp butter',
    '1/2 tsp black pepper',
    'Salt to taste'
  ],
  instructions: [
    'Heat butter in a pan and sauté mushrooms.',
    'Add water or milk and cook until mushrooms are soft.',
    'Blend into a smooth consistency.',
    'Add salt and pepper.',
    'Simmer for a few minutes and serve warm.'
  ]
},
{
  id: 92,
  title: 'Vegetable Poha',
  description: 'A light and flavorful breakfast made with flattened rice and vegetables.',
  ingredients: [
    '1 cup poha',
    '1/2 cup vegetables',
    '1 tsp mustard seeds',
    '1 tbsp oil',
    'Salt to taste'
  ],
  instructions: [
    'Wash poha and drain.',
    'Heat oil and add mustard seeds.',
    'Add vegetables and sauté.',
    'Add poha and salt.',
    'Mix well and cook for a few minutes.',
    'Serve warm.'
  ]
},
{
  id: 93,
  title: 'Sabudana Khichdi',
  description: 'A soft and mildly spiced dish made with tapioca pearls and peanuts.',
  ingredients: [
    '1 cup soaked sabudana',
    '1/4 cup peanuts',
    '1 potato (cubed)',
    '1 tbsp oil',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil and cook potatoes until soft.',
    'Add peanuts and roast lightly.',
    'Add soaked sabudana and salt.',
    'Mix gently and cook until soft.',
    'Serve warm.'
  ]
},
{
  id: 94,
  title: 'Vegetable Frankie',
  description: 'A street-style wrap filled with spiced vegetables and sauces.',
  ingredients: [
    '2 rotis',
    '1 cup vegetables',
    '1 tbsp oil',
    'Salt and spices to taste'
  ],
  instructions: [
    'Cook vegetables with oil and spices.',
    'Place filling on a roti.',
    'Roll tightly.',
    'Serve warm.'
  ]
},
{
  id: 95,
  title: 'Paneer Sandwich',
  description: 'A tasty grilled sandwich filled with spiced paneer and vegetables.',
  ingredients: [
    '4 slices bread',
    '1/2 cup paneer (crumbled)',
    '1/4 cup vegetables',
    'Butter as needed',
    'Salt and spices to taste'
  ],
  instructions: [
    'Mix paneer with vegetables, salt, and spices.',
    'Spread butter on bread slices.',
    'Place filling between slices.',
    'Grill or toast until golden.',
    'Serve hot.'
  ]
},
{
  id: 96,
  title: 'Vegetable Cutlet Burger',
  description: 'A crispy vegetable cutlet served inside a soft bun with simple toppings.',
  ingredients: [
    '2 burger buns',
    '2 vegetable cutlets',
    '2 tbsp sauce (ketchup or mayo)',
    'Lettuce or onion slices',
    'Butter as needed'
  ],
  instructions: [
    'Lightly toast the burger buns with butter.',
    'Place the vegetable cutlet inside the bun.',
    'Add sauce and toppings like lettuce or onion.',
    'Cover with the top bun.',
    'Serve immediately.'
  ]
},
{
  id: 97,
  title: 'Cheese Corn Balls',
  description: 'Crispy fried balls filled with sweet corn and melted cheese.',
  ingredients: [
    '1 cup boiled corn',
    '1/2 cup grated cheese',
    '2 tbsp corn flour',
    'Salt and spices to taste',
    'Oil for frying'
  ],
  instructions: [
    'Mix corn, cheese, corn flour, salt, and spices.',
    'Shape into small balls.',
    'Heat oil and deep fry until golden.',
    'Serve hot.'
  ]
},
{
  id: 98,
  title: 'Vegetable Pizza',
  description: 'A homemade pizza topped with fresh vegetables and melted cheese.',
  ingredients: [
    '1 pizza base',
    '1/2 cup vegetables',
    '1/2 cup grated cheese',
    '2 tbsp pizza sauce'
  ],
  instructions: [
    'Spread pizza sauce on the base.',
    'Add vegetables evenly.',
    'Top with grated cheese.',
    'Bake in a preheated oven until cheese melts.',
    'Slice and serve hot.'
  ]
},
{
  id: 99,
  title: 'Paneer Pizza',
  description: 'A delicious pizza topped with spiced paneer and melted cheese.',
  ingredients: [
    '1 pizza base',
    '1/2 cup paneer (cubed)',
    '1/2 cup grated cheese',
    '2 tbsp pizza sauce'
  ],
  instructions: [
    'Spread pizza sauce on the base.',
    'Add paneer pieces.',
    'Top with grated cheese.',
    'Bake until cheese melts and base is crisp.',
    'Serve hot.'
  ]
},
{
  id: 100,
  title: 'Garlic Mushroom',
  description: 'A quick sautéed mushroom dish with rich garlic flavor.',
  ingredients: [
    '1 cup mushrooms (sliced)',
    '3 cloves garlic (chopped)',
    '1 tbsp butter',
    'Salt and pepper to taste'
  ],
  instructions: [
    'Heat butter in a pan.',
    'Add garlic and sauté briefly.',
    'Add mushrooms and cook until soft.',
    'Add salt and pepper.',
    'Cook for a few minutes and serve hot.'
  ]
},
{
  id: 101,
  title: 'Vegetable Pasta Alfredo',
  description: 'A creamy white sauce pasta loaded with sautéed vegetables and rich flavor.',
  ingredients: [
    '1 cup pasta',
    '1/2 cup mixed vegetables',
    '1/2 cup milk or cream',
    '2 tbsp butter',
    '2 cloves garlic (chopped)',
    'Salt and pepper to taste'
  ],
  instructions: [
    'Boil pasta until soft and drain.',
    'Heat butter in a pan and sauté garlic.',
    'Add vegetables and cook until slightly tender.',
    'Pour in milk or cream and mix well.',
    'Add cooked pasta and season with salt and pepper.',
    'Cook for a few minutes and serve warm.'
  ]
},
{
  id: 102,
  title: 'Red Sauce Pasta',
  description: 'A tangy and flavorful pasta made with a simple tomato-based sauce.',
  ingredients: [
    '1 cup pasta',
    '2 tomatoes (pureed)',
    '2 cloves garlic (chopped)',
    '1 tbsp oil',
    'Salt and chili flakes to taste'
  ],
  instructions: [
    'Cook pasta and keep aside.',
    'Heat oil and sauté garlic.',
    'Add tomato puree and cook until thick.',
    'Add salt and chili flakes.',
    'Mix in cooked pasta and toss well.',
    'Serve hot.'
  ]
},
{
  id: 103,
  title: 'Vegetable Lasagna',
  description: 'A layered pasta dish filled with vegetables, sauce, and melted cheese.',
  ingredients: [
    'Lasagna sheets',
    '1 cup vegetables',
    '1 cup tomato sauce',
    '1/2 cup cheese'
  ],
  instructions: [
    'Cook lasagna sheets as per instructions.',
    'Prepare vegetable filling by sautéing vegetables.',
    'In a baking dish, layer sheets, vegetables, and sauce.',
    'Repeat layers and top with cheese.',
    'Bake until cheese melts and turns golden.',
    'Serve hot.'
  ]
},
{
  id: 104,
  title: 'Cheese Omelette',
  description: 'A soft and fluffy omelette filled with melted cheese.',
  ingredients: [
    '2 eggs',
    '1/4 cup grated cheese',
    '1 tbsp butter',
    'Salt and pepper to taste'
  ],
  instructions: [
    'Beat eggs with salt and pepper.',
    'Heat butter in a pan.',
    'Pour the egg mixture into the pan.',
    'Add cheese on top.',
    'Fold the omelette and cook until set.',
    'Serve hot.'
  ]
},
{
  id: 105,
  title: 'Herb Rice',
  description: 'A simple and aromatic rice dish flavored with herbs and butter.',
  ingredients: [
    '1 cup rice',
    '1 tbsp butter',
    '1 tsp mixed herbs',
    'Salt to taste'
  ],
  instructions: [
    'Cook rice and keep aside.',
    'Heat butter in a pan.',
    'Add herbs and sauté briefly.',
    'Add cooked rice and mix well.',
    'Season with salt.',
    'Serve warm.'
  ]
},
{
  id: 106,
  title: 'Vegetable Soup',
  description: 'A light and healthy soup made with mixed vegetables and simple seasoning.',
  ingredients: [
    '1 cup mixed vegetables (chopped)',
    '3 cups water',
    '1/2 tsp black pepper',
    'Salt to taste'
  ],
  instructions: [
    'Add vegetables and water to a pot.',
    'Bring to a boil and cook until vegetables are soft.',
    'Add salt and pepper.',
    'Simmer for a few minutes.',
    'Serve warm.'
  ]
},
{
  id: 107,
  title: 'Paneer Fried Noodles',
  description: 'Stir-fried noodles tossed with paneer and flavorful sauces.',
  ingredients: [
    '1 cup noodles',
    '1/2 cup paneer (cubed)',
    '1/2 cup vegetables',
    '1 tbsp soy sauce',
    '1 tbsp oil'
  ],
  instructions: [
    'Cook noodles and set aside.',
    'Heat oil and sauté vegetables.',
    'Add paneer and cook lightly.',
    'Add noodles and soy sauce.',
    'Toss well and cook for a few minutes.',
    'Serve hot.'
  ]
},
{
  id: 108,
  title: 'Vegetable Wrap',
  description: 'A quick and healthy wrap filled with sautéed vegetables.',
  ingredients: [
    '2 rotis',
    '1 cup vegetables',
    '1 tbsp oil',
    'Salt and spices to taste'
  ],
  instructions: [
    'Heat oil and cook vegetables with spices.',
    'Place filling on roti.',
    'Roll tightly into a wrap.',
    'Serve warm.'
  ]
},
{
  id: 109,
  title: 'Potato Wedges',
  description: 'Crispy and flavorful potato wedges, perfect as a snack.',
  ingredients: [
    '2 potatoes (cut into wedges)',
    '1 tbsp oil',
    '1/2 tsp chili powder',
    'Salt to taste'
  ],
  instructions: [
    'Preheat oven or heat a pan.',
    'Mix potato wedges with oil and spices.',
    'Bake or cook until crispy and golden.',
    'Serve hot.'
  ]
},
{
  id: 110,
  title: 'Paneer Salad',
  description: 'A fresh and protein-rich salad made with paneer and vegetables.',
  ingredients: [
    '1/2 cup paneer (cubed)',
    '1/2 cup vegetables',
    '1 tbsp lemon juice',
    'Salt and pepper to taste'
  ],
  instructions: [
    'Add paneer and vegetables to a bowl.',
    'Drizzle lemon juice.',
    'Add salt and pepper.',
    'Mix well and serve fresh.'
  ]
},
{
  id: 111,
  title: 'Vegetable Fried Idli',
  description: 'Leftover idlis tossed with vegetables and spices for a quick snack.',
  ingredients: [
    '4 idlis (cubed)',
    '1/2 cup vegetables',
    '1 tbsp oil',
    'Salt and spices to taste'
  ],
  instructions: [
    'Heat oil in a pan.',
    'Add vegetables and sauté until slightly cooked.',
    'Add idli cubes and spices.',
    'Toss well and cook until lightly crispy.',
    'Serve hot.'
  ]
},
{
  id: 112,
  title: 'Curd Sandwich',
  description: 'A soft and refreshing sandwich with a creamy curd-based filling.',
  ingredients: [
    '4 slices bread',
    '1/2 cup curd',
    '1/4 cup vegetables (chopped)',
    'Salt and spices to taste'
  ],
  instructions: [
    'Mix curd with vegetables, salt, and spices.',
    'Spread the mixture on bread slices.',
    'Cover with another slice to form a sandwich.',
    'Cut and serve fresh.'
  ]
},
{
  id: 113,
  title: 'Vegetable Rice Noodles',
  description: 'Light and flavorful rice noodles stir-fried with vegetables.',
  ingredients: [
    '1 cup rice noodles',
    '1/2 cup vegetables',
    '1 tbsp soy sauce',
    '1 tbsp oil'
  ],
  instructions: [
    'Cook rice noodles and drain.',
    'Heat oil and sauté vegetables.',
    'Add noodles and soy sauce.',
    'Toss well and cook for a few minutes.',
    'Serve hot.'
  ]
},
{
  id: 114,
  title: 'Mango Rice',
  description: 'A tangy and aromatic rice dish made with raw mango and spices.',
  ingredients: [
    '1 cup cooked rice',
    '1/2 cup grated raw mango',
    '1 tsp mustard seeds',
    '1 tbsp oil',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil and add mustard seeds.',
    'Add grated mango and sauté briefly.',
    'Add cooked rice and salt.',
    'Mix well and cook for a few minutes.',
    'Serve warm.'
  ]
},
{
  id: 115,
  title: 'Chocolate Mug Cake',
  description: 'A quick and easy single-serving chocolate cake made in a microwave.',
  ingredients: [
    '4 tbsp flour',
    '2 tbsp cocoa powder',
    '3 tbsp sugar',
    '4 tbsp milk',
    '2 tbsp oil'
  ],
  instructions: [
    'Mix all ingredients in a mug until smooth.',
    'Microwave for about 1–2 minutes.',
    'Let it cool slightly.',
    'Serve warm.'
  ]
},
{
  id: 116,
  title: 'Simple Vegetable Rice',
  description: 'A quick and comforting rice dish made with lightly spiced vegetables.',
  ingredients: [
    '1 cup cooked rice',
    '1/2 cup mixed vegetables',
    '1 tbsp oil',
    '1/2 tsp cumin seeds',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil in a pan and add cumin seeds.',
    'Add vegetables and sauté until tender.',
    'Add cooked rice and salt.',
    'Mix gently until well combined.',
    'Cook for a few minutes and serve warm.'
  ]
},
{
  id: 117,
  title: 'Egg Curry',
  description: 'Boiled eggs simmered in a flavorful and mildly spiced onion-tomato gravy.',
  ingredients: [
    '4 boiled eggs',
    '1 onion (chopped)',
    '2 tomatoes (pureed)',
    '1 tbsp oil',
    '1 tsp ginger-garlic paste',
    '1/2 tsp turmeric',
    '1 tsp chili powder',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil and sauté onions until golden.',
    'Add ginger-garlic paste and cook briefly.',
    'Add tomato puree and cook until oil separates.',
    'Add turmeric, chili powder, and salt.',
    'Add boiled eggs and mix gently.',
    'Simmer for a few minutes and serve hot.'
  ]
},
{
  id: 118,
  title: 'Butter Toast',
  description: 'Golden crispy toast with rich melted butter, perfect for breakfast.',
  ingredients: [
    '2 slices bread',
    '2 tbsp butter'
  ],
  instructions: [
    'Heat a pan or toaster.',
    'Spread butter evenly on bread slices.',
    'Toast until golden and crispy.',
    'Serve hot.'
  ]
},
{
  id: 119,
  title: 'Tomato Soup',
  description: 'A smooth and comforting soup made with fresh tomatoes and simple seasoning.',
  ingredients: [
    '3 tomatoes (chopped)',
    '2 cups water',
    '1/2 tsp black pepper',
    'Salt to taste'
  ],
  instructions: [
    'Boil tomatoes in water until soft.',
    'Blend into a smooth puree.',
    'Strain if needed and return to heat.',
    'Add salt and pepper.',
    'Simmer for a few minutes and serve warm.'
  ]
},
{
  id: 120,
  title: 'Vegetable Sandwich',
  description: 'A simple and fresh sandwich filled with crunchy vegetables and butter.',
  ingredients: [
    '4 slices bread',
    '1/2 cup vegetables (sliced)',
    'Butter as needed',
    'Salt and pepper to taste'
  ],
  instructions: [
    'Spread butter on bread slices.',
    'Add vegetables evenly on one slice.',
    'Sprinkle salt and pepper.',
    'Cover with another slice.',
    'Cut and serve fresh.'
  ]
},
{
  id: 121,
  title: 'Masala Omelette',
  description: 'A flavorful omelette packed with onions, spices, and fresh herbs.',
  ingredients: [
    '2 eggs',
    '1 small onion (finely chopped)',
    '1 green chili (optional, chopped)',
    '2 tbsp coriander leaves',
    '1 tbsp oil',
    'Salt and spices to taste'
  ],
  instructions: [
    'Beat eggs in a bowl with salt and spices.',
    'Add chopped onion, chili, and coriander leaves.',
    'Heat oil in a pan.',
    'Pour the egg mixture into the pan.',
    'Cook on medium heat until set.',
    'Flip if needed and cook the other side.',
    'Serve hot.'
  ]
},
{
  id: 122,
  title: 'Lemon Rice',
  description: 'A tangy and refreshing rice dish flavored with lemon and mild spices.',
  ingredients: [
    '1 cup cooked rice',
    '2 tbsp lemon juice',
    '1 tsp mustard seeds',
    '1 tbsp oil',
    'Curry leaves',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil in a pan and add mustard seeds.',
    'Add curry leaves and sauté briefly.',
    'Add cooked rice and mix well.',
    'Turn off heat and add lemon juice.',
    'Add salt and mix gently.',
    'Serve warm or at room temperature.'
  ]
},
{
  id: 123,
  title: 'Garlic Rice',
  description: 'Aromatic rice infused with the rich flavor of sautéed garlic.',
  ingredients: [
    '1 cup cooked rice',
    '4 cloves garlic (chopped)',
    '1 tbsp oil or butter',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil or butter in a pan.',
    'Add chopped garlic and sauté until golden.',
    'Add cooked rice and salt.',
    'Mix well and cook for a few minutes.',
    'Serve hot.'
  ]
},
{
  id: 124,
  title: 'Cheese Toast',
  description: 'Crispy toast topped with melted cheese for a quick and tasty snack.',
  ingredients: [
    '2 slices bread',
    '1/2 cup grated cheese',
    'Butter as needed'
  ],
  instructions: [
    'Spread butter on bread slices.',
    'Add grated cheese evenly on top.',
    'Toast on a pan or in an oven until cheese melts.',
    'Cook until edges are crispy.',
    'Serve hot.'
  ]
},
{
  id: 125,
  title: 'Quick vegetable Soup ',
  description: 'A fast and simple vegetable soup made with basic ingredients.',
  ingredients: [
    '1 cup mixed vegetables',
    '2 cups water',
    'Salt and pepper to taste'
  ],
  instructions: [
    'Boil vegetables in water until soft.',
    'Add salt and pepper.',
    'Simmer for a few minutes.',
    'Serve warm.'
  ]
},
{
  id: 126,
  title: 'Fried Egg',
  description: 'Simple fried egg.',
  ingredients: ['egg', 'oil'],
  instructions: 'Fry egg in pan.'
},
{
  id: 126,
  title: 'Fried Egg',
  description: 'A simple fried egg with a soft or crispy edge, perfect for breakfast.',
  ingredients: [
    '1 egg',
    '1 tsp oil or butter',
    'Salt to taste',
    'Pepper (optional)'
  ],
  instructions: [
    'Heat oil or butter in a pan over medium heat.',
    'Crack the egg gently into the pan.',
    'Cook until the white is set.',
    'For a runny yolk, remove early; for a firm yolk, cook longer or flip.',
    'Season with salt and pepper.',
    'Serve hot.'
  ]
},
{
  id: 127,
  title: 'Plain Rice',
  description: 'Soft and fluffy steamed rice, a staple base for many dishes.',
  ingredients: [
    '1 cup rice',
    '2 cups water',
    'Salt (optional)'
  ],
  instructions: [
    'Rinse the rice thoroughly under water.',
    'Add rice and water to a pot.',
    'Bring to a boil, then reduce heat to low.',
    'Cover and cook for 10–15 minutes until water is absorbed.',
    'Fluff with a fork before serving.'
  ]
},
{
  id: 128,
  title: 'Potato Fry',
  description: 'Crispy and flavorful pan-fried potatoes with simple spices.',
  ingredients: [
    '2 potatoes (sliced)',
    '2 tbsp oil',
    'Salt to taste',
    'Spices (chili powder, turmeric optional)'
  ],
  instructions: [
    'Heat oil in a pan.',
    'Add sliced potatoes and spread evenly.',
    'Cook on medium heat, stirring occasionally.',
    'Add salt and spices.',
    'Fry until golden and crispy.',
    'Serve hot.'
  ]
},
{
  id: 129,
  title: 'Onion Salad',
  description: 'A quick fresh salad with onions, lemon, and seasoning.',
  ingredients: [
    '1 onion (sliced)',
    '1 tbsp lemon juice',
    'Salt to taste'
  ],
  instructions: [
    'Slice the onion thinly.',
    'Add to a bowl with salt.',
    'Pour lemon juice over it.',
    'Mix well and let it sit for 5 minutes.',
    'Serve fresh.'
  ]
},
{
  id: 130,
  title: 'Egg Toast',
  description: 'Bread coated in egg and pan-fried to golden perfection.',
  ingredients: [
    '2 slices bread',
    '1 egg',
    '2 tbsp milk (optional)',
    'Salt to taste',
    '1 tbsp oil or butter'
  ],
  instructions: [
    'Beat egg with salt and milk in a bowl.',
    'Dip bread slices into the egg mixture.',
    'Heat oil or butter in a pan.',
    'Place bread and cook until golden on one side.',
    'Flip and cook the other side.',
    'Serve hot.'
  ]
},
{
  id: 131,
  title: 'Chicken Biryani',
  description: 'A rich and aromatic rice dish cooked with spiced chicken, herbs, and fragrant basmati rice.',
  ingredients: [
    '1 cup basmati rice',
    '200g chicken',
    '1 onion (sliced)',
    '1 tomato (chopped)',
    '2 tbsp yogurt',
    '1 tbsp ginger garlic paste',
    '2 tbsp oil or ghee',
    'Whole spices (bay leaf, cinnamon, cloves)',
    'Spice powders (turmeric, chili powder, garam masala)',
    'Salt to taste',
    'Fresh coriander and mint leaves',
    '2 cups water'
  ],
  instructions: [
    'Wash and soak basmati rice for 20 minutes.',
    'Heat oil or ghee in a pot and add whole spices.',
    'Add sliced onions and fry until golden brown.',
    'Add ginger garlic paste and sauté until fragrant.',
    'Add chicken pieces and cook until lightly browned.',
    'Add chopped tomatoes, yogurt, and spice powders.',
    'Cook until chicken is tender and oil separates.',
    'Add soaked rice and water.',
    'Mix gently, cover, and cook on low heat until rice is done.',
    'Garnish with coriander and mint leaves.',
    'Serve hot.'
  ]
},
{
  id: 132,
  title: 'Black Tea',
  description: 'A strong and refreshing tea made without milk.',
  ingredients: [
    '1 cup water',
    '1 tsp tea powder',
    'Sugar (optional)'
  ],
  instructions: [
    'Bring water to a boil in a saucepan.',
    'Add tea powder and let it brew for 2–3 minutes.',
    'Add sugar if desired.',
    'Strain into a cup.',
    'Serve hot.'
  ]
},
{
  id: 133,
  title: 'Fruit Bowl',
  description: 'A fresh and healthy mix of seasonal fruits.',
  ingredients: [
    '1 cup mixed fruits (apple, banana, mango, etc.)'
  ],
  instructions: [
    'Wash all fruits thoroughly.',
    'Peel and chop into bite-sized pieces.',
    'Combine in a bowl.',
    'Serve fresh or chilled.'
  ]
},
{
  id: 134,
  title: 'Banana Snack',
  description: 'A quick and healthy banana-based snack for instant energy.',
  ingredients: [
    '1 banana',
    '1 tsp honey (optional)',
    'A pinch of cinnamon (optional)'
  ],
  instructions: [
    'Peel and slice the banana.',
    'Place slices in a bowl.',
    'Drizzle honey on top.',
    'Sprinkle cinnamon if desired.',
    'Serve immediately.'
  ]
},
{
  id: 135,
  title: 'Rice Porridge',
  description: 'Soft and comforting rice porridge, perfect for light meals.',
  ingredients: [
    '1/2 cup rice',
    '3 cups water',
    'Salt to taste'
  ],
  instructions: [
    'Rinse the rice thoroughly.',
    'Add rice and water to a pot.',
    'Cook on low heat until rice becomes very soft.',
    'Stir occasionally to avoid sticking.',
    'Add salt and mix well.',
    'Serve warm.'
  ]
},
{
  id: 136,
  title: 'Vegetable Stir Fry',
  description: 'A quick and healthy stir-fried vegetable dish with light seasoning.',
  ingredients: [
    '1 cup mixed vegetables (carrot, beans, capsicum)',
    '1 tbsp oil',
    '2 cloves garlic (chopped)',
    'Salt to taste',
    'Pepper (optional)'
  ],
  instructions: [
    'Heat oil in a pan over medium heat.',
    'Add chopped garlic and sauté briefly.',
    'Add mixed vegetables and stir fry.',
    'Cook for 5–7 minutes until slightly tender but crisp.',
    'Add salt and pepper.',
    'Mix well and serve hot.'
  ]
},
{
  id: 137,
  title: 'Egg Bhurji',
  description: 'Indian-style scrambled eggs cooked with onions, spices, and herbs.',
  ingredients: [
    '2 eggs',
    '1 small onion (chopped)',
    '1 tomato (chopped)',
    '1 tbsp oil',
    'Salt and spices to taste',
    'Fresh coriander leaves'
  ],
  instructions: [
    'Heat oil in a pan.',
    'Add onions and sauté until soft.',
    'Add tomatoes and cook until mushy.',
    'Add spices and mix well.',
    'Crack eggs directly into the pan.',
    'Scramble and cook until done.',
    'Garnish with coriander and serve hot.'
  ]
},
{
  id: 138,
  title: 'Tomato Rice',
  description: 'A flavorful rice dish cooked with tangy tomatoes and spices.',
  ingredients: [
    '1 cup cooked rice',
    '2 tomatoes (chopped)',
    '1 tbsp oil',
    '1 tsp mustard seeds',
    'Spices to taste',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil in a pan and add mustard seeds.',
    'Add chopped tomatoes and cook until soft.',
    'Add spices and salt.',
    'Add cooked rice and mix well.',
    'Cook for a few minutes.',
    'Serve hot.'
  ]
},
{
  id: 139,
  title: 'Cucumber Salad',
  description: 'A refreshing and light salad perfect for hot days.',
  ingredients: [
    '1 cucumber (sliced)',
    'Salt to taste',
    '1 tsp lemon juice'
  ],
  instructions: [
    'Slice the cucumber into thin pieces.',
    'Place in a bowl.',
    'Add salt and lemon juice.',
    'Mix well.',
    'Serve fresh.'
  ]
},
{
  id: 140,
  title: 'Bread Jam',
  description: 'A quick and sweet snack made with bread and fruit jam.',
  ingredients: [
    '2 slices bread',
    '2 tbsp jam',
    'Butter (optional)'
  ],
  instructions: [
    'Spread butter on bread if using.',
    'Apply jam evenly on one side.',
    'Place another slice on top or serve open.',
    'Cut if desired and serve.'
  ]
},
{
  id: 141,
  title: 'Butter Rice',
  description: 'Simple and comforting rice tossed with butter for a rich taste.',
  ingredients: [
    '1 cup cooked rice',
    '1 tbsp butter',
    'Salt to taste'
  ],
  instructions: [
    'Heat butter in a pan.',
    'Add cooked rice to the pan.',
    'Mix well until butter coats the rice evenly.',
    'Add salt and stir.',
    'Serve warm.'
  ]
},
{
  id: 142,
  title: 'Egg Roll',
  description: 'A quick and tasty egg wrap made with a soft roti and spiced egg.',
  ingredients: [
    '1 roti',
    '1 egg',
    '1 tbsp oil',
    'Salt and spices to taste'
  ],
  instructions: [
    'Heat oil in a pan.',
    'Crack the egg and spread it slightly.',
    'Place the roti over the egg.',
    'Cook until egg is set, then flip.',
    'Season with salt and spices.',
    'Roll it and serve hot.'
  ]
},
{
  id: 143,
  title: 'Veg Wrap',
  description: 'A simple vegetable wrap packed with fresh and lightly cooked veggies.',
  ingredients: [
    '1 roti',
    '1/2 cup mixed vegetables',
    '1 tbsp sauce or chutney',
    'Salt to taste'
  ],
  instructions: [
    'Cook vegetables lightly in a pan.',
    'Add salt and mix well.',
    'Place vegetables on the roti.',
    'Add sauce or chutney.',
    'Roll tightly.',
    'Serve immediately.'
  ]
},
{
  id: 144,
  title: 'Sweet Milk',
  description: 'A warm and comforting sweet milk drink.',
  ingredients: [
    '1 cup milk',
    '2 tsp sugar',
    'A pinch of cardamom (optional)'
  ],
  instructions: [
    'Heat milk in a saucepan.',
    'Add sugar and stir until dissolved.',
    'Add cardamom if using.',
    'Mix well and serve warm.'
  ]
},
{
  id: 145,
  title: 'Boiled Egg',
  description: 'Perfectly boiled eggs for a quick and healthy snack.',
  ingredients: [
    '2 eggs',
    'Water as needed'
  ],
  instructions: [
    'Place eggs in a pot and cover with water.',
    'Bring to a boil.',
    'Cook for 8–10 minutes.',
    'Remove and cool in cold water.',
    'Peel and serve.'
  ]
},
{
  id: 146,
  title: 'Veg Noodles',
  description: 'Quick stir-fried noodles tossed with vegetables and light seasoning.',
  ingredients: [
    '1 pack noodles',
    '1/2 cup mixed vegetables',
    '1 tbsp oil',
    '1 tbsp soy sauce',
    'Salt to taste'
  ],
  instructions: [
    'Boil noodles according to package instructions and drain.',
    'Heat oil in a pan.',
    'Add vegetables and stir fry for a few minutes.',
    'Add cooked noodles and mix well.',
    'Add soy sauce and salt.',
    'Toss everything together and serve hot.'
  ]
},
{
  id: 147,
  title: 'Rice Upma',
  description: 'A quick and savory rice-based dish with mild spices.',
  ingredients: [
    '1 cup cooked rice',
    '1 tbsp oil',
    '1 tsp mustard seeds',
    'Curry leaves',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil in a pan.',
    'Add mustard seeds and let them splutter.',
    'Add curry leaves and sauté briefly.',
    'Add cooked rice and mix well.',
    'Add salt and stir.',
    'Cook for a few minutes and serve.'
  ]
},
{
  id: 148,
  title: 'Onion Fry',
  description: 'Simple sautéed onions with a slightly crispy texture.',
  ingredients: [
    '2 onions (sliced)',
    '1 tbsp oil',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil in a pan.',
    'Add sliced onions.',
    'Cook on medium heat until soft.',
    'Continue cooking until slightly crispy.',
    'Add salt and mix well.',
    'Serve hot.'
  ]
},
{
  id: 149,
  title: 'Egg Sandwich',
  description: 'A quick sandwich filled with cooked eggs for a satisfying snack.',
  ingredients: [
    '2 slices bread',
    '1 egg',
    '1 tbsp butter',
    'Salt and pepper to taste'
  ],
  instructions: [
    'Boil or scramble the egg.',
    'Spread butter on bread slices.',
    'Place the egg on one slice.',
    'Season with salt and pepper.',
    'Cover with another slice.',
    'Cut and serve.'
  ]
},
{
  id: 150,
  title: 'Veg Cutlet',
  description: 'Crispy vegetable patties perfect as a snack or appetizer.',
  ingredients: [
    '1 cup boiled vegetables (potato, carrot, peas)',
    '2 tbsp breadcrumbs',
    'Spices to taste',
    'Oil for frying'
  ],
  instructions: [
    'Mash the boiled vegetables in a bowl.',
    'Add spices and breadcrumbs.',
    'Mix into a firm dough.',
    'Shape into small patties.',
    'Heat oil in a pan.',
    'Fry until golden and crispy on both sides.',
    'Serve hot.'
  ]
},
{
  id: 151,
  title: 'Paneer Rice',
  description: 'A simple and flavorful rice dish with soft paneer cubes and mild spices.',
  ingredients: [
    '1 cup cooked rice',
    '100g paneer (cubed)',
    '1 tbsp oil',
    'Spices to taste',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil in a pan.',
    'Add paneer cubes and lightly fry until golden.',
    'Add spices and mix well.',
    'Add cooked rice and salt.',
    'Mix gently and cook for a few minutes.',
    'Serve hot.'
  ]
},
{
  id: 152,
  title: 'Chicken Mandi',
  description: 'A traditional Arabian rice dish with tender spiced chicken, smoky flavor, and fragrant rice.',
  ingredients: [
    '1 cup basmati rice',
    '300g chicken',
    '2 cups chicken stock or water',
    '1 onion (sliced)',
    '2 tbsp oil or butter',
    '1 tbsp ginger garlic paste',
    'Whole spices (cardamom, cloves, cinnamon)',
    'Spice powders (pepper, turmeric, mandi masala or garam masala)',
    'Salt to taste',
    'Lemon wedges (for serving)'
  ],
  instructions: [
    'Wash and soak basmati rice for 20 minutes.',
    'Heat oil in a pot and add whole spices.',
    'Add sliced onions and cook until soft.',
    'Add ginger garlic paste and sauté until fragrant.',
    'Add chicken and cook until lightly browned.',
    'Add spices and salt, mix well.',
    'Pour in chicken stock or water and bring to a boil.',
    'Add soaked rice and mix gently.',
    'Cover and cook on low heat until rice is fully cooked.',
    'Optional: create a smoky flavor by placing hot charcoal in a small bowl inside the pot and covering briefly.',
    'Serve hot with lemon wedges.'
  ]
},
{
  id: 153,
  title: 'Veg Curry',
  description: 'A basic mixed vegetable curry cooked with simple spices.',
  ingredients: [
    '1 cup mixed vegetables',
    '1 tbsp oil',
    '1 onion (chopped)',
    'Spices to taste',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil in a pan.',
    'Add chopped onion and sauté until soft.',
    'Add vegetables and cook for a few minutes.',
    'Add spices and salt.',
    'Add a little water and cook until vegetables are tender.',
    'Serve hot.'
  ]
},
{
  id: 154,
  title: 'Egg Masala',
  description: 'Boiled eggs cooked in a rich and spicy onion-tomato gravy.',
  ingredients: [
    '2 boiled eggs',
    '1 onion (chopped)',
    '1 tomato (chopped)',
    '1 tbsp oil',
    'Spices to taste',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil in a pan.',
    'Add onions and sauté until golden.',
    'Add tomatoes and cook until soft.',
    'Add spices and mix well.',
    'Add boiled eggs and coat with masala.',
    'Cook for a few minutes.',
    'Serve hot.'
  ]
},
{
  id: 155,
  title: 'Bread Butter',
  description: 'A classic and quick snack with soft bread and creamy butter.',
  ingredients: [
    '2 slices bread',
    'Butter as needed'
  ],
  instructions: [
    'Spread butter evenly on bread slices.',
    'Serve as is or lightly toast if desired.',
    'Enjoy immediately.'
  ]
},
{
  id: 156,
  title: 'Corn Salad',
  description: 'A fresh and slightly tangy corn salad that’s quick and refreshing.',
  ingredients: [
    '1 cup boiled sweet corn',
    '1 tbsp lemon juice',
    'Salt to taste',
    'Chili flakes (optional)'
  ],
  instructions: [
    'Add boiled corn to a bowl.',
    'Add salt and chili flakes.',
    'Pour lemon juice over it.',
    'Mix everything well.',
    'Serve fresh or slightly chilled.'
  ]
},
{
  id: 157,
  title: 'Veg Maggi',
  description: 'Instant noodles cooked with vegetables for a quick and tasty meal.',
  ingredients: [
    '1 pack Maggi noodles',
    '1/2 cup chopped vegetables',
    '1.5 cups water',
    'Maggi tastemaker'
  ],
  instructions: [
    'Boil water in a pan.',
    'Add vegetables and cook for 2–3 minutes.',
    'Add noodles and tastemaker.',
    'Cook until noodles are soft.',
    'Mix well and serve hot.'
  ]
},
{
  id: 158,
  title: 'Milk Coffee',
  description: 'A smooth and comforting milk coffee perfect for any time of the day.',
  ingredients: [
    '1 cup milk',
    '1 tsp coffee powder',
    '2 tsp sugar'
  ],
  instructions: [
    'Heat milk in a saucepan.',
    'Add coffee powder and sugar.',
    'Stir well until dissolved.',
    'Simmer for a minute.',
    'Serve hot.'
  ]
},
{
  id: 159,
  title: 'Chicken Fry',
  description: 'Spicy and crispy chicken fry with bold flavors.',
  ingredients: [
    '250g chicken',
    '2 tbsp oil',
    'Spices (chili powder, turmeric, garam masala)',
    'Salt to taste'
  ],
  instructions: [
    'Marinate chicken with spices and salt.',
    'Heat oil in a pan.',
    'Add chicken and cook on medium heat.',
    'Fry until chicken is cooked and slightly crispy.',
    'Stir occasionally for even cooking.',
    'Serve hot.'
  ]
},
{
  id: 160,
  title: 'Veg Rice Bowl',
  description: 'A simple and healthy rice bowl with vegetables.',
  ingredients: [
    '1 cup cooked rice',
    '1/2 cup mixed vegetables',
    '1 tbsp oil',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil in a pan.',
    'Add vegetables and cook until tender.',
    'Add cooked rice and salt.',
    'Mix well and cook for a few minutes.',
    'Serve hot.'
  ]
},
{
  id: 161,
  title: 'Potato Curry',
  description: 'A simple and comforting potato curry cooked with basic spices.',
  ingredients: [
    '2 potatoes (cubed)',
    '1 tbsp oil',
    '1 onion (chopped)',
    'Spices to taste',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil in a pan.',
    'Add onions and sauté until soft.',
    'Add potatoes and mix well.',
    'Add spices and salt.',
    'Add a little water and cover.',
    'Cook until potatoes are soft.',
    'Serve hot.'
  ]
},
{
  id: 162,
  title: 'Kerala Poratta',
  description: 'Soft, flaky layered flatbread made with maida, famous in Kerala and perfect with curry.',
  ingredients: [
    '2 cups maida (all-purpose flour)',
    '1 tbsp oil',
    'Salt to taste',
    'Water as needed',
    'Oil for cooking'
  ],
  instructions: [
    'Mix maida, salt, and oil in a bowl.',
    'Add water gradually and knead into a soft dough.',
    'Rest the dough for at least 30 minutes.',
    'Divide into small balls.',
    'Roll each ball thin, then stretch and fold into layers.',
    'Roll again lightly into a round shape.',
    'Cook on a hot tawa with oil until golden brown on both sides.',
    'Crush gently with hands to create layers.',
    'Serve hot with curry.'
  ]
},
{
  id: 163,
  title: 'Veg Pasta',
  description: 'Simple pasta tossed with vegetables and light seasoning.',
  ingredients: [
    '1 cup pasta',
    '1/2 cup vegetables',
    '1 tbsp oil',
    'Salt to taste'
  ],
  instructions: [
    'Boil pasta and drain.',
    'Heat oil in a pan.',
    'Add vegetables and cook briefly.',
    'Add pasta and salt.',
    'Mix well and cook for a few minutes.',
    'Serve hot.'
  ]
},
{
  id: 164,
  title: 'Tomato Curry',
  description: 'A tangy curry made with tomatoes and simple spices.',
  ingredients: [
    '2 tomatoes (chopped)',
    '1 tbsp oil',
    '1 onion (chopped)',
    'Spices to taste',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil in a pan.',
    'Add onions and sauté until soft.',
    'Add tomatoes and cook until mushy.',
    'Add spices and salt.',
    'Cook for a few minutes until thick.',
    'Serve hot.'
  ]
},
{
  id: 165,
  title: 'Egg Noodles',
  description: 'Stir-fried noodles with eggs for a quick and satisfying dish.',
  ingredients: [
    '1 pack noodles',
    '2 eggs',
    '1 tbsp oil',
    'Salt to taste'
  ],
  instructions: [
    'Boil noodles and drain.',
    'Heat oil in a pan.',
    'Scramble eggs in the pan.',
    'Add noodles and mix well.',
    'Add salt.',
    'Cook for a few minutes and serve hot.'
  ]
},
{
  id: 166,
  title: 'Veg Omelette',
  description: 'A fluffy omelette loaded with fresh vegetables and light spices.',
  ingredients: [
    '2 eggs',
    '1/4 cup chopped vegetables (onion, tomato, capsicum)',
    '1 tbsp oil',
    'Salt and pepper to taste'
  ],
  instructions: [
    'Beat eggs in a bowl with salt and pepper.',
    'Add chopped vegetables and mix.',
    'Heat oil in a pan.',
    'Pour the mixture into the pan.',
    'Cook on medium heat until set.',
    'Flip and cook the other side.',
    'Serve hot.'
  ]
},
{
  id: 167,
  title: 'Chicken Soup',
  description: 'A light and comforting chicken soup, perfect for a warm meal.',
  ingredients: [
    '200g chicken',
    '2 cups water',
    '1 small onion (chopped)',
    'Salt and pepper to taste'
  ],
  instructions: [
    'Add chicken and water to a pot.',
    'Bring to a boil and remove impurities.',
    'Add chopped onion, salt, and pepper.',
    'Simmer for 15–20 minutes.',
    'Serve hot.'
  ]
},
{
  id: 168,
  title: 'Rice Salad',
  description: 'A simple cold rice salad mixed with fresh vegetables.',
  ingredients: [
    '1 cup cooked rice (cooled)',
    '1/2 cup vegetables',
    '1 tbsp lemon juice',
    'Salt to taste'
  ],
  instructions: [
    'Add cooled rice to a bowl.',
    'Add chopped vegetables.',
    'Add lemon juice and salt.',
    'Mix well.',
    'Serve chilled or at room temperature.'
  ]
},
{
  id: 169,
  title: 'Paneer Fry',
  description: 'Crispy and lightly spiced fried paneer cubes.',
  ingredients: [
    '150g paneer (cubed)',
    '1 tbsp oil',
    'Spices to taste',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil in a pan.',
    'Add paneer cubes.',
    'Sprinkle spices and salt.',
    'Fry until golden on all sides.',
    'Serve hot.'
  ]
},
{
  id: 170,
  title: 'Veg Burger',
  description: 'A simple vegetable burger with a crispy patty and soft bun.',
  ingredients: [
    '1 burger bun',
    '1 veg patty',
    'Lettuce or vegetables',
    'Sauce as needed'
  ],
  instructions: [
    'Cook the veg patty until crispy.',
    'Lightly toast the burger bun.',
    'Place the patty inside the bun.',
    'Add vegetables and sauce.',
    'Close and serve.'
  ]
},
{
  id: 171,
  title: 'Egg Burger',
  description: 'A simple burger with a fried egg and soft bun, perfect for a quick bite.',
  ingredients: [
    '1 burger bun',
    '1 egg',
    '1 tsp oil',
    'Salt and pepper to taste',
    'Sauce (optional)'
  ],
  instructions: [
    'Heat oil in a pan.',
    'Fry the egg to your liking.',
    'Lightly toast the burger bun.',
    'Place the egg inside the bun.',
    'Add salt, pepper, and sauce.',
    'Close and serve.'
  ]
},
{
  id: 172,
  title: 'Veg Pizza',
  description: 'A delicious homemade vegetable pizza topped with fresh veggies and melted cheese.',
  ingredients: [
    '1 pizza base',
    '1/2 cup mixed vegetables (capsicum, onion, corn)',
    '1/2 cup grated cheese',
    '2 tbsp pizza sauce',
    '1 tsp oregano or mixed herbs'
  ],
  instructions: [
    'Preheat a pan or oven.',
    'Spread pizza sauce evenly on the base.',
    'Add chopped vegetables on top.',
    'Sprinkle grated cheese evenly.',
    'Add oregano or herbs.',
    'Cook in oven or covered pan until cheese melts and base is crisp.',
    'Slice and serve hot.'
  ]
},
{
  id: 173,
  title: 'Chicken Pizza',
  description: 'A delicious pizza topped with juicy chicken and melted cheese.',
  ingredients: [
    '1 pizza base',
    '1/2 cup cooked chicken',
    '1/2 cup cheese',
    'Pizza sauce'
  ],
  instructions: [
    'Spread sauce on the pizza base.',
    'Add cooked chicken pieces.',
    'Top with cheese.',
    'Bake until cheese melts and base is crisp.',
    'Slice and serve hot.'
  ]
},
{
  id: 174,
  title: 'Cheese Pasta',
  description: 'Creamy and cheesy pasta that’s quick and satisfying.',
  ingredients: [
    '1 cup pasta',
    '1/2 cup cheese',
    '1 tbsp butter',
    'Salt to taste'
  ],
  instructions: [
    'Boil pasta and drain.',
    'Heat butter in a pan.',
    'Add pasta and mix.',
    'Add cheese and stir until melted.',
    'Add salt.',
    'Serve hot.'
  ]
},
{
  id: 175,
  title: 'Veg Wrap Roll',
  description: 'A simple vegetable wrap rolled in soft roti with light seasoning.',
  ingredients: [
    '1 roti',
    '1/2 cup vegetables',
    '1 tbsp sauce',
    'Salt to taste'
  ],
  instructions: [
    'Cook vegetables lightly in a pan.',
    'Add salt and mix.',
    'Place vegetables on the roti.',
    'Add sauce.',
    'Roll tightly.',
    'Serve fresh.'
  ]
},
{
  id: 176,
  title: 'Chicken Wrap',
  description: 'Juicy chicken wrapped in soft roti with fresh veggies.',
  ingredients: [
    '2 roti/wraps',
    '1/2 cup cooked chicken',
    'onion & lettuce',
    'spices',
    'mayonnaise or sauce'
  ],
  instructions: [
    'Heat cooked chicken with spices.',
    'Warm the roti/wrap.',
    'Place chicken and veggies inside.',
    'Add mayo or sauce.',
    'Roll tightly.',
    'Cut and serve fresh.'
  ]
},
{
  id: 177,
  title: 'Potato Sandwich',
  description: 'Crispy toasted sandwich filled with spiced mashed potatoes.',
  ingredients: [
    '4 bread slices',
    '2 boiled potatoes',
    'onion',
    'salt & spices',
    'butter'
  ],
  instructions: [
    'Mash boiled potatoes.',
    'Mix with onions and spices.',
    'Spread filling between bread slices.',
    'Apply butter on outside.',
    'Toast in pan until golden brown.',
    'Cut and serve hot.'
  ]
},
{
  id: 178,
  title: 'Egg Curry Rice',
  description: 'Simple and comforting rice served with spicy egg curry.',
  ingredients: [
    '2 boiled eggs',
    '1 cup cooked rice',
    'onion',
    'tomato',
    'spices',
    'oil'
  ],
  instructions: [
    'Heat oil in a pan.',
    'Sauté onions until golden.',
    'Add tomatoes and spices, cook into gravy.',
    'Add boiled eggs and simmer for 5–7 minutes.',
    'Serve hot with cooked rice.'
  ]
},
{
  id: 179,
  title: 'Veg Soup Bowl',
  description: 'Light and healthy vegetable soup.',
  ingredients: [
    'mixed vegetables',
    'water',
    'salt',
    'pepper'
  ],
  instructions: [
    'Chop vegetables finely.',
    'Boil them in water until soft.',
    'Season with salt and pepper.',
    'Simmer for a few minutes.',
    'Serve hot.'
  ]
},
{
  id: 180,
  title: 'Chicken Rice Bowl',
  description: 'Flavourful chicken served over steamed rice.',
  ingredients: [
    '1 cup rice',
    'chicken pieces',
    'onion',
    'spices',
    'oil'
  ],
  instructions: [
    'Cook rice and keep aside.',
    'Heat oil and sauté onions.',
    'Add chicken and spices, cook well.',
    'Let it become slightly saucy.',
    'Serve chicken over rice.'
  ]
},
{
  id: 181,
  title: 'Paneer Sandwich',
  description: 'Grilled sandwich stuffed with spiced paneer filling.',
  ingredients: [
    'bread slices',
    'paneer',
    'onion',
    'spices',
    'butter'
  ],
  instructions: [
    'Crumble paneer and mix with onions and spices.',
    'Spread mixture between bread slices.',
    'Apply butter on outside.',
    'Grill or toast until golden.',
    'Serve hot.'
  ]
},
{
  id: 182,
  title: 'Veg Toast',
  description: 'Crunchy toasted bread topped with seasoned vegetables.',
  ingredients: [
    'bread slices',
    'mixed vegetables',
    'butter',
    'salt & pepper'
  ],
  instructions: [
    'Sauté vegetables lightly with seasoning.',
    'Toast bread slices with butter.',
    'Place cooked vegetables on top.',
    'Toast again lightly if needed.',
    'Serve warm.'
  ]
},
{
  id: 183,
  title: 'Milkshake Vanilla',
  description: 'Creamy and smooth vanilla milkshake.',
  ingredients: [
    '1 cup cold milk',
    '2 scoops vanilla ice cream',
    '1 tsp sugar (optional)'
  ],
  instructions: [
    'Add milk, ice cream, and sugar into a blender.',
    'Blend until smooth and creamy.',
    'Pour into a glass.',
    'Serve chilled.'
  ]
},
{
  id: 184,
  title: 'Chocolate Shake',
  description: 'Rich and thick chocolate milkshake.',
  ingredients: [
    '1 cup cold milk',
    '2 tbsp chocolate syrup or cocoa powder',
    '2 scoops chocolate ice cream'
  ],
  instructions: [
    'Add milk, chocolate, and ice cream to blender.',
    'Blend until thick and smooth.',
    'Pour into glass.',
    'Top with chocolate syrup if needed.'
  ]
},
{
  id: 185,
  title: 'Strawberry Shake',
  description: 'Fresh and fruity strawberry milkshake.',
  ingredients: [
    '1 cup cold milk',
    '5–6 strawberries',
    '2 scoops vanilla ice cream',
    'sugar (optional)'
  ],
  instructions: [
    'Wash and chop strawberries.',
    'Add all ingredients into blender.',
    'Blend until smooth.',
    'Serve chilled.'
  ]
},
{
  id: 186,
  title: 'Veg Fried Rice',
  description: 'Classic Indo-Chinese vegetable fried rice.',
  ingredients: [
    '1 cup cooked rice',
    'mixed vegetables (carrot, beans, peas)',
    'soy sauce',
    'garlic',
    'oil',
    'salt & pepper'
  ],
  instructions: [
    'Heat oil in a pan.',
    'Add garlic and sauté.',
    'Add vegetables and stir fry.',
    'Add cooked rice and mix well.',
    'Add soy sauce and seasoning.',
    'Toss everything and serve hot.'
  ]
},
{
  id: 187,
  title: 'Chicken Fried Rice',
  description: 'Flavourful fried rice with tender chicken pieces.',
  ingredients: [
    '1 cup cooked rice',
    'chicken pieces',
    'soy sauce',
    'garlic',
    'vegetables (optional)',
    'oil'
  ],
  instructions: [
    'Heat oil in a pan.',
    'Cook chicken with spices until done.',
    'Add garlic and vegetables.',
    'Add cooked rice and mix well.',
    'Pour soy sauce and toss.',
    'Serve hot.'
  ]
},
{
  id: 188,
  title: 'Paneer Fried Rice',
  description: 'Flavorful fried rice with soft paneer cubes and vegetables.',
  ingredients: [
    '1 cup cooked rice',
    'paneer cubes',
    'mixed vegetables',
    'soy sauce',
    'garlic',
    'oil',
    'salt & pepper'
  ],
  instructions: [
    'Heat oil in a pan.',
    'Add garlic and sauté briefly.',
    'Add vegetables and cook for a minute.',
    'Add paneer cubes and lightly fry.',
    'Add cooked rice and mix well.',
    'Add soy sauce and seasoning.',
    'Toss everything and serve hot.'
  ]
},
{
  id: 189,
  title: 'Veg Cutlet Plate',
  description: 'Crispy vegetable cutlets served as a tasty snack.',
  ingredients: [
    'boiled potatoes',
    'mixed vegetables',
    'breadcrumbs',
    'spices',
    'oil'
  ],
  instructions: [
    'Mash boiled potatoes.',
    'Mix with cooked vegetables and spices.',
    'Shape into small cutlets.',
    'Coat with breadcrumbs.',
    'Deep fry or shallow fry until golden brown.',
    'Serve hot.'
  ]
},
{
  id: 190,
  title: 'Egg Cutlet',
  description: 'Crispy cutlet made with boiled eggs and spices.',
  ingredients: [
    'boiled eggs',
    'boiled potatoes',
    'spices',
    'breadcrumbs',
    'oil'
  ],
  instructions: [
    'Mash potatoes and mix with spices.',
    'Wrap mixture around boiled eggs.',
    'Coat with breadcrumbs.',
    'Fry until golden and crispy.',
    'Serve warm.'
  ]
},
{
  id: 191,
  title: 'Chicken Cutlet',
  description: 'Crispy chicken cutlets with a juicy, spiced center.',
  ingredients: [
    'minced chicken',
    'boiled potato',
    'onion',
    'spices',
    'breadcrumbs',
    'oil'
  ],
  instructions: [
    'Cook minced chicken with onions and spices.',
    'Mix with mashed boiled potatoes.',
    'Shape into cutlets.',
    'Coat with breadcrumbs.',
    'Fry until golden and crispy.',
    'Serve hot.'
  ]
},
{
  id: 192,
  title: 'Creamy Veg Soup',
  description: 'Smooth and creamy vegetable soup.',
  ingredients: [
    'mixed vegetables',
    'milk or cream',
    'butter',
    'salt',
    'pepper'
  ],
  instructions: [
    'Boil vegetables until soft.',
    'Blend them into a smooth paste.',
    'Heat butter in a pan.',
    'Add blended mixture and milk/cream.',
    'Season well and simmer.',
    'Serve hot.'
  ]
},
{
  id: 193,
  title: 'Tomato Pasta',
  description: 'Simple pasta in rich tomato sauce.',
  ingredients: [
    'pasta',
    'tomatoes',
    'garlic',
    'olive oil',
    'salt',
    'herbs'
  ],
  instructions: [
    'Boil pasta until soft.',
    'Blend or cook tomatoes into sauce.',
    'Heat oil and sauté garlic.',
    'Add tomato sauce and seasoning.',
    'Mix cooked pasta into sauce.',
    'Serve warm.'
  ]
},
{
  id: 194,
  title: 'Garlic Pasta',
  description: 'Aromatic pasta with rich garlic flavor.',
  ingredients: [
    'pasta',
    'garlic',
    'butter',
    'olive oil',
    'salt',
    'pepper'
  ],
  instructions: [
    'Boil pasta and keep aside.',
    'Heat butter and oil in a pan.',
    'Add chopped garlic and sauté.',
    'Add pasta and mix well.',
    'Season with salt and pepper.',
    'Serve hot.'
  ]
},
{
  id: 195,
  title: 'Veg Chowmein',
  description: 'Street-style stir-fried noodles with vegetables.',
  ingredients: [
    'noodles',
    'cabbage',
    'carrot',
    'capsicum',
    'soy sauce',
    'garlic',
    'oil'
  ],
  instructions: [
    'Boil noodles and drain.',
    'Heat oil in a pan.',
    'Add garlic and vegetables, stir fry.',
    'Add noodles and soy sauce.',
    'Toss everything well.',
    'Serve hot.'
  ]
},
{
  id: 196,
  title: 'Chicken Chowmein',
  description: 'Spicy Indo-Chinese noodles with tender chicken and vegetables.',
  ingredients: [
    'noodles',
    'chicken pieces',
    'cabbage',
    'carrot',
    'soy sauce',
    'garlic',
    'oil'
  ],
  instructions: [
    'Boil noodles and set aside.',
    'Cook chicken with salt and spices.',
    'Heat oil and sauté garlic.',
    'Add vegetables and stir fry.',
    'Add chicken and noodles.',
    'Pour soy sauce and toss well.',
    'Serve hot.'
  ]
},
{
  id: 197,
  title: 'Paneer Chowmein',
  description: 'Stir-fried noodles with paneer and crunchy vegetables.',
  ingredients: [
    'noodles',
    'paneer cubes',
    'cabbage',
    'carrot',
    'soy sauce',
    'garlic',
    'oil'
  ],
  instructions: [
    'Boil noodles and drain.',
    'Lightly fry paneer cubes.',
    'Heat oil and sauté garlic.',
    'Add vegetables and cook quickly.',
    'Add noodles, paneer, and soy sauce.',
    'Toss well and serve.'
  ]
},
{
  id: 198,
  title: 'Veg Salad Bowl',
  description: 'Fresh and healthy vegetable salad.',
  ingredients: [
    'cucumber',
    'tomato',
    'carrot',
    'onion',
    'lemon juice',
    'salt'
  ],
  instructions: [
    'Chop all vegetables finely.',
    'Add them to a bowl.',
    'Add salt and lemon juice.',
    'Mix well.',
    'Serve fresh and cold.'
  ]
},
{
  id: 199,
  title: 'Fruit Salad',
  description: 'Refreshing mix of seasonal fruits.',
  ingredients: [
    'apple',
    'banana',
    'grapes',
    'orange',
    'honey (optional)'
  ],
  instructions: [
    'Chop all fruits into bite-sized pieces.',
    'Add them to a bowl.',
    'Drizzle honey if needed.',
    'Mix gently.',
    'Serve chilled.'
  ]
},
{
  id: 200,
  title: 'Egg Salad',
  description: 'Protein-rich salad made with boiled eggs and veggies.',
  ingredients: [
    'boiled eggs',
    'onion',
    'cucumber',
    'salt',
    'pepper',
    'lemon juice'
  ],
  instructions: [
    'Chop boiled eggs into pieces.',
    'Add chopped vegetables.',
    'Season with salt and pepper.',
    'Add lemon juice.',
    'Mix and serve fresh.'
  ]
},
{
  id: 201,
  title: 'Chicken Salad',
  description: 'Fresh chicken salad with crisp vegetables and light dressing.',
  ingredients: [
    '1 cup cooked chicken (shredded)',
    '1/2 cup lettuce (chopped)',
    '1/4 cup cucumber (sliced)',
    '2 tbsp mayonnaise',
    'Salt to taste'
  ],
  instructions: [
    'Add chicken, lettuce, and cucumber to a bowl.',
    'Add mayonnaise and mix well.',
    'Season with salt.',
    'Toss everything evenly.',
    'Serve fresh.'
  ]
},
{
  id: 202,
  title: 'Paneer Salad',
  description: 'Healthy paneer salad with fresh vegetables.',
  ingredients: [
    '1 cup paneer cubes',
    '1/2 cup cucumber and tomato',
    '1 tbsp olive oil',
    'Salt to taste'
  ],
  instructions: [
    'Combine paneer and vegetables in a bowl.',
    'Drizzle olive oil over the mixture.',
    'Add salt and mix gently.',
    'Serve immediately.'
  ]
},
{
  id: 203,
  title: 'Veg Roll',
  description: 'Soft roti filled with spiced vegetables.',
  ingredients: [
    '2 rotis',
    '1 cup mixed vegetables',
    '1 tbsp oil',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil and cook vegetables until soft.',
    'Add salt and mix well.',
    'Place filling on roti.',
    'Roll tightly.',
    'Serve warm.'
  ]
},
{
  id: 204,
  title: 'Chicken Roll',
  description: 'Tasty roll filled with spiced chicken.',
  ingredients: [
    '2 rotis',
    '1 cup cooked chicken',
    '1 tbsp sauce',
    'Salt to taste'
  ],
  instructions: [
    'Heat chicken in a pan.',
    'Add sauce and mix well.',
    'Place filling on roti.',
    'Roll tightly.',
    'Serve hot.'
  ]
},
{
  id: 205,
  title: 'Egg Roll Street',
  description: 'Street-style egg roll with simple spices.',
  ingredients: [
    '2 eggs',
    '2 rotis',
    '1 tbsp oil',
    'Salt to taste'
  ],
  instructions: [
    'Beat eggs with salt.',
    'Heat oil and cook eggs in a pan.',
    'Place roti over egg and cook briefly.',
    'Flip and roll tightly.',
    'Serve hot.'
  ]
},
{
  id: 206,
  title: 'Veg Pizza',
  description: 'Classic vegetable pizza with melted cheese.',
  ingredients: [
    '1 pizza base',
    '1/2 cup vegetables',
    '1/2 cup cheese',
    '2 tbsp pizza sauce'
  ],
  instructions: [
    'Spread sauce on the pizza base.',
    'Add vegetables evenly.',
    'Top with cheese.',
    'Bake at 180°C for 10 minutes.',
    'Serve hot.'
  ]
},
{
  id: 207,
  title: 'Chicken Pizza Mini',
  description: 'Mini pizza topped with chicken and cheese.',
  ingredients: [
    '1 mini pizza base',
    '1/2 cup cooked chicken',
    '1/2 cup cheese'
  ],
  instructions: [
    'Place chicken on pizza base.',
    'Add cheese on top.',
    'Bake for 10 minutes.',
    'Serve warm.'
  ]
},
{
  id: 208,
  title: 'Paneer Pizza Mini',
  description: 'Mini pizza with paneer topping.',
  ingredients: [
    '1 mini pizza base',
    '1/2 cup paneer',
    '1/2 cup cheese'
  ],
  instructions: [
    'Add paneer on base.',
    'Top with cheese.',
    'Bake for 10 minutes.',
    'Serve hot.'
  ]
},
{
  id: 209,
  title: 'Veg Rice Deluxe',
  description: 'Rich vegetable rice with mild spices.',
  ingredients: [
    '2 cups cooked rice',
    '1 cup vegetables',
    '1 tbsp oil',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil in a pan.',
    'Add vegetables and cook.',
    'Add rice and mix well.',
    'Season with salt.',
    'Serve hot.'
  ]
},
{
  id: 210,
  title: 'Chicken Rice Deluxe',
  description: 'Flavorful rice with cooked chicken.',
  ingredients: [
    '2 cups cooked rice',
    '1 cup chicken',
    '1 tbsp oil',
    'Salt to taste'
  ],
  instructions: [
    'Heat oil and cook chicken.',
    'Add rice and mix well.',
    'Season with salt.',
    'Cook for 2–3 minutes.',
    'Serve hot.'
  ]
},
{
  id: 211,
  title: 'Paneer Rice Deluxe',
  description: 'Rice mixed with soft paneer cubes.',
  ingredients: [
    '2 cups cooked rice',
    '1 cup paneer',
    '1 tbsp oil'
  ],
  instructions: [
    'Heat oil and cook paneer lightly.',
    'Add rice and mix.',
    'Cook for 2 minutes.',
    'Serve hot.'
  ]
},
{
  id: 212,
  title: 'Veg Soup Hot',
  description: 'Warm vegetable soup for light meals.',
  ingredients: [
    '2 cups water',
    '1 cup vegetables',
    'Salt to taste'
  ],
  instructions: [
    'Boil water in a pot.',
    'Add vegetables.',
    'Cook for 10 minutes.',
    'Add salt and mix.',
    'Serve hot.'
  ]
},
{
  id: 213,
  title: 'Chicken Soup Hot',
  description: 'Light chicken soup with simple seasoning.',
  ingredients: [
    '2 cups water',
    '1 cup chicken',
    'Salt to taste'
  ],
  instructions: [
    'Boil water.',
    'Add chicken.',
    'Cook until tender.',
    'Season with salt.',
    'Serve warm.'
  ]
},
{
  id: 214,
  title: 'Paneer Soup',
  description: 'Simple paneer soup.',
  ingredients: [
    '2 cups water',
    '1 cup paneer',
    'Salt to taste'
  ],
  instructions: [
    'Boil water.',
    'Add paneer.',
    'Cook for 5 minutes.',
    'Add salt.',
    'Serve hot.'
  ]
},
{
  id: 215,
  title: 'Veg Snack Plate',
  description: 'Quick vegetable snack platter.',
  ingredients: [
    '1 cup vegetables',
    '1 tbsp sauce'
  ],
  instructions: [
    'Arrange vegetables on a plate.',
    'Add sauce.',
    'Serve fresh.'
  ]
},
{
  id: 216,
  title: 'Chicken Snack Plate',
  description: 'Simple chicken snack.',
  ingredients: [
    '1 cup cooked chicken',
    '1 tbsp sauce'
  ],
  instructions: [
    'Place chicken on plate.',
    'Add sauce.',
    'Serve immediately.'
  ]
},
{
  id: 217,
  title: 'Egg Snack Plate',
  description: 'Easy egg snack.',
  ingredients: [
    '2 boiled eggs',
    'Salt to taste'
  ],
  instructions: [
    'Slice eggs.',
    'Sprinkle salt.',
    'Serve.'
  ]
},
{
  id: 218,
  title: 'Paneer Snack Plate',
  description: 'Light paneer snack.',
  ingredients: [
    '1 cup paneer',
    '1 tbsp sauce'
  ],
  instructions: [
    'Place paneer on plate.',
    'Add sauce.',
    'Serve fresh.'
  ]
},
{
  id: 219,
  title: 'Veg Combo Meal',
  description: 'Rice served with vegetable curry.',
  ingredients: [
    '1 cup rice',
    '1 cup veg curry'
  ],
  instructions: [
    'Serve rice on a plate.',
    'Add curry on the side.',
    'Serve hot.'
  ]
},
{
  id: 220,
  title: 'Chicken Combo Meal',
  description: 'Rice with flavorful chicken curry.',
  ingredients: [
    '1 cup rice',
    '1 cup chicken curry'
  ],
  instructions: [
    'Serve rice.',
    'Add chicken curry.',
    'Serve hot.'
  ]
},
{
  id: 221,
  title: 'Egg Rice Bowl',
  description: 'Simple rice mixed with egg.',
  ingredients: [
    '2 cups rice',
    '2 eggs',
    'Salt to taste'
  ],
  instructions: [
    'Cook eggs in a pan.',
    'Add rice and mix.',
    'Season with salt.',
    'Serve hot.'
  ]
},
{
  id: 222,
  title: 'Veg Rice Mix',
  description: 'Mixed vegetable rice.',
  ingredients: [
    '2 cups rice',
    '1 cup vegetables',
    'Salt to taste'
  ],
  instructions: [
    'Cook vegetables.',
    'Add rice and mix.',
    'Add salt.',
    'Serve hot.'
  ]
},
{
  id: 223,
  title: 'Chicken Masala',
  description: 'Spicy chicken cooked in masala.',
  ingredients: [
    '1 cup chicken',
    '2 tbsp oil',
    '1 tbsp masala'
  ],
  instructions: [
    'Heat oil.',
    'Add chicken.',
    'Add masala.',
    'Cook well.',
    'Serve hot.'
  ]
},
{
  id: 224,
  title: 'Paneer Masala',
  description: 'Paneer cooked in rich masala.',
  ingredients: [
    '1 cup paneer',
    '2 tbsp oil',
    '1 tbsp masala'
  ],
  instructions: [
    'Heat oil.',
    'Add paneer.',
    'Add masala.',
    'Cook well.',
    'Serve hot.'
  ]
},
{
  id: 225,
  title: 'Veg Masala',
  description: 'Vegetables cooked in spiced gravy.',
  ingredients: [
    '1 cup vegetables',
    '2 tbsp oil',
    '1 tbsp masala'
  ],
  instructions: [
    'Heat oil.',
    'Add vegetables.',
    'Add masala.',
    'Cook well.',
    'Serve hot.'
  ]
},
{
  id: 226,
  title: 'Rice Combo Plate',
  description: 'Rice served with curry.',
  ingredients: [
    '1 cup rice',
    '1 cup curry'
  ],
  instructions: [
    'Serve rice.',
    'Add curry.',
    'Serve hot.'
  ]
},
{
  id: 227,
  title: 'Veg Deluxe Plate',
  description: 'Complete veg meal.',
  ingredients: [
    '1 cup rice',
    '1 cup vegetables'
  ],
  instructions: [
    'Serve rice.',
    'Add vegetables.',
    'Serve fresh.'
  ]
},
{
  id: 228,
  title: 'Chicken Deluxe Plate',
  description: 'Rice with chicken meal.',
  ingredients: [
    '1 cup rice',
    '1 cup chicken'
  ],
  instructions: [
    'Serve rice.',
    'Add chicken.',
    'Serve hot.'
  ]
},
{
  id: 229,
  title: 'Paneer Deluxe Plate',
  description: 'Rice with paneer meal.',
  ingredients: [
    '1 cup rice',
    '1 cup paneer'
  ],
  instructions: [
    'Serve rice.',
    'Add paneer.',
    'Serve hot.'
  ]
},
{
  id: 230,
  title: 'Egg Deluxe Plate',
  description: 'Rice served with eggs.',
  ingredients: [
    '1 cup rice',
    '2 eggs'
  ],
  instructions: [
    'Cook eggs.',
    'Serve with rice.',
    'Serve hot.'
  ]
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
const search = document.querySelector("input");

search.addEventListener("input", () => {
  const value = search.value.toLowerCase();
  document.querySelectorAll(".card").forEach(card => {
    card.style.display =
      card.innerText.toLowerCase().includes(value)
        ? "block"
        : "none";
  });
});
let html = "";

// 🔥 Best matches
if (matched.length > 0) {
  html += "<h3>🔥 Best Matches</h3>";
  matched.slice(0, 6).forEach(recipe => {
    html += createRecipeCard(recipe);
  });
}

// ✨ Suggestions
if (matched.length < 6) {
  html += "<h3>✨ You Might Also Like</h3>";
  others.slice(0, 6 - matched.length).forEach(recipe => {
    html += createRecipeCard(recipe);
  });
}

document.getElementById("recipes-container").innerHTML = html;
