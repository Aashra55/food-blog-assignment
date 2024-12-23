import one from '../images/b1.jpg';
import two from '../images/b2.webp';
import three from '../images/b3.png';
import four from '../images/b4.jpg';
import five from '../images/b5.jpg';
import six from '../images/b6.webp';
import seven from '../images/b7.jpg';
import eight from '../images/b8.jpg';
import nine from '../images/b9.webp';
import ten from '../images/b10.jpg';

export type FAQ = {
    question: string;
    answer: string;
  };


export const blogs = [
    {
      id: 1,
      title: "Roasted Chicken Breast with Cherry",
      image: one,
      tagline: "A gorgeous roast for one",
      description:
        "Why save a roast for when the family comes over? This mini verisons great any day of the week. Youll love how the cherry adds a subtle sweetness that pairs perfectly with the savory flavors of the roasted chicken.",
      backstory: "This recipe was inspired by a holiday dinner I had with friends, where a simple roast was paired with unexpected flavors. Ive simplified it for those busy evenings when you still want to enjoy something special!",
      rating: 4.5,
      views: 217,
      comments: 15,
      preparationTime: "30 mins",
      difficulty: "Easy",
      nutrition: {
        calories: "350 kcal",
        protein: "30g",
        carbs: "15g",
        fats: "20g"
      },
      recipe: {
        ingredients: [
          "2 boneless, skinless chicken breasts",
          "1 cup fresh cherries, pitted",
          "1 tbsp olive oil",
          "Salt and pepper to taste",
          "1 tbsp balsamic vinegar",
          "Fresh thyme or rosemary"
        ],
        steps: [
          "Preheat the oven to 400°F (200°C).",
          "Season the chicken breasts with olive oil, salt, pepper, and fresh herbs.",
          "Heat a skillet over medium heat and sear the chicken breasts until golden brown on both sides (about 3-4 minutes per side).",
          "Transfer the chicken to the oven and roast for 15-20 minutes until cooked through.",
          "While the chicken is cooking, toss the cherries with balsamic vinegar and cook in the same skillet for about 5 minutes until softened.",
          "Remove the chicken from the oven, top with the cherry mixture, and serve!"
        ]
      },
      servingSuggestions: ["Serve with mashed potatoes", "Pair with a crisp white wine"],
      tips: [
        "Make sure to sear the chicken skin first for extra crispiness.",
        "Use fresh cherries if possible for the best flavor."
      ],
      faq: [
        { question: "Can I use frozen chicken?", answer: "Yes, but make sure its fully thawed before cooking." },
        { question: "Can I prepare this dish ahead of time?", answer: "Yes, you can prep the chicken and cherries the night before and store them in the fridge." }
      ]
    },
    {
      id: 2,
      title: "Berry Smoothie Delight",
      image: two,
      tagline: "Healthy & delicious breakfast",
      description:
        "This berry smoothie is the perfect blend of healthy and delicious for your mornings. With a mix of fresh berries, a splash of almond milk, and a dollop of honey, its a refreshing way to start your day.",
      backstory: "I created this smoothie when I was looking for a quick breakfast that would energize me without slowing me down. Its been my go-to ever since!",
      rating: 4.7,
      views: 315,
      comments: 20,
      preparationTime: "5 mins",
      difficulty: "Easy",
      nutrition: {
        calories: "250 kcal",
        protein: "5g",
        carbs: "40g",
        fats: "10g"
      },
      recipe: {
        ingredients: [
          "1 cup mixed berries (blueberries, strawberries, raspberries)",
          "1 cup almond milk (or your preferred milk)",
          "1 tbsp honey or maple syrup",
          "1/2 banana (optional, for creaminess)",
          "1 tbsp chia seeds (optional, for extra fiber)"
        ],
        steps: [
          "Add the berries, almond milk, and honey to a blender.",
          "Blend on high for 30 seconds until smooth.",
          "Taste and adjust sweetness, adding more honey if needed.",
          "If you prefer a thicker consistency, add 1/2 banana or a handful of ice cubes.",
          "Pour into a glass and enjoy immediately."
        ]
      },
      servingSuggestions: ["Top with granola", "Add chia seeds for extra fiber"],
      tips: [
        "Use frozen berries to make the smoothie colder and creamier.",
        "Feel free to swap almond milk with coconut or oat milk."
      ],
      faq: [
        { question: "Can I add protein powder?", answer: "Yes, you can add a scoop of your favorite protein powder for a more filling smoothie." },
        { question: "How long can I store this smoothie?", answer: "It's best enjoyed fresh, but you can store it in the fridge for up to 24 hours." }
      ]
    },
    {
      id: 3,
      title: "Classic Margherita Pizza",
      image: three,
      tagline: "A taste of Italy at home",
      description:
        "Enjoy a classic Margherita pizza with fresh mozzarella, tomatoes, and basil. This simple yet flavorful pizza brings the best of Italy to your home kitchen.",
      backstory: "Margherita pizza holds a special place in my heart—it's a recipe Ive been perfecting over the years, drawing inspiration from my travels through Italy.",
      rating: 5.0,
      views: 520,
      comments: 45,
      preparationTime: "1 hr 15 mins",
      difficulty: "Moderate",
      nutrition: {
        calories: "800 kcal",
        protein: "25g",
        carbs: "80g",
        fats: "35g"
      },
      recipe: {
        ingredients: [
          "1 pizza dough ball (store-bought or homemade)",
          "1/2 cup tomato sauce",
          "1 cup fresh mozzarella cheese, torn",
          "1/4 cup fresh basil leaves",
          "Olive oil for drizzling",
          "Salt and pepper to taste"
        ],
        steps: [
          "Preheat your oven to 500°F (260°C). If you have a pizza stone, place it in the oven to heat up.",
          "Roll out the pizza dough to your desired thickness and transfer it to a pizza stone or baking sheet.",
          "Spread a thin layer of tomato sauce over the dough.",
          "Top with mozzarella cheese and a few basil leaves.",
          "Bake in the oven for 10-12 minutes, until the crust is golden and the cheese is melted and bubbly.",
          "Remove from the oven, drizzle with olive oil, and sprinkle with salt and pepper.",
          "Top with additional fresh basil before serving."
        ]
      },
      servingSuggestions: ["Pair with a light salad", "Serve with a chilled glass of rosé"],
      tips: [
        "Use high-quality mozzarella for the best flavor.",
        "Make sure your oven is preheated to the highest temperature possible to get a crispy crust."
      ],
      faq: [
        { question: "Can I make this pizza gluten-free?", answer: "Yes, use a gluten-free pizza crust and adjust toppings accordingly." },
        { question: "What can I use instead of fresh basil?", answer: "You can use dried basil, but fresh basil is always preferred for this dish." }
      ]
    },
    {
      id: 4,
      title: "Avocado Toast",
      image: four,
      tagline: "Simple and nutritious",
      description:
        "Start your day with this simple, nutritious, and delicious avocado toast. Made with ripe avocados, whole-grain bread, and a sprinkle of seasoning, it's a meal that's both satisfying and packed with nutrients.",
      backstory: "This toast was inspired by my love for avocados, which I discovered while traveling to California. It's a simple yet perfect breakfast or snack!",
      rating: 4.3,
      views: 189,
      comments: 10,
      preparationTime: "5 mins",
      difficulty: "Easy",
      nutrition: {
        calories: "350 kcal",
        protein: "6g",
        carbs: "35g",
        fats: "20g"
      },
      recipe: {
        ingredients: [
          "2 slices whole-grain bread",
          "1 ripe avocado",
          "Salt and pepper to taste",
          "1/2 lemon (for juice)",
          "Optional: red pepper flakes or poached egg for topping"
        ],
        steps: [
          "Toast the bread until golden brown.",
          "While the bread is toasting, mash the avocado in a bowl with lemon juice, salt, and pepper.",
          "Spread the mashed avocado evenly over the toast.",
          "Top with a sprinkle of red pepper flakes or a poached egg for extra protein."
        ]
      },
      servingSuggestions: ["Serve with a fresh orange juice", "Add some cherry tomatoes for a fresh kick"],
      tips: [
        "Use ripe avocados for a smooth and creamy spread.",
        "For extra protein, top the toast with a poached egg or a sprinkle of chia seeds."
      ],
      faq: [
        { question: "Can I use gluten-free bread?", answer: "Yes, gluten-free bread works perfectly for this recipe." },
        { question: "Can I make this ahead of time?", answer: "Avocado toast is best served fresh, but you can prepare the mashed avocado ahead of time and store it in the fridge." }
      ]
    },
    {
      id: 5,
      title: "Grilled Salmon with Herbs",
      image: five,
      tagline: "Fresh and flavorful",
      description:
        "Grilled salmon topped with fresh herbs for a quick and healthy dinner. The smoky flavors from the grill, combined with the natural richness of the salmon, create a dish that is both delicious and nourishing.",
      backstory: "Grilled salmon is a dish I make often, especially during summer, when the weather is perfect for outdoor grilling.",
      rating: 4.8,
      views: 290,
      comments: 18,
      preparationTime: "20 mins",
      difficulty: "Easy",
      nutrition: {
        calories: "450 kcal",
        protein: "35g",
        carbs: "10g",
        fats: "30g"
      },
      recipe: {
        ingredients: [
          "2 salmon fillets",
          "1 tbsp olive oil",
          "1 tbsp lemon juice",
          "1 tbsp fresh herbs (dill, parsley, or thyme)",
          "Salt and pepper to taste"
        ],
        steps: [
          "Preheat the grill or grill pan over medium-high heat.",
          "Season the salmon fillets with olive oil, lemon juice, fresh herbs, salt, and pepper.",
          "Grill the salmon for 5-7 minutes per side until the fish flakes easily with a fork.",
          "Remove from the grill and serve with a side of your choice."
        ]
      },
      servingSuggestions: ["Pair with grilled vegetables or quinoa"],
      tips: [
        "Ensure the grill is hot before adding the salmon to prevent sticking.",
        "For extra flavor, try adding a splash of white wine to the marinade."
      ],
      faq: [
        { question: "Can I bake the salmon?", answer: "Yes, bake at 375°F (190°C) for about 12-15 minutes." },
        { question: "Can I use frozen salmon?", answer: "Yes, just make sure to fully thaw the salmon before grilling." }
      ]
    },
    {
      id: 6,
      title: "Vegan Buddha Bowl",
      image: six,
      tagline: "A vibrant, nutritious bowl",
      description:
        "A colorful, healthy vegan bowl packed with veggies, quinoa, and a tahini dressing. It's a nutrient-dense meal thats both satisfying and nourishing.",
      backstory: "I created this bowl to have something thats quick to assemble but still packed with flavor and nutrition.",
      rating: 4.6,
      views: 400,
      comments: 22,
      preparationTime: "25 mins",
      difficulty: "Easy",
      nutrition: {
        calories: "350 kcal",
        protein: "12g",
        carbs: "45g",
        fats: "15g"
      },
      recipe: {
        ingredients: [
          "1 cup cooked quinoa",
          "1/2 cup roasted sweet potato cubes",
          "1/2 cup chickpeas, roasted",
          "1 cup fresh spinach",
          "1/2 avocado, sliced",
          "2 tbsp tahini",
          "1 tbsp lemon juice",
          "1 tbsp olive oil",
          "Salt and pepper to taste"
        ],
        steps: [
          "In a bowl, arrange the quinoa, roasted sweet potato, chickpeas, spinach, and avocado.",
          "In a small bowl, mix the tahini, lemon juice, olive oil, salt, and pepper until smooth.",
          "Drizzle the tahini dressing over the bowl and enjoy!"
        ]
      },
      servingSuggestions: ["Top with sesame seeds or pumpkin seeds"],
      tips: [
        "Roast the sweet potatoes and chickpeas ahead of time to make this dish quicker to assemble.",
        "Feel free to swap quinoa for brown rice or couscous."
      ],
      faq: [
        { question: "Can I make this in advance?", answer: "Yes, you can prepare all ingredients and store them separately in the fridge for a few days." },
        { question: "Is this bowl gluten-free?", answer: "Yes, quinoa is gluten-free and perfect for this bowl." }
      ]
    },
    {
      id: 7,
      title: "Chocolate Chip Cookies",
      image: seven,
      tagline: "Classic dessert favorite",
      description:
        "These chocolate chip cookies are soft, chewy, and packed with melty chocolate chunks. Perfect for a sweet treat or to share with loved ones.",
      backstory: "This cookie recipe was passed down from my grandmother, who was known for baking the best chocolate chip cookies in town.",
      rating: 5.0,
      views: 620,
      comments: 65,
      preparationTime: "40 mins",
      difficulty: "Moderate",
      nutrition: {
        calories: "200 kcal (per cookie)",
        protein: "2g",
        carbs: "30g",
        fats: "10g"
      },
      recipe: {
        ingredients: [
          "1 cup unsalted butter, softened",
          "3/4 cup brown sugar",
          "3/4 cup white sugar",
          "2 large eggs",
          "2 tsp vanilla extract",
          "2 1/4 cups all-purpose flour",
          "1 tsp baking soda",
          "1/2 tsp salt",
          "2 cups chocolate chips"
        ],
        steps: [
          "Preheat the oven to 350°F (175°C).",
          "In a large bowl, cream together the butter, brown sugar, and white sugar until light and fluffy.",
          "Beat in the eggs and vanilla extract.",
          "In another bowl, whisk together the flour, baking soda, and salt.",
          "Gradually add the dry ingredients to the wet mixture, mixing until just combined.",
          "Fold in the chocolate chips.",
          "Drop rounded spoonfuls of dough onto a baking sheet and bake for 10-12 minutes, or until golden brown."
        ]
      },
      servingSuggestions: ["Serve with a glass of milk", "Top with a scoop of vanilla ice cream"],
      tips: [
        "Chill the cookie dough for 30 minutes before baking to get thicker cookies.",
        "Use semi-sweet chocolate chips for the perfect balance of sweetness."
      ],
      faq: [
        { question: "Can I freeze the dough?", answer: "Yes, freeze the dough in balls and bake them fresh when ready." },
        { question: "Can I use dark chocolate chips?", answer: "Yes, dark chocolate chips will work great in this recipe." }
      ]
    },
    {
      id: 8,
      title: "Pasta Carbonara",
      image: eight,
      tagline: "A creamy, comforting pasta",
      description:
        "A rich and creamy carbonara pasta with crispy pancetta, egg, and parmesan. The perfect comfort food for a cozy evening.",
      backstory: "This carbonara recipe has been a family favorite for years, with a creamy texture thats both comforting and indulgent.",
      rating: 4.9,
      views: 350,
      comments: 25,
      preparationTime: "30 mins",
      difficulty: "Moderate",
      nutrition: {
        calories: "500 kcal",
        protein: "25g",
        carbs: "50g",
        fats: "20g"
      },
      recipe: {
        ingredients: [
          "200g pasta (spaghetti or fettuccine)",
          "100g pancetta, chopped",
          "2 large eggs",
          "1/2 cup grated parmesan",
          "1/2 cup heavy cream",
          "Salt and pepper to taste"
        ],
        steps: [
          "Cook the pasta according to package instructions until al dente.",
          "In a pan, cook the pancetta until crispy, about 4-5 minutes.",
          "Whisk together eggs, parmesan, and cream in a bowl.",
          "Drain the pasta, reserving some pasta water.",
          "Combine the pasta and pancetta in a bowl, then slowly add the egg mixture, stirring quickly to create a creamy sauce.",
          "Add pasta water if needed to adjust the sauce consistency."
        ]
      },
      servingSuggestions: ["Serve with extra parmesan on top", "Pair with a green salad"],
      tips: [
        "Use freshly grated parmesan for the best flavor.",
        "Serve immediately to keep the sauce creamy."
      ],
      faq: [
        { question: "Can I use bacon instead of pancetta?", answer: "Yes, bacon is a great substitute." },
        { question: "Can I make this dish vegetarian?", answer: "Yes, simply skip the pancetta and use mushrooms for a meaty texture." }
      ]
    },
    {
      id: 9,
      title: "Lemon Garlic Shrimp",
      image: nine,
      tagline: "Zesty and flavorful",
      description:
        "These lemon garlic shrimp are quick to prepare and full of bold flavors. Perfect as a main course or an appetizer.",
      backstory: "I created this recipe when I was looking for a quick, fresh, and flavorful dinner option that could be made in under 30 minutes.",
      rating: 4.6,
      views: 320,
      comments: 18,
      preparationTime: "15 mins",
      difficulty: "Easy",
      nutrition: {
        calories: "220 kcal",
        protein: "25g",
        carbs: "10g",
        fats: "12g"
      },
      recipe: {
        ingredients: [
          "1 lb shrimp, peeled and deveined",
          "2 tbsp olive oil",
          "3 garlic cloves, minced",
          "1 lemon, juiced and zested",
          "Salt and pepper to taste",
          "Fresh parsley for garnish"
        ],
        steps: [
          "Heat the olive oil in a large skillet over medium heat.",
          "Add the garlic and cook for about 1 minute until fragrant.",
          "Add the shrimp and cook until pink, about 3-4 minutes per side.",
          "Stir in the lemon juice and zest, then season with salt and pepper.",
          "Garnish with fresh parsley before serving."
        ]
      },
      servingSuggestions: ["Serve with rice or pasta", "Pair with a crisp white wine"],
      tips: [
        "Don't overcook the shrimp; they cook quickly and will become tough.",
        "Add some red pepper flakes if you like a bit of spice."
      ],
      faq: [
        { question: "Can I use frozen shrimp?", answer: "Yes, but make sure to thaw and pat them dry before cooking." },
        { question: "How can I make this dish spicier?", answer: "Add red pepper flakes or a splash of hot sauce during cooking." }
      ]
    },
    {
    id: 10,
    title: "Vegetable Stir-Fry",
    image: ten,
    tagline: "Healthy and quick dinner",
    description:
    "A vibrant vegetable stir-fry with colorful veggies and a savory sauce. This dish is quick, nutritious, and perfect for any day of the week.",
    backstory: "I came up with this stir-fry recipe when I wanted a meal packed with fresh vegetables but without taking too much time to prepare.",
    rating: 4.4,
    views: 200,
    comments: 12,
    preparationTime: "20 mins",
    difficulty: "Easy",
    nutrition: {
    calories: "300 kcal",
    protein: "10g",
    carbs: "50g",
    fats: "15g"
    },
    recipe: {
    ingredients: [
    "1 cup broccoli florets",
    "1 bell pepper, sliced",
    "1/2 cup snap peas",
    "1 medium carrot, julienned",
    "2 tbsp soy sauce",
    "1 tbsp sesame oil",
    "1 tbsp rice vinegar",
    "1 garlic clove, minced",
    "1 tsp ginger, minced"
    ],
    steps: [
    "Heat sesame oil in a wok or large pan over medium heat.",
    "Add the garlic and ginger, cooking for 1 minute until fragrant.",
    "Add the vegetables and stir-fry for 5-7 minutes until tender-crisp.",
    "Add soy sauce and rice vinegar, and cook for another 2 minutes.",
    "Serve hot over rice or noodles."
    ]
    },
    servingSuggestions: ["Top with sesame seeds", "Serve with quinoa for extra protein"],
    tips: [
    "Use any vegetables you like or have on hand.",
    "Add protein like chicken, beef, or tofu for extra flavor.",
    "Experiment with different seasonings, such as chili flakes or curry powder."
    ],
    faq: [
    {
    question: "Can I make this recipe vegan?",
    answer: "Yes, simply replace the honey with maple syrup and use vegan-friendly soy sauce."
    },
    {
    question: "How do I store leftovers?",
    answer: "Store leftovers in an airtight container in the refrigerator for up to 3 days. Reheat before serving."
    },
    {
    question: "Can I make this recipe ahead of time?",
    answer: "Yes, you can prepare the ingredients ahead of time, but it's best to cook the stir-fry just before serving for optimal flavor and texture."
    }]
  }   
 ]
