import Image from "next/image"

export default function Navbar(){
    return(
        <header>
            <nav className="flex bg-black w-full h-20 gap-3 mt-4">
        <div className="flex w-full h-34 gap-3 mt-4 bg-black">
        <div className="flex">
            <Image src="/image1.jpg" alt="image1" width={150} height={50}/>
        </div>
          
           <input type="text" placeholder="Search" className="w-4/12 h-10 ml-36" />
           <div className="flex justify-evenly items-center m-4 ml-32 p-2 gap-6 ">
           <button type="button" className="border-black rounded-2xl text-white hover:bg-gray-900 px-2 ">Log in</button>
           <button type="button" className="border-black rounded-2xl text-white hover:bg-gray-900 px-2 ">Cart</button>
           </div>
        </div>
        </nav>
        </header>
    )
}