"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function About(){


const [settings,setSettings] = useState<any>({});


useEffect(()=>{

const data = JSON.parse(
localStorage.getItem("settings") || "{}"
);

setSettings(data);

},[]);




return (

<section

id="about"

className="
py-24
bg-white
"

>


<div className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-2
gap-12
items-center
">





{/* النص */}

<motion.div

initial={{
opacity:0,
x:-50
}}

whileInView={{
opacity:1,
x:0
}}

viewport={{
once:true
}}

transition={{
duration:0.8
}}

>



<h2

className="
text-5xl
font-bold
text-[#0B1F3A]
mb-6
"

>

من نحن

</h2>




<div

className="
w-24
h-1
bg-[#F9C846]
mb-8
rounded-full
"

>

</div>





<p

className="
text-gray-600
text-xl
leading-10
"

>

{

settings.description ||

"الطريق ميديا شركة متخصصة في الإنتاج الإعلامي وصناعة المحتوى الإبداعي والإعلانات الرقمية."

}

</p>




</motion.div>









{/* الصورة */}

<motion.div

initial={{
opacity:0,
scale:0.8
}}

whileInView={{
opacity:1,
scale:1
}}

viewport={{
once:true
}}

transition={{
duration:0.8
}}

>



<img

src="/images/design.jpg"

alt="About Media"

className="
rounded-3xl
shadow-xl
w-full
h-[400px]
object-cover
"

/>



</motion.div>





</div>


</section>


);


}