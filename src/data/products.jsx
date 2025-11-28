export const products = [
  // Fast Food (4 products)
  {
    id: 1,
    name: "Classic Beef Burger",
    price: 12.99,
    category: "fast-food",
    image: "/images/burger.jpg",
    description: "Juicy beef patty with fresh vegetables and special sauce",
    ingredients: ["Beef Patty", "Lettuce", "Tomato", "Onion", "Special Sauce"],
    featured: true
  },
  {
    id: 2,
    name: "Crispy Chicken Wings",
    price: 14.99,
    category: "fast-food",
    image: "/images/wings.jpg",
    description: "Golden crispy wings with your choice of sauce",
    ingredients: ["Chicken Wings", "Flour", "Spices", "Sauce"],
    featured: false
  },
  {
    id: 3,
    name: "Loaded Fries Supreme",
    price: 9.99,
    category: "fast-food",
    image: "/images/fries.jpg",
    description: "Crispy fries loaded with cheese, bacon, and herbs",
    ingredients: ["Potatoes", "Cheese", "Bacon", "Herbs", "Sour Cream"],
    featured: false
  },
  {
    id: 4,
    name: "BBQ Bacon Cheeseburger",
    price: 15.99,
    category: "fast-food",
    image: "/images/bbq-burger.jpg",
    description: "Smoky BBQ flavor with crispy bacon and melted cheese",
    ingredients: ["Beef Patty", "Bacon", "Cheddar", "BBQ Sauce", "Onion Rings"],
    featured: true
  },

  // Desi (4 products)
  {
    id: 5,
    name: "Tandoori Chicken Platter",
    price: 18.99,
    category: "desi",
    image: "/images/tandoori.jpg",
    description: "Traditional clay oven roasted chicken with spices",
    ingredients: ["Chicken", "Yogurt", "Spices", "Lemon", "Herbs"],
    featured: true
  },
  {
    id: 6,
    name: "Lamb Biryani",
    price: 16.99,
    category: "desi",
    image: "/images/biryani.jpg",
    description: "Fragrant rice with tender lamb and aromatic spices",
    ingredients: ["Basmati Rice", "Lamb", "Spices", "Saffron", "Herbs"],
    featured: false
  },
  {
    id: 7,
    name: "Butter Chicken",
    price: 15.99,
    category: "desi",
    image: "/images/butter-chicken.jpg",
    description: "Creamy tomato-based curry with tender chicken",
    ingredients: ["Chicken", "Tomato", "Cream", "Butter", "Spices"],
    featured: false
  },
  {
    id: 8,
    name: "Seekh Kebab",
    price: 13.99,
    category: "desi",
    image: "/images/kebab.jpg",
    description: "Minced meat kebabs with traditional spices",
    ingredients: ["Minced Meat", "Spices", "Herbs", "Onion", "Garlic"],
    featured: false
  },

  // Chinese (4 products)
  {
    id: 9,
    name: "Kung Pao Chicken",
    price: 14.99,
    category: "chinese",
    image: "/images/kung-pao.jpg",
    description: "Spicy stir-fried chicken with peanuts and vegetables",
    ingredients: ["Chicken", "Peanuts", "Chili", "Vegetables", "Soy Sauce"],
    featured: true
  },
  {
    id: 10,
    name: "Beef Chow Mein",
    price: 13.99,
    category: "chinese",
    image: "/images/chow-mein.jpg",
    description: "Stir-fried noodles with beef and fresh vegetables",
    ingredients: ["Noodles", "Beef", "Vegetables", "Soy Sauce", "Ginger"],
    featured: false
  },
  {
    id: 11,
    name: "Sweet and Sour Pork",
    price: 12.99,
    category: "chinese",
    image: "/images/sweet-sour.jpg",
    description: "Crispy pork in tangy sweet and sour sauce",
    ingredients: ["Pork", "Bell Peppers", "Pineapple", "Vinegar", "Sugar"],
    featured: false
  },
  {
    id: 12,
    name: "Dim Sum Platter",
    price: 16.99,
    category: "chinese",
    image: "/images/dim-sum.jpg",
    description: "Assorted steamed dumplings and buns",
    ingredients: ["Pork", "Shrimp", "Flour", "Vegetables", "Soy Sauce"],
    featured: false
  },

  // Korean (4 products)
  {
    id: 13,
    name: "Bulgogi Beef",
    price: 19.99,
    category: "korean",
    image: "/images/bulgogi.jpg",
    description: "Marinated beef grilled to perfection",
    ingredients: ["Beef", "Soy Sauce", "Garlic", "Sesame Oil", "Pear"],
    featured: true
  },
  {
    id: 14,
    name: "Kimchi Fried Rice",
    price: 11.99,
    category: "korean",
    image: "/images/kimchi-rice.jpg",
    description: "Spicy fermented cabbage with fried rice",
    ingredients: ["Rice", "Kimchi", "Pork", "Egg", "Sesame Oil"],
    featured: false
  },
  {
    id: 15,
    name: "Bibimbap",
    price: 15.99,
    category: "korean",
    image: "/images/bibimbap.jpg",
    description: "Mixed rice with vegetables, meat, and egg",
    ingredients: ["Rice", "Vegetables", "Beef", "Egg", "Gochujang"],
    featured: false
  },
  {
    id: 16,
    name: "Korean BBQ Short Ribs",
    price: 22.99,
    category: "korean",
    image: "/images/short-ribs.jpg",
    description: "Galbi-marinated beef short ribs",
    ingredients: ["Beef Short Ribs", "Soy Sauce", "Garlic", "Sugar", "Sesame"],
    featured: true
  },

  // American (4 products)
  {
    id: 17,
    name: "Prime Rib Steak",
    price: 29.99,
    category: "american",
    image: "/images/prime-rib.jpg",
    description: "Premium aged prime rib with herb butter",
    ingredients: ["Prime Rib", "Herbs", "Butter", "Garlic", "Pepper"],
    featured: true
  },
  {
    id: 18,
    name: "BBQ Ribs Platter",
    price: 24.99,
    category: "american",
    image: "/images/bbq-ribs.jpg",
    description: "Fall-off-the-bone pork ribs with BBQ sauce",
    ingredients: ["Pork Ribs", "BBQ Sauce", "Spices", "Herbs"],
    featured: false
  },
  {
    id: 19,
    name: "New York Strip",
    price: 32.99,
    category: "american",
    image: "/images/ny-strip.jpg",
    description: "Classic New York strip steak, perfectly grilled",
    ingredients: ["Strip Steak", "Salt", "Pepper", "Butter", "Thyme"],
    featured: true
  },
  {
    id: 20,
    name: "Filet Mignon",
    price: 36.99,
    category: "american",
    image: "/images/filet-mignon.jpg",
    description: "Tender filet mignon with red wine reduction",
    ingredients: ["Beef Tenderloin", "Red Wine", "Butter", "Garlic", "Herbs"],
    featured: true
  }
];

export const categories = [
  { id: 'all', name: 'All Menu', count: products.length },
  { id: 'fast-food', name: 'Fast Food', count: products.filter(p => p.category === 'fast-food').length },
  { id: 'desi', name: 'Desi Cuisine', count: products.filter(p => p.category === 'desi').length },
  { id: 'chinese', name: 'Chinese', count: products.filter(p => p.category === 'chinese').length },
  { id: 'korean', name: 'Korean', count: products.filter(p => p.category === 'korean').length },
  { id: 'american', name: 'American', count: products.filter(p => p.category === 'american').length }
];