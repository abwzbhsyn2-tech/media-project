"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function Services(){


const [services,setServices] = useState<any[]>([]);



useEffect(()=>{


const data = JSON.parse(

localStorage.getItem("services") || "[]"

);


setServices(data);


},[]);





return (

<section

id="services"

className="
py-24
bg-white
"

>


<div

className="
max-w-7xl
mx-auto
px-6
"

>





<motion.h2

className="
text-5xl
font-bold
text-center
text-[#0B1F3A]
mb-6
"

initial={{
opacity:0,
y:-40
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

>

خدماتنا

</motion.h2>





<div

className="
w-24
h-1
bg-[#F9C846]
mx-auto
mb-14
rounded-full
"

>

</div>







<div

className="
grid
grid-cols-1
sm:grid-cols-2
md:grid-cols-3
gap-6
md:gap-8
"

>


{


services.length > 0 ? (


services.map((service,index)=>(


<motion.div

key={index}

className="
bg-[#F5F7FA]
rounded-3xl
overflow-hidden
shadow-lg
"

initial={{
opacity:0,
y:50
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

transition={{
duration:0.5,
delay:index * 0.15
}}

whileHover={{
y:-10
}}

>





{service.image && (

<img

src={service.image}

alt={service.title}

className="
w-full
h-48
md:h-56
object-cover
"

/>

)}







<div

className="
p-8
"

>


<h3

className="
text-2xl
font-bold
text-[#0B1F3A]
mb-4
"

>

{service.title}

</h3>





<p

className="
text-gray-600
leading-8
"

>

{service.description}

</p>



</div>



</motion.div>



))


)

:

(


<motion.p

className="
text-center
text-gray-500
col-span-3
"

initial={{
opacity:0
}}

whileInView={{
opacity:1
}}

>

لا توجد خدمات مضافة حاليًا

</motion.p>


)



}



</div>



</div>


</section>


);


}