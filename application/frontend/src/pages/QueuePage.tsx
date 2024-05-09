import { useNavigate } from "@solidjs/router";
import { uriHome } from "../utils/uri";
import QueueRow from "../components/QueueRow";

export default function QueuePage() {
  const navigate = useNavigate();
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
              <QueueRow
                pic="https://media.licdn.com/dms/image/D5603AQG4GDur-S61EQ/profile-displayphoto-shrink_800_800/0/1711840440972?e=2147483647&v=beta&t=B8-CWuTcX2yaTOMxaC9MjOWl058AlHiG1_oTKysGk4w"
                name="Aria Samandi"
                eta="1 Hour and 50 Minutes"
                isOnline
              />
              <QueueRow
                pic="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D"
                name="Bonnie Green"
                eta="1 Hour and 55 Minutes"
                isOnline
              />
              <QueueRow
                pic="https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg"
                name="Jese Leos"
                eta="2 Hour and 5 Minutes"
                isOnline
              />
              <QueueRow
                pic="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=0&k=20&c=mt-Bsap56B_7Lgx1fcLqFVXTeDbIOILVjTdOqrDS54s="
                name="Thomas Lean"
                eta="2 Hour and 15 Minutes"
                isOnline
              />
              <QueueRow
                pic="https://media.istockphoto.com/id/1296158947/photo/portrait-of-creative-trendy-black-african-male-designer-laughing.jpg?s=612x612&w=0&k=20&c=1Ws_LSzWjYvegGxHYQkkgVytdpDcnmK0upJyGOzEPcg="
                name="Leslie Livingston"
                eta="2 Hours and 30 Minutes"
              />
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