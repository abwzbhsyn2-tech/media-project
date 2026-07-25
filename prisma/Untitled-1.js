"use client";

import { useEffect, useState } from "react";


export default function WhatsAppButton(){

const [whatsapp,setWhatsapp] = useState("");



useEffect(()=>{

const data = JSON.parse(
localStorage.getItem("settings") || "{}"
);


setWhatsapp(data.whatsapp || "");


},[]);




if(!whatsapp) return null;



return (

<a
href={`https://wa.me/${whatsapp}`}
target="_blank"
className="
fixed
bottom-6
right-6
bg-green-500
text-white
w-16
h-16
rounded-full
flex
items-center
justify-center
text-3xl
shadow-2xl
hover:scale-110
transition
z-50
"
>

💬

</a>

);

}