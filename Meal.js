const LOCAL_MEALS = [
    {
      "id": 1,
      "name": "Baked Salmon with Quinoa",
      "image": "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
      "mealType": "dinner",
      "goodFor": ["IBS", "IBD"],
      "tags": ["high-fiber", "omega-3"],
      "ingredients": ["salmon", "quinoa", "asparagus", "carrots", "olive oil", "lemon"],
      "nutrition": {"calories": 450, "protein": 35, "fiber": 8, "fat": 22}
    },
    {
      "id": 2,
      "name": "Turmeric Chicken with Rice",
      "image": "https://images.pexels.com/photos/6210876/pexels-photo-6210876.jpeg",
      "mealType": "dinner",
      "goodFor": ["IBS", "IBD", "GERD"],
      "tags": ["anti-inflammatory", "high-protein"],
      "ingredients": ["chicken breast", "brown rice", "turmeric", "ginger", "garlic", "coconut oil"],
      "nutrition": {"calories": 400, "protein": 40, "fiber": 6, "fat": 12}
    },
    {
      "id": 3,
      "name": "Lentil and Vegetable Soup",
      "image": "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg",
      "mealType": "lunch",
      "goodFor": ["Constipation", "IBD"],
      "tags": ["high-fiber", "plant-based"],
      "ingredients": ["lentils", "carrots", "celery", "spinach", "vegetable broth"],
      "nutrition": {"calories": 320, "protein": 18, "fiber": 12, "fat": 5}
    },
    {
      "id": 4,
      "name": "Greek Yogurt Parfait",
      "image": "https://images.pexels.com/photos/1326947/pexels-photo-1326947.jpeg",
      "mealType": "breakfast",
      "goodFor": ["IBS", "SIBO"],
      "tags": ["probiotic", "high-protein"],
      "ingredients": ["greek yogurt", "blueberries", "almonds", "honey"],
      "nutrition": {"calories": 280, "protein": 20, "fiber": 6, "fat": 12}
    },
    {
      "id": 5,
      "name": "Quinoa Salad with Veggies",
      "image": "https://images.pexels.com/photos/1213710/pexels-photo-1213710.jpeg",
      "mealType": "lunch",
      "goodFor": ["Celiac", "IBS", "IBD"],
      "tags": ["gluten-free", "high-fiber"],
      "ingredients": ["quinoa", "zucchini", "bell peppers", "olive oil", "lemon juice"],
      "nutrition": {"calories": 350, "protein": 12, "fiber": 10, "fat": 15}
    },
    {
      "id": 6,
      "name": "Ginger-Turmeric Smoothie",
      "image": "https://cdn.pixabay.com/photo/2017/09/04/18/39/smoothie-2714316_1280.jpg",
      "mealType": "breakfast",
      "goodFor": ["GERD", "IBS", "Diarrhea"],
      "tags": ["anti-inflammatory", "easy-digest"],
      "ingredients": ["banana", "almond milk", "ginger", "turmeric", "chia seeds"],
      "nutrition": {"calories": 250, "protein": 6, "fiber": 8, "fat": 10}
    },
    {
      "id": 7,
      "name": "Chicken with Sweet Potatoes",
      "image": "https://cdn.pixabay.com/photo/2017/09/03/18/46/chicken-2711499_1280.jpg",
      "mealType": "dinner",
      "goodFor": ["IBS", "GERD", "Diarrhea"],
      "tags": ["high-protein", "easy-digest"],
      "ingredients": ["chicken breast", "sweet potatoes", "olive oil", "rosemary"],
      "nutrition": {"calories": 380, "protein": 35, "fiber": 6, "fat": 12}
    },
    {
      "id": 8,
      "name": "Oatmeal with Chia Seeds",
      "image": "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg",
      "mealType": "breakfast",
      "goodFor": ["IBS", "Diarrhea", "GERD"],
      "tags": ["high-fiber", "soothing"],
      "ingredients": ["oats", "chia seeds", "banana", "almond milk", "cinnamon"],
      "nutrition": {"calories": 300, "protein": 10, "fiber": 12, "fat": 8}
    },
    {
      "id": 9,
      "name": "Avocado Toast with Eggs",
      "image": "https://cdn.pixabay.com/photo/2017/03/23/19/57/avocado-toast-2169465_1280.jpg",
      "mealType": "breakfast",
      "goodFor": ["IBS", "Constipation"],
      "tags": ["high-fiber", "protein-rich"],
      "ingredients": ["whole grain bread", "avocado", "eggs", "salt", "pepper"],
      "nutrition": {"calories": 350, "protein": 15, "fiber": 8, "fat": 20}
    },
    {
      "id": 10,
      "name": "Vegetable Stir Fry with Tofu",
      "image": "https://images.pexels.com/photos/769969/pexels-photo-769969.jpeg",
      "mealType": "dinner",
      "goodFor": ["IBS", "IBD"],
      "tags": ["plant-based", "high-fiber"],
      "ingredients": ["tofu", "broccoli", "carrots", "bell peppers", "ginger", "tamari"],
      "nutrition": {"calories": 320, "protein": 18, "fiber": 10, "fat": 12}
    },
    {
      "id": 11,
      "name": "Poached Eggs with Spinach",
      "image": "https://cdn.pixabay.com/photo/2016/03/05/19/02/egg-1238240_1280.jpg",
      "mealType": "breakfast",
      "goodFor": ["IBS", "GERD"],
      "tags": ["high-protein", "low-FODMAP"],
      "ingredients": ["eggs", "spinach", "olive oil", "sea salt"],
      "nutrition": {"calories": 220, "protein": 14, "fiber": 2, "fat": 16}
    },
    {
      "id": 12,
      "name": "Turkey and Avocado Wrap",
      "image": "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
      "mealType": "lunch",
      "goodFor": ["IBS", "GERD"],
      "tags": ["high-protein", "quick"],
      "ingredients": ["turkey breast", "avocado", "gluten-free tortilla", "lettuce"],
      "nutrition": {"calories": 340, "protein": 25, "fiber": 8, "fat": 18}
    },
    {
      "id": 13,
      "name": "Baked Cod with Lemon",
      "image": "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg",
      "mealType": "dinner",
      "goodFor": ["IBS", "GERD"],
      "tags": ["high-protein", "low-FODMAP"],
      "ingredients": ["cod fillet", "lemon", "olive oil", "dill", "asparagus"],
      "nutrition": {"calories": 280, "protein": 32, "fiber": 3, "fat": 12}
    },
    {
      "id": 14,
      "name": "Berry Almond Smoothie",
      "image": "https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberry-2023404_1280.jpg",
      "mealType": "breakfast",
      "goodFor": ["IBS", "Constipation"],
      "tags": ["high-fiber", "antioxidants"],
      "ingredients": ["mixed berries", "almond milk", "almond butter", "flaxseeds"],
      "nutrition": {"calories": 280, "protein": 8, "fiber": 10, "fat": 14}
    },
    {
      "id": 15,
      "name": "Roasted Vegetable Medley",
      "image": "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg",
      "mealType": "dinner",
      "goodFor": ["IBS", "IBD"],
      "tags": ["plant-based", "high-fiber"],
      "ingredients": ["zucchini", "bell peppers", "eggplant", "olive oil", "herbs"],
      "nutrition": {"calories": 240, "protein": 6, "fiber": 8, "fat": 14}
    },
    {
      "id": 16,
      "name": "Scrambled Eggs with Smoked Salmon",
      "image": "https://cdn.pixabay.com/photo/2018/04/13/17/14/vegetable-skewer-3317060_1280.jpg",
      "mealType": "breakfast",
      "goodFor": ["IBS", "GERD"],
      "tags": ["high-protein", "omega-3"],
      "ingredients": ["eggs", "smoked salmon", "dill", "olive oil"],
      "nutrition": {"calories": 320, "protein": 24, "fiber": 0, "fat": 22}
    },
    {
      "id": 17,
      "name": "Quinoa and Black Bean Bowl",
      "image": "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg",
      "mealType": "lunch",
      "goodFor": ["IBS", "Constipation"],
      "tags": ["high-fiber", "plant-based"],
      "ingredients": ["quinoa", "black beans", "avocado", "lime", "cilantro"],
      "nutrition": {"calories": 380, "protein": 16, "fiber": 14, "fat": 16}
    },
    {
      "id": 18,
      "name": "Grilled Shrimp Skewers",
      "image": "https://cdn.pixabay.com/photo/2017/09/03/18/46/chicken-2711499_1280.jpg",
      "mealType": "dinner",
      "goodFor": ["IBS", "GERD"],
      "tags": ["high-protein", "low-FODMAP"],
      "ingredients": ["shrimp", "zucchini", "bell peppers", "olive oil", "lemon"],
      "nutrition": {"calories": 240, "protein": 28, "fiber": 2, "fat": 12}
    },
    {
      "id": 19,
      "name": "Chia Seed Pudding",
      "image": "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg",
      "mealType": "breakfast",
      "goodFor": ["IBS", "Constipation"],
      "tags": ["high-fiber", "omega-3"],
      "ingredients": ["chia seeds", "almond milk", "vanilla extract", "maple syrup"],
      "nutrition": {"calories": 250, "protein": 8, "fiber": 12, "fat": 12}
    },
    {
      "id": 20,
      "name": "Ratatouille",
      "image": "https://images.pexels.com/photos/410648/pexels-photo-410648.jpeg",
      "mealType": "dinner",
      "goodFor": ["IBS", "IBD"],
      "tags": ["plant-based", "low-FODMAP"],
      "ingredients": ["eggplant", "zucchini", "bell peppers", "tomatoes", "herbs"],
      "nutrition": {"calories": 220, "protein": 6, "fiber": 8, "fat": 12}
    },
    {
        "id": 21,
        "name": "Miso Glazed Salmon",
        "image": "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg",
        "description": "Rich in omega-3s with gut-friendly miso",
        "ingredients": ["salmon", "miso paste", "honey", "ginger", "sesame oil"],
        "nutrition": {"calories": 380, "protein": 32, "fiber": 2, "fat": 24},
        "tags": ["omega-3", "anti-inflammatory", "low-FODMAP"],
        "goodFor": ["IBS", "IBD"],
        "mealType": "dinner"
    },
    {
        "id": 22,
        "name": "Quinoa Breakfast Bowl",
        "image": "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg",
        "description": "High-protein, gluten-free breakfast",
        "ingredients": ["quinoa", "almond milk", "banana", "chia seeds", "cinnamon"],
        "nutrition": {"calories": 320, "protein": 12, "fiber": 8, "fat": 10},
        "tags": ["gluten-free", "high-protein", "low-FODMAP"],
        "goodFor": ["IBS", "Celiac"],
        "mealType": "breakfast"
    },
    {
        "id": 23,
        "name": "Butternut Squash Soup",
        "image": "https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_1280.jpg",
        "description": "Creamy and soothing for sensitive stomachs",
        "ingredients": ["butternut squash", "carrots", "ginger", "coconut milk", "vegetable broth"],
        "nutrition": {"calories": 280, "protein": 4, "fiber": 8, "fat": 12},
        "tags": ["easy-digest", "anti-inflammatory"],
        "goodFor": ["GERD", "IBD"],
        "mealType": "lunch"
    },
    {
        "id": 24,
        "name": "Chickpea Curry",
        "image": "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
        "description": "Plant-based protein with anti-inflammatory spices",
        "ingredients": ["chickpeas", "coconut milk", "turmeric", "cumin", "spinach"],
        "nutrition": {"calories": 350, "protein": 14, "fiber": 12, "fat": 15},
        "tags": ["plant-based", "high-fiber"],
        "goodFor": ["IBS", "Constipation"],
        "avoidFor": ["GERD"],
        "mealType": "dinner"
    },
    {
        "id": 25,
        "name": "Banana Almond Butter Toast",
        "image": "https://cdn.pixabay.com/photo/2017/03/23/19/57/avocado-toast-2169465_1280.jpg",
        "description": "Quick and easy gut-friendly breakfast",
        "ingredients": ["gluten-free bread", "almond butter", "banana", "chia seeds"],
        "nutrition": {"calories": 300, "protein": 8, "fiber": 6, "fat": 14},
        "tags": ["quick", "low-FODMAP"],
        "goodFor": ["IBS", "Celiac"],
        "mealType": "breakfast"
    },
    {
        "id": 26,
        "name": "Zucchini Noodles with Pesto",
        "image": "https://images.pexels.com/photos/6605212/pexels-photo-6605212.jpeg",
        "description": "Low-carb alternative to pasta",
        "ingredients": ["zucchini", "basil", "pine nuts", "olive oil", "nutritional yeast"],
        "nutrition": {"calories": 220, "protein": 6, "fiber": 5, "fat": 18},
        "tags": ["low-carb", "gluten-free"],
        "goodFor": ["IBS", "Celiac"],
        "mealType": "lunch"
    },
    {
        "id": 27,
        "name": "Baked Chicken with Root Vegetables",
        "image": "https://cdn.pixabay.com/photo/2017/09/03/18/46/chicken-2711499_1280.jpg",
        "description": "Simple and easy to digest",
        "ingredients": ["chicken breast", "carrots", "parsnips", "olive oil", "rosemary"],
        "nutrition": {"calories": 380, "protein": 36, "fiber": 6, "fat": 14},
        "tags": ["high-protein", "low-FODMAP"],
        "goodFor": ["IBS", "GERD"],
        "mealType": "dinner"
    },
    {
        "id": 28,
        "name": "Chia Pudding",
        "image": "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg",
        "description": "High fiber breakfast with omega-3s",
        "ingredients": ["chia seeds", "almond milk", "vanilla extract", "maple syrup"],
        "nutrition": {"calories": 250, "protein": 8, "fiber": 12, "fat": 12},
        "tags": ["high-fiber", "omega-3"],
        "goodFor": ["IBS", "Constipation"],
        "mealType": "breakfast"
    },
    {
        "id": 29,
        "name": "Turkey and Rice Stuffed Peppers",
        "image": "https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg",
        "description": "Lean protein with easy-to-digest rice",
        "ingredients": ["ground turkey", "bell peppers", "white rice", "olive oil", "herbs"],
        "nutrition": {"calories": 320, "protein": 28, "fiber": 4, "fat": 12},
        "tags": ["high-protein", "low-FODMAP"],
        "goodFor": ["IBS", "GERD"],
        "mealType": "dinner"
    },
    {
        "id": 30,
        "name": "Spinach and Feta Omelette",
        "image": "https://cdn.pixabay.com/photo/2016/03/05/19/02/egg-1238240_1280.jpg",
        "description": "Protein-packed breakfast with greens",
        "ingredients": ["eggs", "spinach", "feta cheese", "olive oil"],
        "nutrition": {"calories": 280, "protein": 20, "fiber": 2, "fat": 18},
        "tags": ["high-protein", "quick"],
        "goodFor": ["IBS"],
        "avoidFor": ["Dairy-Free"],
        "mealType": "breakfast"
    },
    {
        "id": 31,
        "name": "Kitchari (Ayurvedic Healing Dish)",
        "image": "https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_1280.jpg",
        "description": "Traditional Ayurvedic dish for gut healing",
        "ingredients": ["basmati rice", "mung dal", "ginger", "turmeric", "cumin", "ghee"],
        "nutrition": {"calories": 350, "protein": 12, "fiber": 8, "fat": 10},
        "tags": ["easy-digest", "ayurvedic", "healing"],
        "goodFor": ["IBS", "IBD", "Diarrhea"],
        "mealType": "dinner"
    },
    {
        "id": 32,
        "name": "Bone Broth with Vegetables",
        "image": "https://images.pexels.com/photos/539451/pexels-photo-539451.jpeg",
        "description": "Gut-healing collagen-rich broth",
        "ingredients": ["bone broth", "carrots", "zucchini", "ginger", "sea salt"],
        "nutrition": {"calories": 180, "protein": 15, "fiber": 3, "fat": 8},
        "tags": ["healing", "collagen", "easy-digest"],
        "goodFor": ["IBD", "Leaky Gut"],
        "mealType": "lunch"
    },
    {
        "id": 33,
        "name": "Almond Flour Pancakes",
        "image": "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg",
        "description": "Gluten-free gut-friendly pancakes",
        "ingredients": ["almond flour", "eggs", "almond milk", "baking powder", "cinnamon"],
        "nutrition": {"calories": 320, "protein": 12, "fiber": 5, "fat": 24},
        "tags": ["gluten-free", "low-FODMAP"],
        "goodFor": ["IBS", "Celiac"],
        "mealType": "breakfast"
    },
    {
        "id": 34,
        "name": "Roasted Beet and Goat Cheese Salad",
        "image": "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg",
        "description": "Prebiotic-rich beets with probiotics",
        "ingredients": ["beets", "goat cheese", "arugula", "walnuts", "balsamic vinegar"],
        "nutrition": {"calories": 280, "protein": 10, "fiber": 6, "fat": 18},
        "tags": ["prebiotic", "probiotic"],
        "goodFor": ["IBS", "Constipation"],
        "mealType": "lunch"
    },
    {
        "id": 35,
        "name": "Coconut Yogurt with Berries",
        "image": "https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberry-2023404_1280.jpg",
        "description": "Dairy-free probiotic breakfast",
        "ingredients": ["coconut yogurt", "blueberries", "raspberries", "chia seeds"],
        "nutrition": {"calories": 220, "protein": 4, "fiber": 8, "fat": 15},
        "tags": ["dairy-free", "probiotic"],
        "goodFor": ["IBS", "Dairy-Free"],
        "mealType": "breakfast"
    },
    {
        "id": 36,
        "name": "Herb Roasted Turkey Breast",
        "image": "https://cdn.pixabay.com/photo/2017/09/03/18/46/chicken-2711499_1280.jpg",
        "description": "Lean protein with gut-friendly herbs",
        "ingredients": ["turkey breast", "rosemary", "thyme", "olive oil", "lemon"],
        "nutrition": {"calories": 280, "protein": 42, "fiber": 1, "fat": 10},
        "tags": ["high-protein", "low-FODMAP"],
        "goodFor": ["IBS", "GERD"],
        "mealType": "dinner"
    },
    {
        "id": 37,
        "name": "Mashed Cauliflower",
        "image": "https://images.pexels.com/photos/6605212/pexels-photo-6605212.jpeg",
        "description": "Low-carb alternative to mashed potatoes",
        "ingredients": ["cauliflower", "ghee", "garlic-infused oil", "sea salt"],
        "nutrition": {"calories": 120, "protein": 4, "fiber": 5, "fat": 8},
        "tags": ["low-carb", "low-FODMAP"],
        "goodFor": ["IBS", "GERD"],
        "mealType": "side"
    },
    {
        "id": 38,
        "name": "Pumpkin Seed Pesto Pasta",
        "image": "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
        "description": "Nutrient-dense plant-based meal",
        "ingredients": ["brown rice pasta", "pumpkin seeds", "basil", "olive oil", "nutritional yeast"],
        "nutrition": {"calories": 380, "protein": 14, "fiber": 8, "fat": 18},
        "tags": ["plant-based", "magnesium-rich"],
        "goodFor": ["IBS", "Constipation"],
        "mealType": "dinner"
    },
    {
        "id": 39,
        "name": "Apple Cinnamon Chia Pudding",
        "image": "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg",
        "description": "High fiber breakfast with prebiotics",
        "ingredients": ["chia seeds", "almond milk", "apple", "cinnamon", "walnuts"],
        "nutrition": {"calories": 300, "protein": 8, "fiber": 14, "fat": 16},
        "tags": ["high-fiber", "prebiotic"],
        "goodFor": ["IBS", "Constipation"],
        "mealType": "breakfast"
    },
    {
        "id": 40,
        "name": "Grilled Shrimp Skewers",
        "image": "https://cdn.pixabay.com/photo/2018/04/13/17/14/vegetable-skewer-3317060_1280.jpg",
        "description": "Easy to digest lean protein",
        "ingredients": ["shrimp", "zucchini", "bell peppers", "olive oil", "lemon"],
        "nutrition": {"calories": 240, "protein": 28, "fiber": 2, "fat": 12},
        "tags": ["high-protein", "low-FODMAP"],
        "goodFor": ["IBS", "GERD"],
        "mealType": "dinner"
    },
    {
        "id": 41,
        "name": "Carrot Ginger Soup",
        "image": "https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_1280.jpg",
        "description": "Soothing anti-inflammatory soup",
        "ingredients": ["carrots", "ginger", "coconut milk", "vegetable broth", "turmeric"],
        "nutrition": {"calories": 220, "protein": 3, "fiber": 6, "fat": 14},
        "tags": ["anti-inflammatory", "easy-digest"],
        "goodFor": ["IBD", "GERD"],
        "mealType": "lunch"
    },
    {
        "id": 42,
        "name": "Buckwheat Porridge",
        "image": "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg",
        "description": "Gluten-free high fiber breakfast",
        "ingredients": ["buckwheat groats", "almond milk", "cinnamon", "maple syrup"],
        "nutrition": {"calories": 280, "protein": 8, "fiber": 6, "fat": 8},
        "tags": ["gluten-free", "high-fiber"],
        "goodFor": ["IBS", "Celiac"],
        "mealType": "breakfast"
    },
    {
        "id": 43,
        "name": "Baked Cod with Lemon",
        "image": "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg",
        "description": "Easy to digest lean protein",
        "ingredients": ["cod fillet", "lemon", "olive oil", "dill", "asparagus"],
        "nutrition": {"calories": 280, "protein": 32, "fiber": 3, "fat": 12},
        "tags": ["high-protein", "low-FODMAP"],
        "goodFor": ["IBS", "GERD"],
        "mealType": "dinner"
    },
    {
        "id": 44,
        "name": "Collard Greens Wrap",
        "image": "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg",
        "description": "Gut-friendly alternative to tortillas",
        "ingredients": ["collard greens", "hummus", "cucumber", "avocado", "sprouts"],
        "nutrition": {"calories": 240, "protein": 8, "fiber": 10, "fat": 16},
        "tags": ["gluten-free", "high-fiber"],
        "goodFor": ["IBS", "Celiac"],
        "mealType": "lunch"
    },
    {
        "id": 45,
        "name": "Pumpkin Smoothie",
        "image": "https://cdn.pixabay.com/photo/2017/09/04/18/39/smoothie-2714316_1280.jpg",
        "description": "Prebiotic-rich fall smoothie",
        "ingredients": ["pumpkin puree", "almond milk", "banana", "cinnamon", "ginger"],
        "nutrition": {"calories": 220, "protein": 4, "fiber": 8, "fat": 6},
        "tags": ["prebiotic", "seasonal"],
        "goodFor": ["IBS", "Constipation"],
        "mealType": "breakfast"
    },
    {
        "id": 46,
        "name": "Mackerel Salad",
        "image": "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg",
        "description": "Omega-3 rich lunch option",
        "ingredients": ["mackerel", "mixed greens", "cucumber", "olive oil", "lemon juice"],
        "nutrition": {"calories": 320, "protein": 22, "fiber": 4, "fat": 22},
        "tags": ["omega-3", "high-protein"],
        "goodFor": ["IBS", "IBD"],
        "mealType": "lunch"
    },
    {
        "id": 47,
        "name": "Rice Congee",
        "image": "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg",
        "description": "Traditional Asian healing porridge",
        "ingredients": ["white rice", "bone broth", "ginger", "scallions", "sesame oil"],
        "nutrition": {"calories": 280, "protein": 8, "fiber": 1, "fat": 6},
        "tags": ["easy-digest", "healing"],
        "goodFor": ["IBD", "Diarrhea"],
        "mealType": "breakfast"
    },
    {
        "id": 48,
        "name": "Roasted Brussels Sprouts",
        "image": "https://images.pexels.com/photos/1211887/pexels-photo-1211887.jpeg",
        "description": "Prebiotic-rich side dish",
        "ingredients": ["brussels sprouts", "olive oil", "sea salt", "garlic-infused oil"],
        "nutrition": {"calories": 120, "protein": 4, "fiber": 6, "fat": 8},
        "tags": ["prebiotic", "low-FODMAP"],
        "goodFor": ["IBS", "Constipation"],
        "mealType": "side"
    },
    {
        "id": 49,
        "name": "Herbal Tea Infusion",
        "image": "https://cdn.pixabay.com/photo/2016/11/29/08/32/blur-1868478_1280.jpg",
        "description": "Soothing digestive tea blend",
        "ingredients": ["ginger tea", "peppermint tea", "fennel seeds", "chamomile"],
        "nutrition": {"calories": 5, "protein": 0, "fiber": 0, "fat": 0},
        "tags": ["soothing", "digestive"],
        "goodFor": ["IBS", "GERD"],
        "mealType": "beverage"
    },
    {
        "id": 50,
        "name": "Sardines on Toast",
        "image": "https://cdn.pixabay.com/photo/2017/03/23/19/57/avocado-toast-2169465_1280.jpg",
        "description": "Omega-3 rich quick meal",
        "ingredients": ["sardines", "whole grain toast", "avocado", "lemon juice"],
        "nutrition": {"calories": 320, "protein": 20, "fiber": 8, "fat": 18},
        "tags": ["omega-3", "quick"],
        "goodFor": ["IBS", "IBD"],
        "mealType": "lunch"
    },
    {
        "id": 51,
        "name": "Kimchi Fried Rice",
        "image": "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
        "description": "Probiotic-rich fermented dish",
        "ingredients": ["brown rice", "kimchi", "eggs", "sesame oil", "scallions"],
        "nutrition": {"calories": 380, "protein": 14, "fiber": 6, "fat": 14},
        "tags": ["probiotic", "fermented"],
        "goodFor": ["IBS", "Constipation"],
        "mealType": "dinner"
    },
    {
        "id": 52,
        "name": "Golden Milk Latte",
        "image": "https://cdn.pixabay.com/photo/2016/11/29/08/32/blur-1868478_1280.jpg",
        "description": "Anti-inflammatory turmeric drink",
        "ingredients": ["almond milk", "turmeric", "ginger", "cinnamon", "black pepper"],
        "nutrition": {"calories": 120, "protein": 2, "fiber": 2, "fat": 8},
        "tags": ["anti-inflammatory", "healing"],
        "goodFor": ["IBD", "IBS"],
        "mealType": "beverage"
    },
    {
        "id": 53,
        "name": "Gut-Healing Bone Broth",
        "image": "https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_1280.jpg",
        "mealType": "beverage",
        "goodFor": ["Leaky Gut", "IBD", "GERD"],
        "tags": ["collagen", "easy-digest", "quick"],
        "ingredients": ["bone broth", "turmeric", "ginger", "sea salt"],
        "nutrition": {"calories": 50, "protein": 10, "fiber": 0, "fat": 2}
    },
    {
        "id": 54,
        "name": "Low-FODMAP Pumpkin Soup",
        "image": "https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_1280.jpg",
        "mealType": "lunch",
        "goodFor": ["IBS", "GERD"],
        "tags": ["low-acid", "low-FODMAP"],
        "ingredients": ["pumpkin", "ginger", "coconut milk", "cumin"],
        "nutrition": {"calories": 180, "protein": 3, "fiber": 5, "fat": 10}
    },
    {
        "id": 55,
        "name": "Almond Butter Energy Balls",
        "image": "https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberry-2023404_1280.jpg",
        "mealType": "snack",
        "goodFor": ["IBS", "SIBO"],
        "tags": ["low-FODMAP", "quick"],
        "ingredients": ["almond butter", "oat flour", "chia seeds", "maple syrup"],
        "nutrition": {"calories": 200, "protein": 6, "fiber": 4, "fat": 12}
    },
    {
        "id": 56,
        "name": "Vegan Lentil Loaf",
        "image": "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
        "mealType": "dinner",
        "goodFor": ["IBD", "Constipation"],
        "tags": ["plant-based", "high-fiber"],
        "ingredients": ["lentils", "quinoa", "carrots", "flaxseed", "tamari"],
        "nutrition": {"calories": 320, "protein": 18, "fiber": 12, "fat": 8}
    },
    {
        "id": 57,
        "name": "Chamomile-Peppermint Tea",
        "image": "https://cdn.pixabay.com/photo/2016/11/29/08/32/blur-1868478_1280.jpg",
        "mealType": "beverage",
        "goodFor": ["IBS", "GERD"],
        "tags": ["soothing", "caffeine-free"],
        "ingredients": ["chamomile", "peppermint", "fennel seeds"],
        "nutrition": {"calories": 5, "protein": 0, "fiber": 0, "fat": 0}
    },
    {
        "id": 58,
        "name": "Coconut Chia Pudding",
        "image": "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg",
        "mealType": "breakfast",
        "goodFor": ["IBS", "Dairy-Free"],
        "tags": ["probiotic", "high-fiber"],
        "ingredients": ["chia seeds", "coconut milk", "vanilla", "blueberries"],
        "nutrition": {"calories": 250, "protein": 6, "fiber": 10, "fat": 15}
    },
    {
        "id": 59,
        "name": "Low-FODMAP Turkey Meatballs",
        "image": "https://cdn.pixabay.com/photo/2017/09/03/18/46/chicken-2711499_1280.jpg",
        "mealType": "dinner",
        "goodFor": ["IBS", "GERD"],
        "tags": ["high-protein", "meal-prep"],
        "ingredients": ["ground turkey", "rice breadcrumbs", "egg", "parsley"],
        "nutrition": {"calories": 280, "protein": 30, "fiber": 2, "fat": 12}
    },
    {
        "id": 60,
        "name": "Magnesium-Rich Spinach Smoothie",
        "image": "https://cdn.pixabay.com/photo/2017/09/04/18/39/smoothie-2714316_1280.jpg",
        "mealType": "breakfast",
        "goodFor": ["Constipation", "IBS"],
        "tags": ["high-magnesium", "alkaline"],
        "ingredients": ["spinach", "almond milk", "banana", "pumpkin seeds"],
        "nutrition": {"calories": 220, "protein": 8, "fiber": 6, "fat": 10}
    },
    {
        "id": 61,
        "name": "Dairy-Free Chocolate Avocado Mousse",
        "image": "https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberry-2023404_1280.jpg",
        "mealType": "dessert",
        "goodFor": ["IBS", "Dairy-Free"],
        "tags": ["probiotic", "low-sugar"],
        "ingredients": ["avocado", "cacao powder", "coconut yogurt", "maple syrup"],
        "nutrition": {"calories": 200, "protein": 4, "fiber": 8, "fat": 15}
    },
    {
        "id": 62,
        "name": "Low-Acid Chicken and Rice Soup",
        "image": "https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_1280.jpg",
        "mealType": "lunch",
        "goodFor": ["GERD", "IBS"],
        "tags": ["easy-digest", "low-FODMAP"],
        "ingredients": ["chicken breast", "white rice", "carrots", "zucchini"],
        "nutrition": {"calories": 300, "protein": 25, "fiber": 3, "fat": 8}
    },
    {
        "id": 63,
        "name": "Quinoa-Stuffed Bell Peppers",
        "image": "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg",
        "mealType": "dinner",
        "goodFor": ["IBS", "Celiac"],
        "tags": ["gluten-free", "meal-prep"],
        "ingredients": ["quinoa", "bell peppers", "spinach", "olive oil"],
        "nutrition": {"calories": 280, "protein": 10, "fiber": 8, "fat": 12}
    },
    {
        "id": 64,
        "name": "Ginger-Turmeric Shot",
        "image": "https://cdn.pixabay.com/photo/2016/11/29/08/32/blur-1868478_1280.jpg",
        "mealType": "beverage",
        "goodFor": ["IBD", "IBS"],
        "tags": ["anti-inflammatory", "quick"],
        "ingredients": ["ginger", "turmeric", "lemon", "black pepper"],
        "nutrition": {"calories": 20, "protein": 0, "fiber": 1, "fat": 0}
    },
    {
        "id": 65,
        "name": "Baked Apples with Cinnamon",
        "image": "https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberry-2023404_1280.jpg",
        "mealType": "dessert",
        "goodFor": ["Constipation", "GERD"],
        "tags": ["low-acid", "prebiotic"],
        "ingredients": ["apples", "cinnamon", "walnuts", "coconut oil"],
        "nutrition": {"calories": 180, "protein": 2, "fiber": 6, "fat": 8}
    },
    {
        "id": 66,
        "name": "Low-FODMAP Tuna Salad",
        "image": "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg",
        "mealType": "lunch",
        "goodFor": ["IBS", "GERD"],
        "tags": ["high-protein", "quick"],
        "ingredients": ["tuna", "cucumber", "olive oil", "lemon juice"],
        "nutrition": {"calories": 250, "protein": 28, "fiber": 2, "fat": 14}
    },
    {
        "id": 67,
        "name": "Coconut Flour Pancakes",
        "image": "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg",
        "mealType": "breakfast",
        "goodFor": ["IBS", "Celiac"],
        "tags": ["gluten-free", "low-FODMAP"],
        "ingredients": ["coconut flour", "eggs", "almond milk", "baking soda"],
        "nutrition": {"calories": 240, "protein": 10, "fiber": 6, "fat": 15}
    },
    {
        "id": 68,
        "name": "Miso-Glazed Eggplant",
        "image": "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
        "mealType": "dinner",
        "goodFor": ["IBD", "IBS"],
        "tags": ["plant-based", "umami"],
        "ingredients": ["eggplant", "miso paste", "sesame oil", "scallions"],
        "nutrition": {"calories": 220, "protein": 6, "fiber": 8, "fat": 12}
    },
    {
        "id": 69,
        "name": "Peppermint-Licorice Tea",
        "image": "https://cdn.pixabay.com/photo/2016/11/29/08/32/blur-1868478_1280.jpg",
        "mealType": "beverage",
        "goodFor": ["IBS", "GERD"],
        "tags": ["soothing", "caffeine-free"],
        "ingredients": ["peppermint", "licorice root", "fennel"],
        "nutrition": {"calories": 5, "protein": 0, "fiber": 0, "fat": 0}
    },
    {
        "id": 70,
        "name": "Zucchini Fritters",
        "image": "https://images.pexels.com/photos/6605212/pexels-photo-6605212.jpeg",
        "mealType": "snack",
        "goodFor": ["IBS", "GERD"],
        "tags": ["low-carb", "gluten-free"],
        "ingredients": ["zucchini", "egg", "almond flour", "parsley"],
        "nutrition": {"calories": 150, "protein": 8, "fiber": 3, "fat": 10}
    },
    {
        "id": 71,
        "name": "Pumpkin Seed Crackers",
        "image": "https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberry-2023404_1280.jpg",
        "mealType": "snack",
        "goodFor": ["IBS", "Constipation"],
        "tags": ["high-magnesium", "low-FODMAP"],
        "ingredients": ["pumpkin seeds", "flaxseeds", "water", "sea salt"],
        "nutrition": {"calories": 180, "protein": 8, "fiber": 5, "fat": 14}
    },
    {
        "id": 72,
        "name": "Anti-Inflammatory Smoothie Bowl",
        "image": "https://cdn.pixabay.com/photo/2017/09/04/18/39/smoothie-2714316_1280.jpg",
        "mealType": "breakfast",
        "goodFor": ["IBD", "IBS"],
        "tags": ["omega-3", "alkaline"],
        "ingredients": ["blueberries", "spinach", "flaxseeds", "almond butter"],
        "nutrition": {"calories": 300, "protein": 10, "fiber": 10, "fat": 18}
    },
    {
        "id": 73,
        "name": "Sweet Potato Breakfast Hash",
        "image": "https://images.pexels.com/photos/3763847/pexels-photo-3763847.jpeg",
        "mealType": "breakfast",
        "goodFor": ["IBS", "GERD"],
        "tags": ["high-fiber", "anti-inflammatory"],
        "ingredients": ["sweet potato", "spinach", "turkey sausage", "olive oil", "paprika"],
        "nutrition": {"calories": 320, "protein": 18, "fiber": 8, "fat": 14}
    },
    {
        "id": 74,
        "name": "Pumpkin Spice Overnight Oats",
        "image": "https://images.pexels.com/photos/2280545/pexels-photo-2280545.jpeg",
        "mealType": "breakfast",
        "goodFor": ["IBS", "Constipation"],
        "tags": ["meal-prep", "high-fiber"],
        "ingredients": ["oats", "pumpkin puree", "chia seeds", "almond milk", "pumpkin spice"],
        "nutrition": {"calories": 280, "protein": 10, "fiber": 12, "fat": 8}
    },
    {
        "id": 75,
        "name": "Savory Chickpea Flour Pancakes",
        "image": "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg",
        "mealType": "breakfast",
        "goodFor": ["Celiac", "IBS"],
        "tags": ["gluten-free", "high-protein"],
        "ingredients": ["chickpea flour", "zucchini", "turmeric", "olive oil"],
        "nutrition": {"calories": 240, "protein": 14, "fiber": 6, "fat": 10}
    },
    {
        "id": 76,
        "name": "Alkaline Green Smoothie",
        "image": "https://cdn.pixabay.com/photo/2017/09/04/18/39/smoothie-2714316_1280.jpg",
        "mealType": "breakfast",
        "goodFor": ["GERD", "IBS"],
        "tags": ["alkaline", "low-acid"],
        "ingredients": ["spinach", "cucumber", "almond milk", "avocado", "spirulina"],
        "nutrition": {"calories": 220, "protein": 8, "fiber": 8, "fat": 12}
    },
    {
        "id": 77,
        "name": "Baked Pears with Walnuts",
        "image": "https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberry-2023404_1280.jpg",
        "mealType": "breakfast",
        "goodFor": ["GERD", "Constipation"],
        "tags": ["low-acid", "prebiotic"],
        "ingredients": ["pears", "walnuts", "cinnamon", "maple syrup"],
        "nutrition": {"calories": 240, "protein": 4, "fiber": 8, "fat": 12}
    },
    {
        "id": 78,
        "name": "5-Minute Avocado Tuna Salad",
        "image": "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg",
        "mealType": "lunch",
        "goodFor": ["IBS", "GERD"],
        "tags": ["quick", "high-protein"],
        "ingredients": ["canned tuna", "avocado", "cucumber", "lemon juice"],
        "nutrition": {"calories": 320, "protein": 28, "fiber": 6, "fat": 18}
    },
    {
        "id": 79,
        "name": "Instant Pot Chicken Quinoa",
        "image": "https://cdn.pixabay.com/photo/2017/09/03/18/46/chicken-2711499_1280.jpg",
        "mealType": "dinner",
        "goodFor": ["IBS", "GERD"],
        "tags": ["quick", "one-pot"],
        "ingredients": ["chicken breast", "quinoa", "carrots", "low-FODMAP broth"],
        "nutrition": {"calories": 380, "protein": 36, "fiber": 6, "fat": 10}
    },
    {
        "id": 80,
        "name": "Vegan Jackfruit Tacos",
        "image": "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg",
        "mealType": "dinner",
        "goodFor": ["IBD", "IBS"],
        "tags": ["plant-based", "high-fiber"],
        "ingredients": ["young jackfruit", "corn tortillas", "avocado", "cabbage slaw"],
        "nutrition": {"calories": 340, "protein": 8, "fiber": 14, "fat": 12}
    },
    {
        "id": 81,
        "name": "Mushroom Walnut Bolognese",
        "image": "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
        "mealType": "dinner",
        "goodFor": ["IBS", "GERD"],
        "tags": ["plant-based", "umami"],
        "ingredients": ["mushrooms", "walnuts", "tomato sauce", "brown rice pasta"],
        "nutrition": {"calories": 380, "protein": 14, "fiber": 10, "fat": 18}
    },
    {
        "id": 82,
        "name": "Matcha Chia Pudding",
        "image": "https://images.pexels.com/photos/3026808/pexels-photo-3026808.jpeg",
        "mealType": "dessert",
        "goodFor": ["IBS", "GERD"],
        "tags": ["antioxidants", "low-sugar"],
        "ingredients": ["chia seeds", "almond milk", "matcha powder", "vanilla"],
        "nutrition": {"calories": 220, "protein": 8, "fiber": 10, "fat": 12}
    },
    {
        "id": 83,
        "name": "Almond Flour Banana Bread",
        "image": "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg",
        "mealType": "snack",
        "goodFor": ["Celiac", "IBS"],
        "tags": ["gluten-free", "low-FODMAP"],
        "ingredients": ["almond flour", "bananas", "eggs", "cinnamon"],
        "nutrition": {"calories": 180, "protein": 6, "fiber": 4, "fat": 12}
    },
    {
        "id": 84,
        "name": "Japanese Okonomiyaki",
        "image": "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
        "mealType": "dinner",
        "goodFor": ["IBS", "GERD"],
        "tags": ["gluten-free", "fermented"],
        "ingredients": ["cabbage", "eggs", "rice flour", "okonomiyaki sauce"],
        "nutrition": {"calories": 320, "protein": 12, "fiber": 8, "fat": 14}
    },
    {
        "id": 85,
        "name": "Indian Moong Dal",
        "image": "https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_1280.jpg",
        "mealType": "dinner",
        "goodFor": ["IBD", "IBS"],
        "tags": ["ayurvedic", "easy-digest"],
        "ingredients": ["mung beans", "turmeric", "cumin", "ginger"],
        "nutrition": {"calories": 280, "protein": 16, "fiber": 10, "fat": 8}
    },
    {
        "id": 86,
        "name": "Turmeric Chicken Bone Broth",
        "image": "https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_1280.jpg",
        "mealType": "beverage",
        "goodFor": ["Leaky Gut", "IBD"],
        "tags": ["healing", "anti-inflammatory"],
        "ingredients": ["chicken bone broth", "turmeric", "black pepper", "ginger"],
        "nutrition": {"calories": 60, "protein": 12, "fiber": 0, "fat": 2}
    },
    {
        "id": 87,
        "name": "Mediterranean Baked Sea Bass",
        "image": "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg",
        "mealType": "dinner",
        "goodFor": ["IBS", "GERD"],
        "tags": ["omega-3", "low-FODMAP"],
        "ingredients": ["sea bass", "olives", "cherry tomatoes", "olive oil"],
        "nutrition": {"calories": 290, "protein": 34, "fiber": 2, "fat": 16}
    },
    {
        "id": 88,
        "name": "Homemade Coconut Yogurt",
        "image": "https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberry-2023404_1280.jpg",
        "mealType": "breakfast",
        "goodFor": ["IBS", "SIBO"],
        "tags": ["probiotic", "dairy-free"],
        "ingredients": ["coconut milk", "probiotic capsules"],
        "nutrition": {"calories": 180, "protein": 2, "fiber": 2, "fat": 16}
    },
    {
        "id": 89,
        "name": "Rice Cake with Peanut Butter",
        "image": "https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberry-2023404_1280.jpg",
        "mealType": "snack",
        "goodFor": ["IBS", "GERD"],
        "tags": ["low-FODMAP", "quick"],
        "ingredients": ["rice cakes", "peanut butter", "cinnamon"],
        "nutrition": {"calories": 200, "protein": 6, "fiber": 2, "fat": 10}
    },
    {
        "id": 90,
        "name": "Lemon Ginger Chicken Stir-Fry",
        "image": "https://cdn.pixabay.com/photo/2017/09/03/18/46/chicken-2711499_1280.jpg",
        "mealType": "dinner",
        "goodFor": ["GERD", "IBS"],
        "tags": ["quick", "low-acid"],
        "ingredients": ["chicken breast", "zucchini", "bell peppers", "ginger", "lemon"],
        "nutrition": {"calories": 320, "protein": 30, "fiber": 5, "fat": 12}
    },
    {
        "id": 91,
        "name": "Buckwheat Pancakes",
        "image": "https://cdn.pixabay.com/photo/2017/05/07/08/56/pancakes-2291908_1280.jpg",
        "mealType": "breakfast",
        "goodFor": ["Celiac", "IBS"],
        "tags": ["gluten-free", "high-fiber"],
        "ingredients": ["buckwheat flour", "almond milk", "eggs", "cinnamon"],
        "nutrition": {"calories": 240, "protein": 10, "fiber": 6, "fat": 8}
    },
    {
        "id": 92,
        "name": "Cucumber Avocado Rolls",
        "image": "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg",
        "mealType": "snack",
        "goodFor": ["GERD", "IBS"],
        "tags": ["low-FODMAP", "quick"],
        "ingredients": ["cucumber", "avocado", "smoked salmon", "cream cheese"],
        "nutrition": {"calories": 180, "protein": 8, "fiber": 4, "fat": 12}
    },
    {
        "id": 93,
        "name": "Miso Soup with Wakame",
        "image": "https://cdn.pixabay.com/photo/2017/06/01/18/46/cook-2364221_1280.jpg",
        "mealType": "lunch",
        "goodFor": ["IBD", "IBS"],
        "tags": ["probiotic", "low-FODMAP"],
        "ingredients": ["miso paste", "wakame seaweed", "tofu", "scallions"],
        "nutrition": {"calories": 120, "protein": 8, "fiber": 3, "fat": 5}
    },
    {
        "id": 94,
        "name": "Baked Apples with Cinnamon",
        "image": "https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberry-2023404_1280.jpg",
        "mealType": "dessert",
        "goodFor": ["GERD", "Constipation"],
        "tags": ["low-acid", "prebiotic"],
        "ingredients": ["apples", "cinnamon", "walnuts", "coconut oil"],
        "nutrition": {"calories": 180, "protein": 2, "fiber": 6, "fat": 8}
    },
    {
        "id": 95,
        "name": "Turmeric Latte",
        "image": "https://cdn.pixabay.com/photo/2016/11/29/08/32/blur-1868478_1280.jpg",
        "mealType": "beverage",
        "goodFor": ["IBD", "IBS"],
        "tags": ["anti-inflammatory", "healing"],
        "ingredients": ["almond milk", "turmeric", "cinnamon", "black pepper"],
        "nutrition": {"calories": 100, "protein": 2, "fiber": 1, "fat": 6}
    },
    {
        "id": 96,
        "name": "Zucchini Pizza Boats",
        "image": "https://images.pexels.com/photos/6605212/pexels-photo-6605212.jpeg",
        "mealType": "dinner",
        "goodFor": ["IBS", "GERD"],
        "tags": ["low-carb", "gluten-free"],
        "ingredients": ["zucchini", "tomato sauce", "mozzarella", "basil"],
        "nutrition": {"calories": 220, "protein": 14, "fiber": 4, "fat": 12}
    },
    {
        "id": 97,
        "name": "Pumpkin Seed Granola",
        "image": "https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberry-2023404_1280.jpg",
        "mealType": "breakfast",
        "goodFor": ["IBS", "Constipation"],
        "tags": ["high-magnesium", "low-FODMAP"],
        "ingredients": ["pumpkin seeds", "oats", "coconut oil", "maple syrup"],
        "nutrition": {"calories": 280, "protein": 10, "fiber": 6, "fat": 16}
    },
    {
        "id": 98,
        "name": "Cabbage Steaks",
        "image": "https://images.pexels.com/photos/1437267/pexels-photo-1437267.jpeg",
        "mealType": "dinner",
        "goodFor": ["IBD", "IBS"],
        "tags": ["low-FODMAP", "plant-based"],
        "ingredients": ["cabbage", "olive oil", "garlic-infused oil", "paprika"],
        "nutrition": {"calories": 150, "protein": 4, "fiber": 6, "fat": 10}
    },
    {
        "id": 99,
        "name": "Chicken Liver Pâté",
        "image": "https://images.pexels.com/photos/46239/salmon-dish-food-meal-46239.jpeg",
        "mealType": "snack",
        "goodFor": ["IBS", "GERD"],
        "tags": ["high-iron", "low-FODMAP"],
        "ingredients": ["chicken livers", "ghee", "thyme", "cognac"],
        "nutrition": {"calories": 220, "protein": 16, "fiber": 0, "fat": 16}
    },
    {
        "id": 100,
        "name": "Seaweed Salad",
        "image": "https://images.pexels.com/photos/2097090/pexels-photo-2097090.jpeg",
        "mealType": "lunch",
        "goodFor": ["IBS", "IBD"],
        "tags": ["mineral-rich", "low-calorie"],
        "ingredients": ["wakame", "sesame oil", "rice vinegar", "sesame seeds"],
        "nutrition": {"calories": 120, "protein": 4, "fiber": 4, "fat": 8}
    },
    {
        "id": 101,
        "name": "Beetroot Hummus",
        "image": "https://cdn.pixabay.com/photo/2017/09/04/18/39/smoothie-2714316_1280.jpg",
        "mealType": "snack",
        "goodFor": ["IBS", "Constipation"],
        "tags": ["prebiotic", "plant-based"],
        "ingredients": ["beets", "chickpeas", "tahini", "lemon juice"],
        "nutrition": {"calories": 180, "protein": 6, "fiber": 6, "fat": 10}
    },
    {
        "id": 102,
        "name": "Herbal Digestive Tea",
        "image": "https://cdn.pixabay.com/photo/2016/11/29/08/32/blur-1868478_1280.jpg",
        "mealType": "beverage",
        "goodFor": ["IBS", "GERD"],
        "tags": ["soothing", "caffeine-free"],
        "ingredients": ["peppermint", "chamomile", "ginger", "fennel"],
        "nutrition": {"calories": 5, "protein": 0, "fiber": 0, "fat": 0}
    },
    {
        "id": 103,
        "name": "Pumpkin Seed Butter",
        "image": "https://cdn.pixabay.com/photo/2017/01/31/09/30/raspberry-2023404_1280.jpg",
        "mealType": "snack",
        "goodFor": ["IBS", "GERD"],
        "tags": ["high-magnesium", "low-FODMAP"],
        "ingredients": ["pumpkin seeds", "coconut oil", "cinnamon"],
        "nutrition": {"calories": 200, "protein": 8, "fiber": 4, "fat": 16}
    }
];


const MEAL_TYPE_RULES = {
    breakfast: {
        keywords: ['breakfast', 'pancake', 'waffle', 'oatmeal', 'smoothie', 'yogurt', 'porridge', 'granola', 'toast', 'egg', 'omelet', 'bagel', 'muffin'],
        timeRange: { start: 5, end: 11 }, // 5am-11am
        priorityIngredients: ['eggs', 'yogurt', 'oats', 'berries']
    },
    lunch: {
        keywords: ['lunch', 'salad', 'sandwich', 'soup', 'wrap', 'bowl', 'quinoa', 'rice', 'chicken', 'turkey', 'tuna'],
        timeRange: { start: 11, end: 15 }, // 11am-3pm
        priorityIngredients: ['leafy greens', 'lean protein', 'whole grains']
    },
    dinner: {
        keywords: ['dinner', 'steak', 'roast', 'curry', 'pasta', 'stir fry', 'casserole', 'meat', 'fish', 'salmon', 'shrimp'],
        timeRange: { start: 17, end: 22 }, // 5pm-10pm
        priorityIngredients: ['vegetables', 'protein', 'healthy fats']
    },
    snack: {
        keywords: ['snack', 'trail mix', 'nuts', 'bar', 'fruit', 'vegetable', 'hummus', 'dip', 'crackers'],
        timeRange: { start: 10, end: 20 }, // 10am-8pm
        priorityIngredients: ['nuts', 'fruits', 'vegetables']
    },
    beverage: {
        keywords: ['tea', 'coffee', 'latte', 'smoothie', 'juice', 'shake', 'water', 'tonic', 'elixir'],
        timeRange: { start: 5, end: 22 }, // 5am-10pm
        priorityIngredients: ['water', 'tea', 'juice']
    }
};

// Disease-specific ingredient blacklists
const CONDITION_RULES = {
    "IBS": { avoid: ["onion", "garlic", "dairy", "wheat", "beans", "cabbage"] },
};

// User's meal plan data
let userMealPlan = {};
let currentWeekStart = new Date();
currentWeekStart.setDate(currentWeekStart.getDate() - currentWeekStart.getDay()); // Start on Sunday

// Initialize on DOM load
document.addEventListener('DOMContentLoaded', function() {
    updateCalendar();
    loadMealPlan();
});

function getIngredients(meal) {
    return meal.ingredients || [];
}

function guessMealType(mealName) {
    const lowerName = mealName.toLowerCase();
    for (const [mealType, rules] of Object.entries(MEAL_TYPE_RULES)) {
        if (rules.keywords.some(keyword => lowerName.includes(keyword))) {
            return mealType;
        }
    }
    return 'dinner'; // default
}

function estimateNutrition(meal) {
    let calories = 0;
    let protein = 0;
    let fiber = 0;
    let fat = 0;
    
    const ingredients = getIngredients(meal).join(' ').toLowerCase();
    
    // Base values
    if (ingredients.includes('chicken') || ingredients.includes('turkey') || ingredients.includes('fish')) {
        protein += 25;
        calories += 200;
    }
    if (ingredients.includes('beef') || ingredients.includes('pork') || ingredients.includes('lamb')) {
        protein += 30;
        calories += 300;
        fat += 15;
    }
    if (ingredients.includes('rice') || ingredients.includes('pasta') || ingredients.includes('quinoa')) {
        calories += 200;
        fiber += 2;
    }
    if (ingredients.includes('vegetables') || ingredients.includes('salad')) {
        fiber += 5;
        calories += 50;
    }
    if (ingredients.includes('avocado') || ingredients.includes('olive oil') || ingredients.includes('nuts')) {
        fat += 15;
        calories += 150;
    }
    if (ingredients.includes('beans') || ingredients.includes('lentils')) {
        fiber += 8;
        protein += 10;
        calories += 150;
    }
    
    // Default values if no specifics found
    if (calories === 0) calories = 350;
    if (protein === 0) protein = 15;
    if (fiber === 0) fiber = 5;
    if (fat === 0) fat = 12;
    
    return { calories, protein, fiber, fat };
}

function filterForCondition(meals, condition) {
    const rules = CONDITION_RULES[condition] || {};
    return meals.filter(meal => {
        if (!rules.avoid) return true;
        
        const ingredients = getIngredients(meal).map(i => i.toLowerCase());
        return !rules.avoid.some(badIngredient => 
            ingredients.some(ing => ing.includes(badIngredient)))
    });
}

function filterMeals(meals, filters) {
    const { condition, allergies, dislikes, likes } = filters;
    
    return meals.filter(meal => {
        const mealIngredients = getIngredients(meal).map(i => i.toLowerCase());
        const mealName = meal.name.toLowerCase();
        
        // Check for allergies
        if (allergies.some(allergy => 
            mealIngredients.some(ing => ing.includes(allergy)))) {
            return false;
        }
        
        // Check for dislikes
        if (dislikes.some(dislike => 
            mealName.includes(dislike) || 
            mealIngredients.some(ing => ing.includes(dislike)))) {
            return false;
        }
        
        // Check for condition restrictions
        if (condition) {
            const conditionRules = CONDITION_RULES[condition];
            if (conditionRules && conditionRules.avoid.some(badIngredient => 
                mealIngredients.some(ing => ing.includes(badIngredient)))) {
                return false;
            }
        }
        
        // Check for likes (if any specified)
        if (likes.length > 0 && !likes.some(like => 
            mealName.includes(like) || 
            mealIngredients.some(ing => ing.includes(like)))) {
            return false;
        }
        
        return true;
    });
}

function updateCalendar() {
    const calendarBody = document.getElementById('calendar-body');
    calendarBody.innerHTML = '';
    
    const weekStart = new Date(currentWeekStart);
    const weekEnd = new Date(weekStart);
    weekEnd.setDate(weekEnd.getDate() + 6);
    
    document.getElementById('current-week').textContent = 
        `Week of ${formatDate(weekStart)} to ${formatDate(weekEnd)}`;
    
    let row = document.createElement('tr');
    
    for (let i = 0; i < 7; i++) {
        const day = new Date(weekStart);
        day.setDate(day.getDate() + i);
        
        const dateKey = formatDateKey(day);
        
        const cell = document.createElement('td');
        cell.innerHTML = `
            <div class="day-header">${day.toLocaleDateString('en-US', { weekday: 'long' })}</div>
            <div class="day-date">${day.getDate()}</div>
            
            <div class="meal-slot">
                <div class="meal-slot-title">Breakfast (7-9 AM)</div>
                <div id="breakfast-${dateKey}" class="scheduled-meals">
                    ${getScheduledMealsHTML(dateKey, 'breakfast')}
                </div>
                <div class="quick-add suggestions-container">
                    <input type="text" id="quick-add-breakfast-${dateKey}" placeholder="Quick add breakfast" 
                           oninput="showSuggestions('${dateKey}', 'breakfast', this.value)">
                    <div id="suggestions-breakfast-${dateKey}" class="suggestions-dropdown" style="display:none"></div>
                    <button onclick="quickAddMeal('${dateKey}', 'breakfast')">Add</button>
                </div>
            </div>
            
            <div class="meal-slot">
                <div class="meal-slot-title">Lunch (12-2 PM)</div>
                <div id="lunch-${dateKey}" class="scheduled-meals">
                    ${getScheduledMealsHTML(dateKey, 'lunch')}
                </div>
                <div class="quick-add suggestions-container">
                    <input type="text" id="quick-add-lunch-${dateKey}" placeholder="Quick add lunch" 
                           oninput="showSuggestions('${dateKey}', 'lunch', this.value)">
                    <div id="suggestions-lunch-${dateKey}" class="suggestions-dropdown" style="display:none"></div>
                    <button onclick="quickAddMeal('${dateKey}', 'lunch')">Add</button>
                </div>
            </div>
            
            <div class="meal-slot">
                <div class="meal-slot-title">Dinner (6-8 PM)</div>
                <div id="dinner-${dateKey}" class="scheduled-meals">
                    ${getScheduledMealsHTML(dateKey, 'dinner')}
                </div>
                <div class="quick-add suggestions-container">
                    <input type="text" id="quick-add-dinner-${dateKey}" placeholder="Quick add dinner" 
                           oninput="showSuggestions('${dateKey}', 'dinner', this.value)">
                    <div id="suggestions-dinner-${dateKey}" class="suggestions-dropdown" style="display:none"></div>
                    <button onclick="quickAddMeal('${dateKey}', 'dinner')">Add</button>
                </div>
            </div>
        `;
        
        row.appendChild(cell);
    }
    
    calendarBody.appendChild(row);
}

function formatDate(date) {
    return date.toLocaleDateString('en-US', { month: 'short', day: 'numeric', year: 'numeric' });
}

function formatDateKey(date) {
    return `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
}

function changeWeek(weeks) {
    currentWeekStart.setDate(currentWeekStart.getDate() + (weeks * 7));
    updateCalendar();
}

function getScheduledMealsHTML(dateKey, mealType) {
    if (!userMealPlan[dateKey] || !userMealPlan[dateKey][mealType]) {
        return '';
    }
    
    // Filter out grilled chicken from Wednesday and Friday
    const dayOfWeek = new Date(dateKey).getDay();
    const isWednesdayOrFriday = dayOfWeek === 3 || dayOfWeek === 5;
    
    return userMealPlan[dateKey][mealType]
        .filter(meal => {
            if (isWednesdayOrFriday) {
                if (typeof meal === 'string') {
                    const foundMeal = LOCAL_MEALS.find(m => m.id === meal);
                    return !foundMeal?.name.toLowerCase().includes('grilled chicken');
                }
                return !meal.name.toLowerCase().includes('grilled chicken');
            }
            return true;
        })
        .map(meal => {
            if (typeof meal === 'string') {
                const foundMeal = LOCAL_MEALS.find(m => m.id === meal);
                if (foundMeal) {
                    return `
                        <div class="scheduled-meal">
                            ${foundMeal.name}
                            <span class="meal-time">${getMealTime(mealType)}</span>
                            <button class="remove-meal" onclick="removeMeal('${dateKey}', '${mealType}', '${meal}')">×</button>
                        </div>
                    `;
                }
            } else {
                return `
                    <div class="scheduled-meal">
                        ${meal.name}
                        <span class="meal-time">${getMealTime(mealType)}</span>
                        <button class="remove-meal" onclick="removeMeal('${dateKey}', '${mealType}', '${meal.id || meal.name}')">×</button>
                    </div>
                `;
            }
            return '';
        }).join('');
}

function getMealTime(mealType) {
    switch(mealType) {
        case 'breakfast': return '8:00 AM';
        case 'lunch': return '12:30 PM';
        case 'dinner': return '7:00 PM';
        default: return '';
    }
}

function findMatchingMeals(searchTerm) {
    if (!searchTerm || searchTerm.length < 2) return [];
    
    const lowerSearch = searchTerm.toLowerCase();
    return LOCAL_MEALS.filter(meal => 
        meal.name.toLowerCase().includes(lowerSearch)
    ).slice(0, 5);
}

function showSuggestions(dateKey, mealType, searchTerm) {
    const suggestionsContainer = document.getElementById(`suggestions-${mealType}-${dateKey}`);
    suggestionsContainer.innerHTML = '';
    
    if (searchTerm.length < 2) {
        suggestionsContainer.style.display = 'none';
        return;
    }
    
    const matchingMeals = findMatchingMeals(searchTerm);
    
    if (matchingMeals.length === 0) {
        suggestionsContainer.style.display = 'none';
        return;
    }
    
    matchingMeals.forEach(meal => {
        const suggestionItem = document.createElement('div');
        suggestionItem.className = 'suggestion-item';
        suggestionItem.textContent = meal.name;
        suggestionItem.onclick = () => {
            document.getElementById(`quick-add-${mealType}-${dateKey}`).value = meal.name;
            suggestionsContainer.style.display = 'none';
        };
        suggestionsContainer.appendChild(suggestionItem);
    });
    
    suggestionsContainer.style.display = 'block';
}

function quickAddMeal(dateKey, mealType) {
    const input = document.getElementById(`quick-add-${mealType}-${dateKey}`);
    const mealName = input.value.trim();
    
    if (!mealName) {
        alert('Please enter a meal name');
        return;
    }
    
    // Hide suggestions
    document.getElementById(`suggestions-${mealType}-${dateKey}`).style.display = 'none';
    
    const customMeal = {
        id: `custom-${Date.now()}`,
        name: mealName,
        mealType: mealType,
        ingredients: [],
        nutrition: estimateNutrition({ name: mealName, ingredients: [] })
    };
    
    if (!userMealPlan[dateKey]) {
        userMealPlan[dateKey] = { breakfast: [], lunch: [], dinner: [] };
    }
    
    userMealPlan[dateKey][mealType].push(customMeal);
    saveMealPlan();
    updateScheduledMealsDisplay(dateKey, mealType);
    
    // Clear input
    input.value = '';
}

function removeMeal(dateKey, mealType, mealId) {
    if (userMealPlan[dateKey] && userMealPlan[dateKey][mealType]) {
        userMealPlan[dateKey][mealType] = userMealPlan[dateKey][mealType].filter(m => {
            // Handle both string IDs and full meal objects
            if (typeof m === 'string') {
                return m !== mealId;
            } else if (typeof m === 'object') {
                return m.id !== mealId && m.name !== mealId; // Check both id and name
            }
            return true;
        });
        
        // Clean up empty meal types
        if (userMealPlan[dateKey][mealType].length === 0) {
            delete userMealPlan[dateKey][mealType];
        }
        
        // Clean up empty days
        if (Object.keys(userMealPlan[dateKey]).length === 0) {
            delete userMealPlan[dateKey];
        }
        
        saveMealPlan();
        updateCalendar(); // Refresh the entire calendar to ensure consistency
    }
}

function updateScheduledMealsDisplay(dateKey, mealType) {
    const container = document.getElementById(`${mealType}-${dateKey}`);
    if (container) {
        container.innerHTML = getScheduledMealsHTML(dateKey, mealType);
    }
}

function saveMealPlan() {
    localStorage.setItem('gutHealthMealPlan', JSON.stringify(userMealPlan));
}

function loadMealPlan() {
    const savedPlan = localStorage.getItem('gutHealthMealPlan');
    if (savedPlan) {
        userMealPlan = JSON.parse(savedPlan);
    }
}

function showNotification(message) {
    const notification = document.createElement('div');
    notification.className = 'notification';
    notification.textContent = message;
    document.body.appendChild(notification);
    
    setTimeout(() => {
        notification.remove();
    }, 3000);
}

// Close suggestions when clicking elsewhere
document.addEventListener('click', function(e) {
    if (!e.target.classList.contains('suggestion-item') && !e.target.matches('input[type="text"]')) {
        document.querySelectorAll('.suggestions-dropdown').forEach(dropdown => {
            dropdown.style.display = 'none';
        });
    }
});

// Event listeners
document.getElementById("generate-meal-options").addEventListener("click", generateMealOptions);
document.getElementById("track-symptoms").addEventListener("click", () => switchTab('symptoms'));

document.querySelector('.navbar-toggle').addEventListener('click', function() {
    document.querySelector('.navbar-links').classList.toggle('active');
});

function switchTab(tabName) {
    document.querySelectorAll('.tab-content').forEach(tab => {
        tab.classList.remove('active');
    });
    document.querySelectorAll('.tab').forEach(tab => {
        tab.classList.remove('active');
    });
    
    document.getElementById(tabName + '-tab').classList.add('active');
    document.querySelector(`.tab[onclick="switchTab('${tabName}')"]`).classList.add('active');
}

async function generateMealOptions() {
    const condition = document.getElementById("condition").value;
    const allergies = document.getElementById("allergies").value.split(',').map(a => a.trim().toLowerCase()).filter(a => a);
    const dislikes = document.getElementById("dislikes").value.split(',').map(d => d.trim().toLowerCase()).filter(d => d);
    const likes = document.getElementById("likes").value.split(',').map(l => l.trim().toLowerCase()).filter(l => l);
    
    const resultsContainer = document.getElementById("results-container");
    resultsContainer.innerHTML = '<div class="loading"><div class="spinner"></div><p>Finding gut-friendly meals for you...</p></div>';
    
    try {
        // Use only local meals
        const allMeals = [...LOCAL_MEALS];
        
        // Filter based on user preferences
        const filteredMeals = filterMeals(allMeals, {
            condition,
            allergies,
            dislikes,
            likes
        });
        
        // If no meals found with likes, try without likes requirement
        const finalMeals = filteredMeals.length === 0 && likes.length > 0 
            ? filterMeals(allMeals, { condition, allergies, dislikes, likes: [] })
            : filteredMeals;
        
        displayMealOptions(finalMeals);
        switchTab('planner');
    } catch (error) {
        console.error('Error generating meal options:', error);
        resultsContainer.innerHTML = '<div class="error">Sorry, there was an error generating your meal options. Showing local meals instead.</div>';
        displayMealOptions(LOCAL_MEALS);
        switchTab('planner');
    }
}

// Complete displayMealOptions function
function displayMealOptions(meals) {
    const container = document.getElementById('meal-options-container');
    
    if (!meals || meals.length === 0) {
        container.innerHTML = `
            <div class="no-results">
                <h3>No meals found matching your criteria</h3>
                <p>Try broadening your preferences or removing some restrictions.</p>
                <button onclick="generateMealOptions()">Try Again</button>
            </div>
        `;
        return;
    }
    
    // Group by meal type
    const mealGroups = {};
    meals.forEach(meal => {
        const type = meal.mealType || guessMealType(meal.name);
        if (!mealGroups[type]) mealGroups[type] = [];
        mealGroups[type].push(meal);
    });
    
    let html = `
        <h2>Recommended Meals Based on Your Profile</h2>
        <p style="text-align: center; color: #666;">${meals.length} meals found matching your preferences</p>
    `;
    
    // Display each meal type group
    Object.entries(mealGroups).forEach(([type, typeMeals]) => {
        html += `
            <h3 style="margin-top: 30px;">${type.charAt(0).toUpperCase() + type.slice(1)} Options</h3>
            <div class="meal-container">
                ${typeMeals.map(meal => mealCardHTML(meal)).join('')}
            </div>
        `;
    });
    
    container.innerHTML = html;
}

// Complete mealCardHTML function
function mealCardHTML(meal, showAddButton = false, dateKey = '', mealType = '') {
    const condition = document.getElementById("condition").value;
    const nutrition = meal.nutrition || estimateNutrition(meal);
    
    let html = `
        <div class="meal-card">
            <img src="${meal.image || 'https://via.placeholder.com/150'}" alt="${meal.name}">
            <h3>${meal.name}</h3>
            <p>${meal.description || 'A delicious gut-friendly meal'}</p>
            
            <div class="tags">
                ${(meal.tags || []).map(tag => `<span class="tag">${tag}</span>`).join('')}
                ${meal.mealType ? `<span class="tag">${meal.mealType}</span>` : ''}
            </div>
            
            <div class="nutrition-info">
                <span class="nutrition-item">${nutrition.calories || 'N/A'} cal</span>
                <span class="nutrition-item">${nutrition.protein || 'N/A'}g protein</span>
                <span class="nutrition-item">${nutrition.fiber || 'N/A'}g fiber</span>
            </div>
            
            <div class="ingredients">
                <strong>Ingredients:</strong> ${getIngredients(meal).join(', ')}
            </div>
            
            ${condition && meal.goodFor?.includes(condition) ? 
              `<p class="recommended">Recommended for ${condition}</p>` : ''}
              
            ${meal.avoidFor?.includes(condition) ? 
              `<p class="not-recommended">Not recommended for ${condition}</p>` : ''}
    `;
    
    if (showAddButton) {
        html += `
            <button class="add-to-plan" onclick="addMealToPlan('${dateKey}', '${mealType}', '${meal.id}')">
                Add to ${mealType}
            </button>
        `;
    }
    
    html += `</div>`;
    return html;
}

// Add this helper function if not already present
function addMealToPlan(dateKey, mealType, mealId) {
    if (!userMealPlan[dateKey]) {
        userMealPlan[dateKey] = { breakfast: [], lunch: [], dinner: [] };
    }
    
    const mealToAdd = LOCAL_MEALS.find(m => m.id === mealId);
    if (mealToAdd) {
        userMealPlan[dateKey][mealType].push(mealId);
        saveMealPlan();
        updateScheduledMealsDisplay(dateKey, mealType);
        showNotification(`${mealToAdd.name} added to ${mealType}`);
    }
}