import React from "react";
import Image from "next/image";

export default function Footer(){
    return(
        <footer>
            <div className="flex justify-between bg-rose-200 w-full h-48 p-4">
                <p>
                    <b>Contact us</b>
                    <ul>
                        <li>call:+923000725776</li>
                        <li>support@allurebeauty.pk</li>
                        <li>Dolmen mall,Clifton</li>
                    </ul>
                </p>

                <p>
                    <b>Information</b>
                    <ul>
                        <li>Contact Us</li>
                        <li>FAQs</li>
                        <li>About Us</li>
                        <li>Return & Exchange</li>
                        <li>Terms & Condition</li>
                    </ul>
                </p>

                <p>
                    <b>Newsletter</b>
                    <p>Subscribe for store update and discount</p>
                    <input type="text" placeholder="Your email" className="p-2"/>
                    <button className="bg-black text-white px-2 py-2 ml-2">Subscribe</button>
                </p>
                <Image src="/image2.jpg" alt="image2" width={200} height={100}/>

            </div>
            <div>Made by Hafsa Ahmed</div>
        </footer>
    )
}