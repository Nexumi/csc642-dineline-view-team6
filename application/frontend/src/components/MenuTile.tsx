import { For, Show } from "solid-js";
import { cash, menuSum } from "../utils/util";

export default function MenuTile(props: {
  title: string,
  items: {
    name: string,
    price: number,
    count?: number
  }[] | undefined,
  order?: Function,
  setOrder?: Function,
  isOrder?: boolean
}) {
  return (
    <>
      <div class="flex justify-center">
        <div class="w-full border border-black bg-gray-300 px-8 py-4 rounded-lg select-none">
          <div class="text-xl text-center underline mb-2">{props.title}</div>
          <For each={props.items}>{(item) =>
            <div class="flex items-center">
              <Show when={!props.isOrder && props.order && props.setOrder}>
                <Count
                  item={item}
                  order={props.order || (() => {})}
                  setOrder={props.setOrder || (() => {})}
                />
              </Show>
              <p>&nbsp;{item.name}</p>
              <div class="grow h-0 border-t-2 border-black border-dotted mx-2" />
              <p>{cash(item.price)}
                <Show when={props.isOrder && item.count}>
                  &nbsp;x {item.count} = {cash(item.price * (item.count || 0))}&nbsp;
                </Show>
              </p>
              <Show when={props.isOrder && item.count}>
                <Count
                  item={item}
                  order={props.order || (() => {})}
                  setOrder={props.setOrder || (() => {})}
                  isSubstract
                />
                <Count
                  item={item}
                  order={props.order || (() => {})}
                  setOrder={props.setOrder || (() => {})}
                />
              </Show>
            </div>
          }</For>
          <Show when={props.isOrder && props.items}>
            <div class="border-t border-black text-right mt-2">
              <p>Subtotal: {cash(menuSum(props.items))}</p>
              <p>SF Tax (8.625%): {cash(menuSum(props.items) * 0.08625)}</p>
              <p>Total: {cash(menuSum(props.items) * 1.08625)}</p>
            </div>
          </Show>
        </div>
      </div>
    </>
  );
}

function Count(props: {
  item: {
    name: string,
    price: number,
    count?: number
  }
  order: Function,
  setOrder: Function,
  isSubstract?: boolean
}) {
  return (
    <>
      <svg
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 shrink-0 cursor-pointer hover:scale-110 transition-transform duration-500"
        onClick={() => {
          if (props.order && props.setOrder) {
            const index = props.order().findIndex((order: { name: string, price: number, count: number }) => order.name === props.item.name);
            if (index !== -1) {
              props.order()[index] = {
                ...props.order()[index],
                count: props.order()[index].count + (props.isSubstract ? -1 : 1)
              }
              if (!props.order()[index].count) {
                props.order().splice(index, 1)
              }
              props.setOrder([
                ...props.order()
              ]);
            } else {
              props.setOrder([
                ...props.order(),
                { name: props.item.name, price: props.item.price, count: 1 }
              ]);
            }
          }
        }}
      >
        <path
          stroke-linecap="round"
          stroke-linejoin="round"
          d={props.isSubstract ? "M15 12H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" : "M12 9v6m3-3H9m12 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z"}
        />
      </svg>
    </>
  );
}
