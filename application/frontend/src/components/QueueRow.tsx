import { Show } from "solid-js";

export default function QueueRow(props: {
  pic: string,
  name: string,
  eta: string,
  status?: boolean
}) {
  return (
    <>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="w-4 p-4">
          <div class="flex items-center">
            <Show when={props.pic === "Your Picture" && props.name === "Your Name"}>
              <svg fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-12 h-12">
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M17.982 18.725A7.488 7.488 0 0 0 12 15.75a7.488 7.488 0 0 0-5.982 2.975m11.963 0a9 9 0 1 0-11.963 0m11.963 0A8.966 8.966 0 0 1 12 21a8.966 8.966 0 0 1-5.982-2.275M15 9.75a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z"
                />
              </svg>
            </Show>
            <Show when={props.pic !== "Your Picture" && props.name !== "Your Here"}>
              <img class="w-12 h-12 rounded-full object-cover" src={props.pic} alt={`${props.name} image`} />
            </Show>
          </div>
        </td>
        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
          <div class="ps-3">
            <div class="text-base font-semibold">{props.name}</div>
          </div>
        </th>
        <td class="px-8 py-4">
          {props.eta}
        </td>
        <td class="px-6 py-4">
          <div class="flex items-center">
            <div class="h-2.5 w-2.5 rounded-full me-2" classList={{ "bg-green-500": props.status, "bg-red-500": !props.status }}></div> {props.status ? "Online" : "Offline"}
          </div>
        </td>
      </tr>
    </>
  );
}