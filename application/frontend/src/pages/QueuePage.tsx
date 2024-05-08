import { useNavigate, useParams } from "@solidjs/router";
import { uriHome } from "../utils/uri";

export default function QueuePage(){
    const navigate = useNavigate();
    const interact = "w-full rounded-lg bg-black hover:bg-gray-700 transition-colors duration-500 text-white py-4";

    return (
        <>
        <div class="relative overflow-x-auto shadow-md sm:rounded-lg">
            <table class="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
                <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                    <tr>
                        <th scope="col" class="p-8">
                            pic
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
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <img class="w-12 h-12 rounded-full" src="https://media.licdn.com/dms/image/D5603AQG4GDur-S61EQ/profile-displayphoto-shrink_800_800/0/1711840440972?e=2147483647&v=beta&t=B8-CWuTcX2yaTOMxaC9MjOWl058AlHiG1_oTKysGk4w" alt="Aria image"/>
                            </div> 
                        </td> 
                        <th scope="row" class="flex items-center px-6 py-4 text-gray-900 whitespace-nowrap dark:text-white">
                            <div class="ps-3">
                                <div class="text-base font-semibold">Aria Samandi</div>
                            </div>  
                        </th>
                        <td class="px-8 py-4">
                            1 Hour and 50 minutes
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                            </div>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <img class="w-12 h-12 rounded-full" src="https://images.unsplash.com/photo-1633332755192-727a05c4013d?q=80&w=1000&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8dXNlcnxlbnwwfHwwfHx8MA%3D%3D" alt="Jese image"/>
                            </div>
                        </td>
                        <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div class="ps-3">
                                <div class="text-base font-semibold">Bonnie Green</div>
                            </div>
                        </th>
                        <td class="px-6 py-4">
                            1 Hour and 55 Minutes
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                            </div>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <img class="w-12 h-12 rounded-full" src="https://img.freepik.com/free-photo/happiness-wellbeing-confidence-concept-cheerful-attractive-african-american-woman-curly-haircut-cross-arms-chest-self-assured-powerful-pose-smiling-determined-wear-yellow-sweater_176420-35063.jpg" alt="Jese image"/>
                            </div>
                        </td>
                        <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div class="ps-3">
                                <div class="text-base font-semibold">Jese Leos</div>
                            </div>
                        </th>
                        <td class="px-6 py-4">
                            2 Hours and 5 Minutes
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                            </div>
                        </td>
                    </tr>
                    <tr class="bg-white border-b dark:bg-gray-800 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <img class="w-12 h-12 rounded-full" src="https://media.istockphoto.com/id/1416048929/photo/woman-working-on-laptop-online-checking-emails-and-planning-on-the-internet-while-sitting-in.jpg?s=612x612&w=0&k=20&c=mt-Bsap56B_7Lgx1fcLqFVXTeDbIOILVjTdOqrDS54s=" alt="Jese image"/>
                            </div>
                        </td>
                        <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            <div class="ps-3">
                                <div class="text-base font-semibold">Thomas Lean</div>
                            </div>
                        </th>
                        <td class="px-6 py-4">
                            2 Hours and 15 Minutes
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-green-500 me-2"></div> Online
                            </div>
                        </td>
                    </tr>
                    <tr class="bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-600">
                        <td class="w-4 p-4">
                            <div class="flex items-center">
                                <img class="w-12 h-12 rounded-full" src="https://media.istockphoto.com/id/1296158947/photo/portrait-of-creative-trendy-black-african-male-designer-laughing.jpg?s=612x612&w=0&k=20&c=1Ws_LSzWjYvegGxHYQkkgVytdpDcnmK0upJyGOzEPcg=" alt="Jese image"/>
                            </div>
                        </td>
                        <th scope="row" class="flex items-center px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white">
                            
                            <div class="ps-3">
                                <div class="text-base font-semibold">Leslie Livingston</div>
                            </div>
                        </th>
                        <td class="px-6 py-4">
                            2 Hours and 30 Minutes
                        </td>
                        <td class="px-6 py-4">
                            <div class="flex items-center">
                                <div class="h-2.5 w-2.5 rounded-full bg-red-500 me-2"></div> Offline
                            </div>
                        </td>
                    </tr>
                </tbody>
            </table>
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