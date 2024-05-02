import { useNavigate, useParams } from "@solidjs/router";
import { Show, createSignal } from "solid-js";
import { getMenu, getRestaurant } from "../utils/data";
import NotFoundPage from "./NotFoundPage";
import MenuTile from "../components/MenuTile";
import toast from "solid-toast";
import { uriHome } from "../utils/uri";

export default function MenuPage() {
  const navigate = useNavigate();
  const params = useParams();

  const [restaurant, setRestaurant] = createSignal(getRestaurant(params.id));
  const [menu, setMenu] = createSignal(getMenu(params.id));
  const [order, setOrder] = createSignal([]);
  
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
            <h1 class="text-center text-4xl font-bold">Menu for {restaurant()?.name}</h1>
          </div>
          <div class="border-2 border-black grow h-0" />
        </div>
        <div class="border-4 border-black grow h-0 mx-4" />
        <div class="grid md:grid-cols-2 gap-8 p-8">
          <MenuTile
            title="Appetizers"
            items={menu()?.appetizers}
            order={order}
            setOrder={setOrder}
          />
          <MenuTile
            title="Drinks"
            items={menu()?.drinks}
            order={order}
            setOrder={setOrder}
          />
          <MenuTile
            title="Mains"
            items={menu()?.mains}
            order={order}
            setOrder={setOrder}
          />
          <MenuTile
            title="Desserts"
            items={menu()?.desserts}
            order={order}
            setOrder={setOrder}
          />
          <div class="md:col-span-2">
            <MenuTile
              title="Your Orders"
              items={order()}
              order={order}
              setOrder={setOrder}
              isOrder
            />
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
            <button
              class={interact}
              onClick={() => {
                toast.error("WIP");
              }}
            >
              Checkout
            </button>
          </div>
        </div>
      </Show>
    </>
  );
}