import { For, createSignal } from "solid-js";
import { pseudoRandint } from "../utils/util";

export default function TableIcon(props: {
  restaurant: string,
  id: string | number,
  seats: number,
  occupied: boolean
}) {
  const [amount, setAmount] = createSignal(pseudoRandint(props.restaurant.repeat(Number(props.id)), Math.max(props.seats - 3, 1), props.seats - 1)[0]);

  return (
    <>
      <div class="m-auto size-48 flex justify-center items-center">
        <div class="relative size-32 border-2 rounded-full">
          <p class="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2 font-bold text-3xl">{props.id}</p>
          <For each={[...Array(props.seats)]}>{(_, i) =>
            <Seat degree={360 / props.seats * i()} seated={props.occupied && i() < amount()} />
          }</For>
        </div>
      </div>
    </>
  );
}

function Seat(props: {
  degree?: number,
  seated: boolean
}) {
  return (
    <>
      <div class="absolute left-1/2 top-1/2 size-6 transform -translate-x-3 -translate-y-3" style={`--tw-rotate: ${(props.degree || 0) + 180}deg`}>
        <div class="w-full h-full rounded-full mt-20" classList={{ "bg-black": props.seated, "border-2 border-black": !props.seated }} />
      </div>
    </>
  );
}