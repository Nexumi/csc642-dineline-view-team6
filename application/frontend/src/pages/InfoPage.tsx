import { useNavigate, useParams } from "@solidjs/router";
import { For, Show, createSignal } from "solid-js";
import { getInfo, getRestaurant } from "../utils/data";
import NotFoundPage from "./NotFoundPage";
import { pseudoRandint } from "../utils/util";
import { uriHome } from "../utils/uri";

export default function InfoPage() {
  const navigate = useNavigate();
  const params = useParams();


  const [restaurant, setRestaurant] = createSignal(getRestaurant(params.id));
  const [info, setInfo] = createSignal(getInfo(params.id));

  const rands = pseudoRandint(params.id, 1, 10, 2, params.id.length);
  const [table, setTable] = createSignal({
    open: rands[0],
    reserved: rands[1]
  });

  const box = "w-full border border-black bg-gray-300 px-8 py-4 rounded-lg";
  const interact = "w-full rounded-lg bg-black hover:bg-gray-700 transition-colors duration-500 text-white py-4";

  return (
    <>
      <Show when={!restaurant()}>
        <NotFoundPage />
      </Show>
      <Show when={restaurant()}>
        <div class="flex justify-center items-center p-8">
          <h1 class="text-center text-4xl font-bold">{restaurant()?.name}</h1>
        </div>
        <div class="border-4 border-black grow h-0 mx-4" />
        <div class="grid md:grid-cols-2 gap-8 p-8">
          <div class={`md:col-span-2 flex gap-x-2 overflow-x-auto ${box}`}>
            <For each={info()?.images}>{(image) =>
              <img
                class="h-32"
                src={image.src}
                alt={image.alt}
              />
            }</For>
          </div>
          <div class={`grid xl:grid-cols-2 space-y-4 xl:space-y-0 ${box}`}>
            <div class="space-y-4">
              <div>
                <h2 class="text-xl underline">Address:</h2>
                <For each={info()?.address}>{(line) =>
                  <p>{line}</p>
                }</For>
              </div>
              <div>
                <h2 class="text-xl underline">Phone Number:</h2>
                <p>{info()?.phone}</p>
              </div>
            </div>
            <div>
              <h2 class="text-xl underline">Hours:</h2>
              <ul class="list-disc ml-4">
                <For each={info()?.hours}>{(hour) =>
                  <li>
                    <div class="flex items-center">
                      <p>{hour.day}</p>
                      <div class="grow h-0 border-t-2 border-black border-dotted mx-2" />
                      <p>{hour.time}</p>
                    </div>
                  </li>
                }</For>
              </ul>
            </div>
          </div>
          <div class={box}>
            <div>
              <h2 class="text-xl underline">About Us:</h2>
              <p>{info()?.about}</p>
            </div>
          </div>
          <div class={`flex flex-col justify-center items-center gap-y-16 ${box}`}>
            <h2 class="text-4xl">Open Tables: {table().open}</h2>
            <h2 class="text-4xl">Reserved Tables: {table().reserved}</h2>
            <h2 class="text-4xl">Wait Time: {table().open > table().reserved ? 0 : Math.max(table().reserved - table().open + 1, 0) * 15} minutes</h2>
          </div>
          <div class={`flex justify-center ${box}`}>
            <a href={info()?.location.href} target="_blank">
              <img
                class="h-96 object-cover"
                src={info()?.location.src}
                alt={info()?.location.alt}
              />
            </a>
          </div>
          <div class="flex flex-col-reverse md:flex-row md:col-span-2 gap-8">
            <button
              class={interact}
              onClick={() => {
                navigate(uriHome());
              }}
            >
              Back
            </button>
          </div>
        </div>
      </Show>
    </>
  );
}