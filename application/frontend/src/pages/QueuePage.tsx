import { useNavigate, useParams } from "@solidjs/router";
import { For, createSignal } from "solid-js";
import QueueRow from "../components/QueueRow";
import { getInfo, getQueue } from "../utils/data";
import { uriHome } from "../utils/uri";
import { pseudoRandint, time } from "../utils/util";

export default function QueuePage() {
  const navigate = useNavigate();
  const params = useParams();
  
  const [info, setInfo] = createSignal(getInfo(params.id));
  const rands = pseudoRandint(params.id, 0, 10, 2, params.id.length);
  const [peopleWaiting, setPeopleWaiting] = createSignal(getQueue(params.id, rands[1]));
  
  const interact = "w-full rounded-lg bg-black hover:bg-gray-700 transition-colors duration-500 text-white py-4";

  return (
    <>
      <div class="space-y-8 p-8">
        <div class="overflow-x-auto rounded-lg">
          <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400 rounded-lg overflow-hidden">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
              <tr>
                <th scope="col" class="p-8">
                  Pic
                </th>
                <th scope="col" class="w-64 md:w-128 lg:w-512 pl-12">
                  Name
                </th>
                <th scope="col" class="w-64 md:w-128 lg:w-512 pl-8">
                  Estimated Wait time
                </th>
                <th scope="col" class="w-64 md:w-128 lg:w-512 pl-8">
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              <For each={peopleWaiting()}>{(personWaiting, i) =>
                <QueueRow
                  pic={personWaiting.pic}
                  name={personWaiting.name}
                  eta={i() < rands[0] ? "Ready!" : time((1 + i() - rands[0]) * 15)}
                  isOnline
                />
              }</For>
            </tbody>
          </table>
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
    </>

  );
}