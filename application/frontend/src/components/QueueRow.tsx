export default function QueueRow(props: {
  pic: string,
  name: string,
  eta: string,
  isOnline?: boolean
}) {
  return (
    <>
      <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
        <td class="w-4 p-4">
          <div class="flex items-center">
            <img class="w-12 h-12 rounded-full object-cover" src={props.pic} alt={`${props.name} image`} />
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
            <div class="h-2.5 w-2.5 rounded-full me-2" classList={{ "bg-green-500" : props.isOnline, "bg-red-500" : !props.isOnline }}></div> {props.isOnline ? "Online" : "Offline"}
          </div>
        </td>
      </tr>
    </>
  );
}