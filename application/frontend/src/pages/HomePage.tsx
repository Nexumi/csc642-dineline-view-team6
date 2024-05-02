import { For, createSignal } from "solid-js";
import Card from "../components/Card";
import { getRestaurants } from "../utils/data";

export default function HomePage() {
  const [restaurants, setRestaurants] = createSignal(getRestaurants());

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