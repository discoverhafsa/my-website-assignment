import Image from "next/image"
import React from "react"

export default function HeroSection(){
    return(
        <>
        <div className=" flex justify-between flex-col w-full h-5/6 lg:flex-row bg-orange-100">
            <div className="flex justify-around w-full h-3/6 text-2xl">
                <p className="mt-6">We believe all <b>Women</b> <br /> are preety without <b>makeup</b>
                - but with right <br /> <b>makeup</b> can be preety <b>powerful.</b> <br /> <br />
                <button className="bg-orange-300 px-2 py-2 border rounded-2xl hover:bg-white"><b>Let Explore</b></button>
                </p> 
                <div className="flex flex-col lg:flex-row">
                <Image src="/hero1.jpg" alt="pic1" width={500} height={150} />
                </div>
            </div>
            </div>
            <section>
            <div className=" bg-orange-50 pt-5 ">
                <div className="flex justify-center text-center text-3xl"><b>Deals</b></div>
                <div className="flex flex-col justify-around lg:flex-row pt-5">

                    <div>
                <Image src="/hero2.jpg" alt="pic2" height={100} width={200}/>
                <p>Charlotte tillbury 7 Products </p>
                <p className="text-center">Rs 160,000</p>
                <div className="flex justify-center text-center">
                <button className="px-2 py-2 bg-orange-300 border rounded-2xl hover:bg-orange-50" ><b>Buy Now </b></button>
                </div></div>


                <div>
                <Image src="/hero3.jpg" alt="pic3" height={200} width={200} className="h-44"/>
                <p>Charlotte tillbury 7 Products </p>
                <p className="text-center">Rs 180,000</p>
                <div className="flex justify-center text-center">
                <button className="px-2 py-2 bg-orange-300 border rounded-2xl hover:bg-orange-50" ><b>Buy Now </b></button>
                </div></div>


                <div>
                <Image src="/hero4.jpg" alt="pic4" height={100} width={200} className="h-44"/>
                <p>Charlotte tillbury 7 Products </p>
                <p className="text-center">Rs 85,000</p>
                <div className="flex justify-center text-center">
                <button className="px-2 py-2 bg-orange-300 border rounded-2xl hover:bg-orange-50" ><b>Buy Now </b></button>
                </div></div>
                </div>
            </div>
            </section>
            <section>
            <div className=" bg-orange-50 pt-5">
                <div className="flex justify-center text-center text-3xl"><b>Products</b></div>
                <div className="flex flex-col justify-around lg:flex-row pt-5 pb-5">


                    <div>
                <Image src="/hero5.jpg" alt="pic5" height={100} width={200} />
                <p className="text-centre">CT Pillow Talk Lipstick </p>
                <p className="text-center">Rs 20,000</p>
                <div className="flex justify-center text-center">
                <button className="px-2 py-2 bg-orange-300 border rounded-2xl hover:bg-orange-50" ><b>Buy Now </b></button>
                </div></div>


                <div>
                <Image src="/hero6.jpg" alt="pic6" height={100} width={200}/>
                <p>CT GlowGasM Easy Highlighter </p>
                <p className="text-center">Rs 15,000</p>
                <div className="flex justify-center text-center">
                <button className="px-2 py-2 bg-orange-300 border rounded-2xl hover:bg-orange-50" ><b>Buy Now </b></button>
                </div></div>


                <div> 
                <Image src="/hero7.jpg" alt="pic7" height={100} width={200}/>
                <p className="text-center">CT Eyeshadow Pallete </p>
                <p className="text-center">Rs 30,000</p>
                <div className="flex justify-center text-center">
                <button className="px-2 py-2 bg-orange-300 border rounded-2xl hover:bg-orange-50" ><b>Buy Now </b></button>
                </div></div>


                </div>
            </div>
            </section>
            </>
        
    )
}

