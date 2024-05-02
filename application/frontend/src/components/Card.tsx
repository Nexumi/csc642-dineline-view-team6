import { useNavigate } from "@solidjs/router";
import toast from "solid-toast";
import { uriMenu } from "../utils/uri";

export default function Card(props: {
  data: {
    name: string,
    description: string,
    img: string,
    alt?: string,
    id: number
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
            src={props.data.img}
            alt={props.data.alt}
            class="w-96 h-64 object-cover"
          />
        </div>
        <div class="flex items-center gap-x-2">
          <button
            class={interact}
            onClick={() => {
              navigate(uriMenu(props.data.id))
            }}
          >
            Menu
          </button>
          <button
            class={interact}
            onClick={() => {
              toast.error("WIP");
            }}
          >
            Tables
          </button>
          <button
            class={interact}
            onClick={() => {
              toast.error("WIP");
            }}
          >
            Queue
          </button>
        </div>
      </div>
    </>
  );
}