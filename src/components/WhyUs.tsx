"use client";

import { motion } from "framer-motion";


export default function WhyUs(){


const reasons = [

{
icon:"🎬",
title:"خبرة إعلامية",
text:"نمتلك خبرة في صناعة المحتوى والإنتاج الإعلامي بمختلف أنواعه."
},


{
icon:"💡",
title:"أفكار إبداعية",
text:"نقدم أفكارًا مبتكرة تساعد العلامات التجارية على التميز."
},


{
icon:"⚡",
title:"سرعة في التنفيذ",
text:"نلتزم بالمواعيد ونقدم الأعمال بجودة عالية وفي الوقت المحدد."
},


{
icon:"⭐",
title:"جودة احترافية",
text:"نستخدم أحدث الأساليب والأدوات لإنتاج محتوى مميز."
}


];





return (

<section

className="
py-24
bg-[#F5F7FA]
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

لماذا نحن؟

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
md:grid-cols-4
gap-8
"

>



{

reasons.map((item,index)=>(


<motion.div

key={index}

className="
bg-white
rounded-3xl
p-8
shadow-lg
text-center
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



<div

className="
text-5xl
mb-5
"

>

{item.icon}

</div>




<h3

className="
text-2xl
font-bold
text-[#0B1F3A]
mb-4
"

>

{item.title}

</h3>




<p

className="
text-gray-600
leading-8
"

>

{item.text}

</p>



</motion.div>


))


}



</div>



</div>



</section>


);


}