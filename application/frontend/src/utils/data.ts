import placeholder1 from "../assets/restaurant/placeholder1.jpg";
import placeholder2 from "../assets/restaurant/placeholder2.jpg";
import placeholder3 from "../assets/restaurant/placeholder3.jpg";
import placeholder4 from "../assets/restaurant/placeholder4.jpg";

export function getRestaurants() {
  return [
    { name: "Restaurant 1", description: "Fine dining in the hills of vienna.", img: placeholder1, id: 1 },
    { name: "Restaurant 2", description: "Description for Restaurant 2", img: placeholder2, id: 2 },
    { name: "Restaurant 3", description: "Description for Restaurant 3", img: placeholder3, id: 3 },
    { name: "Restaurant 4", description: "Description for Restaurant 4", img: placeholder4, id: 4 }
  ];
}