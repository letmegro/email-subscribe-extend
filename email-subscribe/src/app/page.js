import Image from 'next/image'
import food from './imgs/image.jpg'
export default function Home() {
  return (
    <div class="flex items-center justify-center h-screen bg-zinc-700">
        {/* <!-- card background --> */}
        <div class="bg-zinc-800 p-2 mx-6 rounded-2xl">
            <div class="flex flex-col md:flex-row rounded-l-xl">
                {/* <!-- flex container --> */}
                <Image src={food} alt="" 
                class="object-fit rounded-xl md:w-64 h-80 md:h-64 md:rounded-l-xl md:rounded-r-none
                transform hover:scale-105 hover-rounded-xl duration-200"/>
                <div class="p-6 md:p-12">
                    <h2 class="font-serif text-xl font-medium text-center text-white md:text-left">
                        Subscribe to our diet and fitness newsletter
                    </h2>
                    <p class="max-w-sm my-4 sm:mx-7 md:mx-0 text-xs leading-5 tracking-wide text-center text-white md:text-left">
                        Eat better and healthier, change your diet, and meet your body goals.
                    </p>
                    <div class="flex flex-col mt-5 space-y-4 md:space-x-3 md:flex-row md:space-y-0">
                        <input type="text" placeholder="Enter your email address"
                        class="p-2 px-4 text-center text-white bg-zinc-800 border border-zinc-600 placeholder:text-xs
                        placeholder:text-center md:text-left placeholder:md:text-left focus:outline-none rounded-md"/>
                        <button class="px-5 py-3 text-xs rounded-md text-zinc-800 bg-lime-500
                        hover:bg-lime-700 hover:text-white duration-500">Subscribe</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
