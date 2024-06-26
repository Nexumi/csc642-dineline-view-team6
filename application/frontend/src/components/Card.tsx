import { useNavigate } from "@solidjs/router";
import toast from "solid-toast";
import { uriInfo, uriMenu, uriTables, uriQueue } from "../utils/uri";

export default function Card(props: {
  data: {
    name: string,
    description: string,
    img: string,
    alt?: string,
    id: string
  }
}) {
  const navigate = useNavigate();

  const interact = "grow rounded-lg bg-black hover:bg-gray-700 transition-colors duration-500 text-white py-1";

  return (
    <>
      <div class="w-full py-2 px-3 bg-gray-300 border border-black rounded-lg space-y-2 hover:scale-105 transition-transform duration-500">
        <div class="flex flex-col-reverse sm:flex-row md:flex-col-reverse xl:flex-row items-center">
          <div class="grow text-center my-2">
            <h2 class="text-3xl">{props.data.name}</h2>
            <p class="text-gray-700 px-8">{props.data.description}</p>
          </div>
          <img
            class="w-96 h-64 object-cover"
            src={props.data.img}
            alt={props.data.alt}
          />
        </div>
        <div class="flex items-center gap-x-2">
          <svg
            fill="none"
            viewBox="0 0 24 24"
            stroke-width="1.5"
            stroke="currentColor"
            class="w-6 h-6 cursor-pointer hover:text-gray-700 transition-color hover:scale-110 transition-transform duration-500"
            onClick={() => {
              navigate(uriInfo(props.data.id));
            }}
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              d="m11.25 11.25.041-.02a.75.75 0 0 1 1.063.852l-.708 2.836a.75.75 0 0 0 1.063.853l.041-.021M21 12a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9-3.75h.008v.008H12V8.25Z"
            />
          </svg>
          <button
            class={interact}
            onClick={() => {
              navigate(uriMenu(props.data.id));
            }}
          >
            Menu
          </button>
          <button
            class={interact}
            onClick={() => {
              navigate(uriTables(props.data.id));
            }}
          >
            Tables
          </button>
          <button
            class={interact}
            onClick={() => {
              navigate(uriQueue(props.data.id));
            }}
          >
            Queue
          </button>
        </div>
      </div>
    </>
  );
}