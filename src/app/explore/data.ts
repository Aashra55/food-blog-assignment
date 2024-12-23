import recipeImage1 from "../images/one.webp";
import recipeImage2 from "../images/ex2.jpg";
import recipeImage3 from "../images/ex3.jpg";
import recipeImage4 from "../images/four.jpg";

export const recipes = [
  {
    id: 1,
    title: "Strawberry Shortcake",
    image: recipeImage1,
    category: "Dessert",
    item: "one",
    description: "A delightful dessert made with fresh strawberries, fluffy shortcake, and whipped cream.",
    author: "Chef Emily",
    date: "2024-12-23",
    ingredients: [
      "2 cups all-purpose flour",
      "1/4 cup sugar",
      "1 tbsp baking powder",
      "1/2 tsp salt",
      "1/2 cup unsalted butter",
      "3/4 cup milk",
      "1 tsp vanilla extract",
      "2 cups fresh strawberries, sliced",
      "1 cup whipped cream"
    ],
    instructions: [
      "Preheat oven to 400°F (200°C).",
      "In a large bowl, mix flour, sugar, baking powder, and salt.",
      "Cut in butter until the mixture resembles coarse crumbs.",
      "Add milk and vanilla extract; stir to form a dough.",
      "Drop spoonfuls of dough onto a baking sheet and bake for 15 minutes.",
      "Layer shortcake, strawberries, and whipped cream."
    ],
    tips: [
      "Use fresh, ripe strawberries for the best flavor.",
      "Chill the whipped cream before serving.",
      "Cut shortcakes in half and toast lightly for added texture."
    ],
    variations: [
      "Substitute strawberries with blueberries or peaches.",
      "Add a dollop of chocolate sauce for extra indulgence.",
      "Use gluten-free flour for a gluten-free version."
    ]
  },
  {
    id: 2,
    title: "Spicy Tacos",
    image: recipeImage2,
    category: "Mexican",
    item: "two",
    description: "Flavorful tacos filled with spicy meat, fresh toppings, and a zesty kick.",
    author: "Chef Carlos",
    date: "2024-12-22",
    ingredients: [
      "1 lb ground beef",
      "1 tbsp taco seasoning",
      "8 small tortillas",
      "1 cup shredded lettuce",
      "1/2 cup diced tomatoes",
      "1/4 cup diced onions",
      "1/2 cup shredded cheese",
      "1/4 cup sour cream",
      "Hot sauce (optional)"
    ],
    instructions: [
      "Cook ground beef in a skillet over medium heat until browned.",
      "Add taco seasoning and 1/4 cup water; simmer for 5 minutes.",
      "Warm tortillas in a dry skillet or microwave.",
      "Fill tortillas with beef, lettuce, tomatoes, onions, and cheese.",
      "Top with sour cream and hot sauce, if desired."
    ],
    tips: [
      "Warm tortillas before assembling for better flavor.",
      "Use fresh toppings for a crisp texture.",
      "Serve with lime wedges for an extra zing."
    ],
    variations: [
      "Replace beef with chicken, pork, or tofu.",
      "Add guacamole or salsa for added flavor.",
      "Use hard-shell tacos for a crunchy version."
    ]
  },
  {
    id: 3,
    title: "Pasta Primavera",
    image: recipeImage3,
    category: "Italian",
    item: "three",
    description: "A classic Italian pasta dish loaded with fresh vegetables and a light, creamy sauce.",
    author: "Chef Maria",
    date: "2024-12-21",
    ingredients: [
      "12 oz pasta (penne or fettuccine)",
      "2 tbsp olive oil",
      "1 cup broccoli florets",
      "1 cup sliced carrots",
      "1/2 cup cherry tomatoes, halved",
      "1/4 cup grated Parmesan cheese",
      "1/2 cup heavy cream",
      "Salt and pepper to taste"
    ],
    instructions: [
      "Cook pasta according to package instructions; drain.",
      "Heat olive oil in a large skillet over medium heat.",
      "Sauté broccoli, carrots, and tomatoes until tender.",
      "Add heavy cream and Parmesan cheese; stir until combined.",
      "Mix in cooked pasta and season with salt and pepper.",
      "Serve hot and garnish with additional Parmesan, if desired."
    ],
    tips: [
      "Use fresh vegetables for the best flavor and texture.",
      "Don't overcook the pasta; al dente is best.",
      "Add a pinch of red pepper flakes for a slight kick."
    ],
    variations: [
      "Use zucchini or bell peppers for added variety.",
      "Replace cream with a dairy-free alternative for a vegan version.",
      "Top with grilled chicken or shrimp for extra protein."
    ]
  },
  {
    id: 4,
    title: "Avocado Toast",
    image: recipeImage4,
    category: "Breakfast",
    item: "four",
    description: "Simple and nutritious avocado toast with a variety of topping options.",
    author: "Chef Alex",
    date: "2024-12-20",
    ingredients: [
      "2 slices of whole-grain bread",
      "1 ripe avocado",
      "1/4 tsp salt",
      "1/4 tsp black pepper",
      "1 tbsp olive oil",
      "Optional toppings: poached egg, cherry tomatoes, or red pepper flakes"
    ],
    instructions: [
      "Toast bread slices until golden brown.",
      "Mash avocado in a bowl and season with salt, pepper, and olive oil.",
      "Spread mashed avocado evenly over toasted bread.",
      "Add desired toppings and serve immediately."
    ],
    tips: [
      "Use ripe avocados for the best texture and flavor.",
      "Serve immediately to avoid the avocado browning.",
      "Experiment with toppings to find your favorite combination."
    ],
    variations: [
      "Add smoked salmon for a luxurious touch.",
      "Sprinkle with everything bagel seasoning for extra flavor.",
      "Use sourdough bread for a tangy twist."
    ]
  }
];
