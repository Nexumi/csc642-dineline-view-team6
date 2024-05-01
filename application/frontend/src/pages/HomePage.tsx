import { For, createSignal } from "solid-js";
import Card from "../components/Card";
import placeholder1 from "../assets/restaurant/placeholder1.jpg";
import placeholder2 from "../assets/restaurant/placeholder2.jpg";
import placeholder3 from "../assets/restaurant/placeholder3.jpg";
import placeholder4 from "../assets/restaurant/placeholder4.jpg";

export default function HomePage() {
  const [restaurants, setRestaurants] = createSignal([
    { name: "Restaurant 1", description: "Fine dining in the hills of vienna.", img: placeholder1 },
    { name: "Restaurant 2", description: "Description for Restaurant 2", img: placeholder2 },
    { name: "Restaurant 3", description: "Description for Restaurant 3", img: placeholder3 },
    { name: "Restaurant 4", description: "Description for Restaurant 4", img: placeholder4 }
  ]);

  return (
    <>
      <div class="">
        <h1 class="text-center text-4xl font-bold py-8">Welcome to Dineline!</h1>
        <div class="grid md:grid-cols-2 gap-x-8 gap-y-5 p-8 pt-0">
          <For each={restaurants()}>{(restaurant) =>
            <Card data={restaurant} />
          }</For>
        </div>
      </div>
    </>
  );
}