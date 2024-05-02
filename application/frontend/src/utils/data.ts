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
        { name: "Oysters Rockefeller", price: 35.99 },
        { name: "Tuna Tartare", price: 38.99 },
        { name: "Escargot", price: 42.99 }
      ],
      drinks: [
        { name: "Champagne", price: 99.99 },
        { name: "Fine Wine", price: 84.99 },
        { name: "Craft Cocktail", price: 19.99 }
      ],
      mains: [
        { name: "Filet Mignon", price: 54.99 },
        { name: "Lobster Thermidor", price: 64.99 },
        { name: "Rack of Lamb", price: 59.99 },
        { name: "Pan-Seared Sea Bass", price: 49.99 },
        { name: "Duck Confit", price: 47.99 }
      ],
      desserts: [
        { name: "Crème Brûlée", price: 19.99 },
        { name: "Chocolate Soufflé", price: 21.99 },
        { name: "Cheesecake", price: 23.99 },
        { name: "Panna Cotta", price: 19.99 }
      ]
    },
    {
      id: 2,
      appetizers: [
        { name: "Garlic Bread", price: 6.99 },
        { name: "Caesar Salad", price: 8.99 },
        { name: "Mozzarella Sticks", price: 7.99 },
        { name: "Bruschetta", price: 7.99 }
      ],
      drinks: [
        { name: "Soft Drink", price: 2.49 },
        { name: "Iced Tea", price: 2.49 },
        { name: "Lemonade", price: 3.49 }
      ],
      mains: [
        { name: "Spaghetti Bolognese", price: 13.99 },
        { name: "Chicken Parmesan", price: 15.99 },
        { name: "Grilled Salmon", price: 17.99 }
      ],
      desserts: [
        { name: "Chocolate Cake", price: 6.99 },
        { name: "Apple Pie", price: 5.99 }
      ]
    },
    {
      id: 3,
      appetizers: [
        { name: "Clam Chowder", price: 9.99 },
        { name: "Shrimp Cocktail", price: 11.99 },
        { name: "Crab Cakes", price: 13.99 }
      ],
      drinks: [
        { name: "White Wine", price: 7.99 },
        { name: "Sea Breeze Cocktail", price: 9.99 },
        { name: "Sparkling Water", price: 2.99 }
      ],
      mains: [
        { name: "Lobster Roll", price: 19.99 },
        { name: "Grilled Swordfish", price: 21.99 },
        { name: "Seafood Paella", price: 24.99 }
      ],
      seafood_specials: [
        { name: "Oyster Platter", price: 17.99 },
        { name: "Alaskan King Crab Legs", price: 29.99 }
      ],
      desserts: [
        { name: "Key Lime Pie", price: 7.99 },
        { name: "Chocolate Mousse", price: 8.99 }
      ]
    },
    {
      id: 4,
      appetizers: [
        { name: "French Fries", price: 5.99 },
        { name: "Onion Rings", price: 6.99 },
        { name: "Loaded Nachos", price: 7.99 }
      ],
      drinks: [
        { name: "Soda Fountain Drinks", price: 2.99 },
        { name: "Iced Tea", price: 2.49 },
        { name: "Lemonade", price: 3.99 },
        { name: "Milkshake", price: 4.99 }
      ],
      mains: [
        { name: "Classic Burger", price: 9.99 },
        { name: "Veggie Burger", price: 8.99 },
        { name: "Chicken Sandwich", price: 10.99 },
        { name: "BBQ Pulled Pork Sandwich", price: 11.99 }
      ],
      desserts: [
        { name: "Brownie Sundae", price: 6.99 },
        { name: "Applie Pie", price: 5.99 },
        { name: "Ice Cream Sandwich", price: 4.50 }
      ]
    }
  ];

  return menus.find(menu => menu.id === Number(id));
}