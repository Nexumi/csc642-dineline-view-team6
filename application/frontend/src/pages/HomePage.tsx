export default function HomePage() {
  return (
    <>
      <h1 class = "mb-4 text-4xl font-extrabold leading-none tracking-tight text-gray-900 md:text-5xl lg:text-6xl dark:text-white">Welcome to Dineline!</h1>
      {/* <div class="flex flex-wrap">
    {/* <!-- First grid box --> */}
    {/* <div class="w-1/2 px-2">
        <div class="text-gray-700 text-center bg-red-400 px-4 py-32 m-2">1</div>
    </div>
    
    {/* <!-- Second grid box --> */}
    {/* <div class="w-1/2 px-2">
        <div class="text-gray-700 text-center bg-red-400 px-4 py-32 m-2">2</div>
    </div>

    <div class="w-1/2 px-2">
        <div class="text-gray-700 text-center bg-green-400 px-4 py-32 m-2">3</div>
    </div> */}
    
    {/* <!-- Second grid box --> */}
    {/* <div class="w-1/2 px-2">
        <div class="text-gray-700 text-center bg-green-400 px-4 py-32 m-2">4</div>
    </div>

    <div class="w-1/2 px-2">
        <div class="text-gray-700 text-center bg-blue-400 px-4 py-32 m-2">1</div>
    </div>
     */}
    {/* <!-- Second grid box --> */}
    {/* <div class="w-1/2 px-2">
        <div class="text-gray-700 text-center bg-violet-400 px-4 py-32 m-2">2</div>
    </div> */}

    {/* <!-- Add more grid boxes as needed --> */}

{/* </div> */}

      {/* <div class="w-full h-screen flex justify-center items-center">
        <div class="bg-black text-white p-20 rounded-2xl">
          <p>I'm a box!</p>
        </div> */}
      {/* </div> */}
      <div class="max-w-sm rounded overflow-hidden shadow-lg">
      <img class="w-full" src="https://media.istockphoto.com/id/1018141890/photo/two-empty-wine-glasses-sitting-in-a-restaurant-on-a-warm-sunny-afternoon.jpg?s=1024x1024&w=is&k=20&c=ZdrtpMYD1p5sJiTsLVwPdLYcyJhbKzgX4heqjy7Pmls=" alt="restaurant"/>
      <div class="px-6 py-4">
        <div class="font-bold text-xl mb-2">Restaurant 1</div>
        <p class="text-gray-700 text-base">
          Fine dining in the hills of vienna.
        </p>
      </div>
      <div class="px-6 pt-4 pb-2">
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#photography</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#travel</span>
        <span class="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#winter</span>
      </div>
    </div>
    </>
  );
}