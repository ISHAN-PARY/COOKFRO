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
