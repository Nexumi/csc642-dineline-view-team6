import { pseudoRandint } from "./util";

import he from "../assets/restaurant/hillside-elegance.jpg";
import hh from "../assets/restaurant/homestyle-haven.jpg";
import ob from "../assets/restaurant/oceans-bounty.jpg";
import ffg from "../assets/restaurant/flame-flavor-grill.jpg";

import BBQShrimp from "../assets/images/hillside-elegance/BBQ-Shrimp.jpg";
import BakedStuffedLobster from "../assets/images/hillside-elegance/BakedStuffedLobster.jpg";
import BelvedereDinner from "../assets/images/hillside-elegance/Belvedere-Dinner.jpg";
import CucumberShrimp from "../assets/images/hillside-elegance/Cucumber-Shrimp.jpg";
import hel from "../assets/location/hillside-elegance.jpg";

import ChickenParm from "../assets/images/homestyle-haven/chicken-parm.jpg";
import ChickenFriedSteak from "../assets/images/homestyle-haven/chicken-fried-steak.jpg";
import ChickenNoodleSoup from "../assets/images/homestyle-haven/chicken-noodle-soup.jpg";
import hhl from "../assets/location/homestyle-haven.jpg";

import SeafoodTray from "../assets/images/oceans-bounty/seafood-tray.jpg";
import SeafoodRisotto from "../assets/images/oceans-bounty/Seafood-Risotto.jpg";
import SeafoodLinguine from "../assets/images/oceans-bounty/Seafood-linguine.jpg";
import SeafoodPasta from "../assets/images/oceans-bounty/seafood-pasta.jpg";
import SeafoodChowder from "../assets/images/oceans-bounty/Seafood-Chowder.jpg";
import obl from "../assets/location/oceans-bounty.jpg";

import GrilledVegetables from "../assets/images/flame-flavor-grill/grilled-vegetables.jpg";
import GrilledPorkChops from "../assets/images/flame-flavor-grill/grilled-pork-chops.jpg";
import GrilledBurgerWithFries from "../assets/images/flame-flavor-grill/grilled-burger-with-fries.jpg";
import Beers from "../assets/images/flame-flavor-grill/beers.jpg";
import ffgl from "../assets/location/flame-flavor-grill.jpg";

export function getRestaurants() {
  return [
    { id: "hillside-elegance", name: "Hillside Elegance", description: "Fine dining in the hills of vienna.", img: he, alt: "Hillside Elegance" },
    { id: "homestyle-haven", name: "Homestyle Haven", description: "Classic dishes, welcoming ambiance.", img: hh, alt: "Homestyle Haven" },
    { id: "oceans-bounty", name: "Ocean's Bounty", description: "Fresh catch in a coastal ambiance.", img: ob, alt: "Ocean's Bounty" },
    { id: "flame-flavor-grill", name: "Flame & Flavor Grill", description: "Juicy burgers in a relaxed setting.", img: ffg, alt: "Flame & Flavor Grill" }
  ];
}

export function getRestaurant(id: string) {
  return getRestaurants().find(restaurant => restaurant.id === id);
}

export function getInfo(id: string) {
  const informations = [
    {
      id: "hillside-elegance",
      images: [
        { src: BBQShrimp, alt: "BBQ Shrimp" },
        { src: BakedStuffedLobster, alt: "Baked Stuffed Lobster" },
        { src: BelvedereDinner, alt: "Belvedere Dinner" },
        { src: CucumberShrimp, alt: "Cucumber Shrimp" }
      ],
      address: [
        "Hillside Elegance",
        "123 Serenity Lane",
        "Vienna Hills, VA 22180"
      ],
      phone: "(555) 981-3251",
      hours: [
        { day: "Sunday", time: "CLOSED" },
        { day: "Monday", time: "3:00 PM - 9:00 PM" },
        { day: "Tuesday", time: "3:00 PM - 9:00 PM" },
        { day: "Wednesday", time: "3:00 PM - 9:00 PM" },
        { day: "Thursday", time: "3:00 PM - 9:00 PM" },
        { day: "Friday", time: "3:00 PM - 9:00 PM" },
        { day: "Saturday", time: "5:00 PM - 10:00 PM" },
      ],
      about: "At Hillside Elegance, we believe that dining is not just about food, but an exquisite experience that tantalizes all your senses. Nestled in the serene hills of Vienna, our restaurant offers a luxurious escape from the everyday hustle. With a focus on culinary excellence and impeccable service, we invite you to embark on a gastronomic journey like no other. From our carefully curated menu of fine dishes to the elegant ambiance that surrounds you, every moment at Hillside Elegance is crafted to enchant and delight. Join us for an unforgettable dining experience where every detail is designed to elevate your senses and leave you longing for more.",
      location: {
        src: hel,
        alt: "Hillside Elegance Google Maps",
        href: "https://www.google.com/maps/search/123+Serenity+Lane++Vienna+Hills,+VA+22180/"
      }
    },
    {
      id: "homestyle-haven",
      images: [
        { src: ChickenParm, alt: "Chicken Parm" },
        { src: ChickenFriedSteak, alt: "Chicken Fried Steak" },
        { src: ChickenNoodleSoup, alt: "Chicken Noodle Soup" }
      ],
      address: [
        "Homestyle Haven",
        "567 Cozy Corner Road",
        "Warmheart Village, NY 34567"
      ],
      phone: "(555) 809-5064",
      hours: [
        { day: "Sunday", time: "CLOSED" },
        { day: "Monday", time: "10:00 PM - 8:00 PM" },
        { day: "Tuesday", time: "10:00 PM - 8:00 PM" },
        { day: "Wednesday", time: "10:00 PM - 8:00 PM" },
        { day: "Thursday", time: "10:00 PM - 8:00 PM" },
        { day: "Friday", time: "10:00 PM - 8:00 PM" },
        { day: "Saturday", time: "CLOSED" },
      ],
      about: "At Homestyle Haven, we're more than just a restaurant – we're a cozy retreat where every meal feels like coming home. Located in the heart of town, our welcoming atmosphere and hearty dishes are reminiscent of Grandma's cooking. With a focus on classic comfort foods and warm hospitality, we invite you to relax, unwind, and savor the flavors of home. Whether you're gathering with loved ones or enjoying a quiet meal for one, Homestyle Haven is where memories are made and traditions are celebrated.",
      location: {
        src: hhl,
        alt: "Homestyle Haven Google Maps",
        href: "https://www.google.com/maps/search/567+Cozy+Corner+Road+Warmheart+Village,+NY+34567/"
      }
    },
    {
      id: "oceans-bounty",
      images: [
        { src: SeafoodTray, alt: "Seafood Tray" },
        { src: SeafoodRisotto, alt: "Seafood Risotto" },
        { src: SeafoodLinguine, alt: "Seafood Linguine" },
        { src: SeafoodPasta, alt: "Seafood Pasta" },
        { src: SeafoodChowder, alt: "Seafood Chowder" }
      ],
      address: [
        "Ocean's Bounty",
        "456 Mariner's Way",
        "Seaspray Beach, FL 33123"
      ],
      phone: "(555) 780-6415",
      hours: [
        { day: "Sunday", time: "CLOSED" },
        { day: "Monday", time: "8:00 PM - 8:00 PM" },
        { day: "Tuesday", time: "8:00 PM - 8:00 PM" },
        { day: "Wednesday", time: "8:00 PM - 8:00 PM" },
        { day: "Thursday", time: "8:00 PM - 8:00 PM" },
        { day: "Friday", time: "8:00 PM - 8:00 PM" },
        { day: "Saturday", time: "9:00 PM - 4:00 PM" },
      ],
      about: "At Ocean's Bounty, we are passionate about bringing the flavors of the sea to your table. Located along the scenic coastline, our restaurant is a haven for seafood enthusiasts. With a commitment to freshness and quality, we source the finest ingredients from the ocean depths to create culinary delights that will transport you to seaside paradise. From succulent lobster rolls to mouthwatering seafood paella, every dish at Ocean's Bounty is crafted with care and expertise. Join us for a dining experience that celebrates the bounty of the ocean and leaves you craving more.",
      location: {
        src: obl,
        alt: "Ocean's Bounty Google Maps",
        href: "https://www.google.com/maps/search/456+Mariner's+Way+Seaspray+Beach,+FL+33123/"
      }
    },
    {
      id: "flame-flavor-grill",
      images: [
        { src: GrilledVegetables, alt: "Grilled Vegetables" },
        { src: GrilledPorkChops, alt: "Grilled Pork Chops" },
        { src: GrilledBurgerWithFries, alt: "Grilled Burger With Fries" },
        { src: Beers, alt: "Beers" },
      ],
      address: [
        "Flame & Flavor Grill",
        "456 Charcoal Avenue",
        "Grillville, TX 75001"
      ],
      phone: "(555) 418-1485",
      hours: [
        { day: "Sunday", time: "5:00 PM - 10:00 PM" },
        { day: "Monday", time: "3:00 PM - 11:00 PM" },
        { day: "Tuesday", time: "3:00 PM - 11:00 PM" },
        { day: "Wednesday", time: "3:00 PM - 11:00 PM" },
        { day: "Thursday", time: "3:00 PM - 11:00 PM" },
        { day: "Friday", time: "3:00 PM - 11:00 PM" },
        { day: "Saturday", time: "5:00 PM - 10:00 PM" },
      ],
      about: "At Flame & Flavor Grill, we're passionate about grilling up delicious flavors that ignite your taste buds. Located in the heart of town, our grill is where the magic happens – from juicy burgers to tender steaks, each dish is infused with the perfect blend of flame-kissed goodness. With a laid-back atmosphere and friendly service, we're all about creating memorable dining experiences that keep you coming back for more. Join us at Flame & Flavor Grill, where every bite is a celebration of flavor and fun.",
      location: {
        src: ffgl,
        alt: "Flame & Flavor Grill Google Maps",
        href: "https://www.google.com/maps/search/456+Charcoal+Avenue+Grillville,+TX+75001/"
      }
    }
  ]

  return informations.find(info => info.id === id);
}

export function getMenu(id: string) {
  const menus = [
    {
      id: "hillside-elegance",
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
      id: "homestyle-haven",
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
      id: "oceans-bounty",
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
      id: "flame-flavor-grill",
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

  return menus.find(menu => menu.id === id);
}

export function getQueue(id: string, amount: number) {
  function shuffleArray(array: any[]) {
    for (let i = array.length - 1; i > 0; i--) {
      const j = pseudoRandint(id, 0, i, 1, i)[0];
      [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
  }

  const femaleNames = [
    "Pamela Crosby",
    "Tasnim Stevens",
    "Jessie Baker",
    "Ronnie Rowland",
    "Lucille Holt",
    "Melanie Gould",
    "Jordan Mckenzie",
    "Ali Gillespie",
    "Lucy Aguilar",
    "Estelle Hebert",
    "Yasmine Gibson",
    "Aneesa Ponce",
    "Lillie Donovan",
    "Zuzanna Richard",
    "Rohan Skinner",
    "Ruth Nelson",
    "Lucie Mullen",
    "Chanelle Santos",
    "Jesse Franklin",
    "Wade Harrington",
    "Peggy Phelps",
    "Nadia Vance",
    "Isabel Carpenter",
    "Safa O'Reilly",
    "Jenny O'Gallagher",
    "Farrah Beltran",
    "Victoria Hunter",
    "Devon Livingston",
    "Ashton Chen",
    "Esther Meyer",
    "Suzanne Bates",
    "Salma Bender",
    "Safaa Beck",
    "Millie Khan",
    "Riley Cochran",
    "Zain Sosa",
    "Jennie Kerr",
    "Abi Cobb",
    "Adele Harvey",
    "Orla Young",
    "Gina Wise",
    "Aliyah Sears",
    "Addie Jones",
    "Jasmine Barker",
    "Elliot Mendoza",
    "Safia Kidd",
    "Rayhan O'Sullivan",
    "Angela Ruiz",
    "Freya Gilmore",
    "Millicent Hayes",
    "Demi Colon",
    "Angelina Parker",
    "Louise Singh",
    "Arianna Douglas",
    "Tatiana Sanders",
    "Aya Randall",
    "Dana Pratt",
    "Charley Horton",
    "Alesha Suarez",
    "Alys Alvarado",
    "Amelie Humphrey",
    "Tommy Rivera",
    "Shania Yates",
    "Bertha Pierce",
    "Lucia Richardson",
    "Zane Lane",
    "Mariam Huber",
    "Enya Cannon",
    "Tasneem Jimenez",
    "Eleanor Burnett",
    "Sonia Savage",
    "Faye Sanchez",
    "Elijah Shaffer",
    "Shanice Rich",
    "Willow Boyle",
    "Betty John",
    "Maggie Lowe",
    "Jennifer David",
    "Melissa Johnson"
  ]

  const maleNames = [
    "Rex Knapp",
    "Esme Whitehead",
    "Bruno Berry",
    "Safa Parker",
    "George Riddle",
    "Fabian Conway",
    "Otis Norris",
    "Edgar Pratt",
    "Dewey Mckay",
    "Sion Moody",
    "Ruairi Mcmillan",
    "Byron Mcneil",
    "Nevaeh Acevedo",
    "Fintan Sharp",
    "Ciaran Gill",
    "Yahya Ware",
    "Hamzah Nielsen",
    "Aryan Davies",
    "Sebastien Adkins",
    "Maximilian Burgess",
    "Rufus Singh",
    "Eliza Hickman",
    "Dennis Richards",
    "Abby Washington",
    "Jaxson Mills",
    "Damon Savage",
    "Hussain Diaz",
    "Bertie Strong",
    "Shane Padilla",
    "Dawid Middleton",
    "Harmony Garner",
    "Flynn Hill",
    "Jeremiah Potts",
    "Cody Poole",
    "Kelvin Shelton",
    "Richie Roman",
    "Elijah Dalton",
    "Damian Mosley",
    "Talha Drake",
    "Kurt Williams",
    "Kamal Hernandez",
    "Abu Holt",
    "Adil Bailey",
    "Cassius Keller",
    "Calvin Hendrix",
    "Layton Vargas",
    "Moshe Jenkins",
    "Daniel Spencer",
    "Harvey Irwin",
    "Darius Galvan",
    "Iestyn Melendez",
    "Billy Page",
    "Zac Vance",
    "Aston Gilmore",
    "Justin Navarro",
    "Wojciech Hampton",
    "Alan Flynn",
    "Taylor Stone",
    "Laurie Davis",
    "Declan Wells",
    "Derek Haas",
    "Ali May",
    "Zach Burns",
    "Chaim Harvey",
    "Mahdi Dejesus",
    "Dexter Shields",
    "Ezekiel Mendoza",
    "Myles Bean",
    "Sienna Schaefer",
    "Angelo Lewis",
    "Terry Sims",
    "Frazer Branch",
    "Alvin Larson",
    "Liam Baird",
    "Kyan Fernandez",
    "Ismael Best",
    "Mateo Collier",
    "Gerald England",
    "Usman Mccullough"
  ]

  const people: object[] = [];

  const genders = pseudoRandint(id, 0, 1, amount);
  let offset = amount;
  const used: number[][] = [[], []];
  for (const gender of genders) {
    const names = gender ? femaleNames : maleNames;
    let r = pseudoRandint(id, 0, names.length, 1, offset++)[0];
    while (used[gender].includes(r)) {
      r = pseudoRandint(id, 0, names.length, 1, offset++)[0];
    }
    used[gender].push(r);
    people.push({
      pic: `https://xsgames.co/randomusers/assets/avatars/${gender ? "female" : "male"}/${r}.jpg`,
      name: names[r]
    })
  }

  return shuffleArray(people).slice(0, amount);
}