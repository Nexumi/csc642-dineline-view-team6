import { useNavigate, useParams } from "@solidjs/router";
import { For, Show, createSignal } from "solid-js";
import TableIcon from "../components/TableIcon";
import { getRestaurant, getTables } from "../utils/data";
import { uriHome } from "../utils/uri";
import NotFoundPage from "./NotFoundPage";
import { pseudoRandint } from "../utils/util";

export default function TablesPage() {
  const navigate = useNavigate();
  const params = useParams();

  const [restaurant, setRestaurant] = createSignal(getRestaurant(params.id));
  const [tables, setTables] = createSignal(getTables(params.id));

  const rands = pseudoRandint(params.id, 1, 10, 2, params.id.length);
  const [occupied, setOccupied] = createSignal(pseudoRandint(params.id, 0, (tables()?.data.length || 8) - 1, (tables()?.data.length || 8) - rands[0], 0, true));
  console.log(occupied)

  const interact = "w-full rounded-lg bg-black hover:bg-gray-700 transition-colors duration-500 text-white py-4";

  return (
    <>
      <Show when={!restaurant()}>
        <NotFoundPage />
      </Show>
      <Show when={restaurant()}>
        <div class="flex justify-center items-center p-8">
          <div class="border-2 border-black grow h-0" />
          <div class="border-4 border-black px-8 py-8 rounded-[50%] bg-gray-300">
            <h1 class="text-center text-4xl font-bold">Tables for {restaurant()?.name}</h1>
          </div>
          <div class="border-2 border-black grow h-0" />
        </div>
        <div class="border-4 border-black grow h-0 mx-4" />
        <div class="grid md:grid-cols-2 gap-8 p-8">
          <div class="md:col-span-2">
            <div class="grid sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-5 2xl:grid-cols-6 gap-16">
              <For each={tables()?.data}>{(table, i) =>
                <TableIcon restaurant={params.id} id={table.id} seats={table.seats} occupied={occupied().includes(i())} />
              }</For>
            </div>
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