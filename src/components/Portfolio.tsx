import { PrismaClient } from "@prisma/client";
import { motion } from "framer-motion";


const prisma = new PrismaClient();



export default async function Portfolio() {


const projects = await prisma.project.findMany({

orderBy:{
createdAt:"desc"
}

});



return (

<section

id="work"

className="py-24 bg-[#F5F7FA]"

>

<div className="max-w-7xl mx-auto px-6">



<motion.h2

className="
text-5xl
font-bold
text-center
text-[#0B1F3A]
mb-6
"

>

أعمالنا

</motion.h2>




<div className="
w-24
h-1
bg-[#F9C846]
mx-auto
mb-14
rounded-full
">

</div>





<div className="
grid
grid-cols-1
md:grid-cols-3
gap-8
">


{


projects.map((project)=>(


<div

key={project.id}

className="
bg-white
rounded-3xl
overflow-hidden
shadow-lg
"

>


<img

src={project.image}

alt={project.name}

className="
w-full
h-60
object-cover
"

/>



<div className="p-8">


<h3 className="
text-2xl
font-bold
text-[#0B1F3A]
mb-4
">

{project.name}

</h3>




<p className="
text-gray-600
leading-8
">

{project.desc}

</p>


</div>


</div>


))


}



</div>



</div>


</section>

);


}