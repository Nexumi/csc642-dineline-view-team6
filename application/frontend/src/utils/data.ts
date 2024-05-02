import placeholder1 from "../assets/restaurant/placeholder1.jpg";
import placeholder2 from "../assets/restaurant/placeholder2.jpg";
import placeholder3 from "../assets/restaurant/placeholder3.jpg";
import placeholder4 from "../assets/restaurant/placeholder4.jpg";

export function getRestaurants() {
  return [
    { id: 1, name: "Hillside Elegance", description: "Fine dining in the hills of vienna.", img: placeholder1 },
    { id: 2, name: "Homestyle Haven", description: "Classic dishes, welcoming ambiance.", img: placeholder2 },
    { id: 3, name: "Ocean's Bounty", description: "Fresh catch in a coastal ambiance.", img: placeholder3 },
    { id: 4, name: "Flame & Flavor Grill", description: "Juicy burgers in a relaxed setting.", img: placeholder4 }
  ];
}

export function getRestaurant(id: number | string) {
  return getRestaurants().find(restaurant => restaurant.id === Number(id));
}

export function getMenu(id: number | string) {
  const menus = [
    {
      id: 1,
      appetizers: [
        { name: "Oysters Rockefeller", price: 35 },
        { name: "Tuna Tartare", price: 38 },
        { name: "Escargot", price: 42 }
      ],
      drinks: [
        { name: "Champagne", price: 100 },
        { name: "Fine Wine", price: 85 },
        { name: "Craft Cocktail", price: 20 },
      ],
      mains: [
        { name: "Filet Mignon", price: 55 },
        { name: "Lobster Thermidor", price: 65 },
        { name: "Rack of Lamb", price: 60 },
        { name: "Pan-Seared Sea Bass", price: 50 },
        { name: "Duck Confit", price: 48 }
      ],
      desserts: [
        { name: "Crème Brûlée", price: 20 },
        { name: "Chocolate Soufflé", price: 22 },
        { name: "Cheesecake", price: 24 },
        { name: "Panna Cotta", price: 20 }
      ]
    },
    {
      id: 2,
      appetizers: [
        { name: "Garlic Bread", price: 7 },
        { name: "Caesar Salad", price: 9 },
        { name: "Mozzarella Sticks", price: 8 },
        { name: "Bruschetta", price: 8 }
      ],
      drinks: [
        { name: "Soft Drink", price: 2.5 },
        { name: "Iced Tea", price: 3 },
        { name: "Lemonade", price: 3.5 }
      ],
      mains: [
        { name: "Spaghetti Bolognese", price: 14 },
        { name: "Chicken Parmesan", price: 16 },
        { name: "Grilled Salmon", price: 18 }
      ],
      desserts: [
        { name: "Chocolate Cake", price: 7 },
        { name: "Apple Pie", price: 6 }
      ]
    },
    {
      id: 3,
      appetizers: [
        { name: "Clam Chowder", price: 10 },
        { name: "Shrimp Cocktail", price: 12 },
        { name: "Crab Cakes", price: 14 }
      ],
      drinks: [
        { name: "White Wine", price: 8 },
        { name: "Sea Breeze Cocktail", price: 10 },
        { name: "Sparkling Water", price: 3 }
      ],
      mains: [
        { name: "Lobster Roll", price: 20 },
        { name: "Grilled Swordfish", price: 22 },
        { name: "Seafood Paella", price: 25 }
      ],
      seafood_specials: [
        { name: "Oyster Platter", price: 18 },
        { name: "Alaskan King Crab Legs", price: 30 }
      ],
      desserts: [
        { name: "Key Lime Pie", price: 8 },
        { name: "Chocolate Mousse", price: 9 }
      ]
    },
    {
      id: 4,
      appetizers: [
        { name: "French Fries", price: 5 },
        { name: "Onion Rings", price: 6 },
        { name: "Loaded Nachos", price: 8 }
      ],
      drinks: [
        { name: "Soda Fountain Drinks", price: 3 },
        { name: "Iced Tea", price: 2.5 },
        { name: "Lemonade", price: 4 },
        { name: "Milkshake", price: 5 }
      ],
      mains: [
        { name: "Classic Burger", price: 10 },
        { name: "Veggie Burger", price: 9 },
        { name: "Chicken Sandwich", price: 11 },
        { name: "BBQ Pulled Pork Sandwich", price: 12 }
      ],
      desserts: [
        { name: "Brownie Sundae", price: 7 },
        { name: "Applie Pie", price: 6 },
        { name: "Ice Cream Sandwich", price: 4.5 }
      ]
    }
  ]

  return menus.find(menu => menu.id === Number(id));
}