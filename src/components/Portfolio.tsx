"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function Portfolio(){


const [projects,setProjects] = useState<any[]>([]);



useEffect(()=>{

async function getProjects(){

try{

const res = await fetch("/api/projects", {
  cache:"no-store"
});

const data = await res.json();

setProjects(data);

}

catch(error){

console.log(error);

}

}


getProjects();


},[]);





return (

<section

id="work"

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

transition={{
duration:0.8
}}

>

أعمالنا

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
md:grid-cols-3
gap-8
"

>



{

projects.length > 0 ? (


projects.map((project,index)=>(


<motion.div

key={index}

className="
bg-white
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



{/* الصورة */}

{

project.image &&

<img

src={project.image}

alt={
project.title ||
project.name ||
"Project"
}

className="
w-full
h-60
object-cover
"

/>

}






{/* معلومات المشروع */}

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

{

project.title ||

project.name ||

project.projectName ||

"مشروع إعلامي"

}

</h3>






<p

className="
text-gray-600
leading-8
"

>

{

project.description ||

project.desc ||

project.details ||

"إنتاج وتصوير محتوى إعلامي احترافي"

}

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

لا توجد أعمال مضافة حاليًا

</motion.p>


)



}



</div>



</div>



</section>


);


}