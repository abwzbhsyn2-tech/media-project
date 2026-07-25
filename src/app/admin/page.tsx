"use client";

import { useRouter } from "next/navigation";
import Link from "next/link";


export default function Admin(){


const router = useRouter();



async function logout(){

console.log("Logout clicked");


const res = await fetch("/api/auth/logout",{
method:"POST"
});


const data = await res.json();


console.log(data);


router.push("/admin/login");


}



const cards = [

{
title:"إعدادات الشركة",
description:"تعديل اسم الشركة، الوصف، الهاتف وبيانات التواصل",
link:"/admin/settings",
icon:"⚙️"
},


{
title:"إدارة الخدمات",
description:"إضافة وتعديل وحذف خدمات الشركة",
link:"/admin/services",
icon:"🎬"
},


{
title:"إدارة المشاريع",
description:"إدارة أعمال الشركة والصور والمشاريع",
link:"/admin/projects",
icon:"📸"
},


{
title:"العودة للموقع",
description:"مشاهدة الموقع الرئيسي",
link:"/",
icon:"🌐"
}

];




return (


<div

className="
min-h-screen
bg-[#F5F7FA]
flex
"

>



{/* Sidebar */}

<aside

className="
w-72
bg-[#0B1F3A]
text-white
p-8
hidden
md:block
"

>


<h1

className="
text-3xl
font-bold
text-[#F9C846]
mb-10
"

>

الطريق ميديا

</h1>



<nav className="space-y-5">



<Link

href="/admin"

className="
block
hover:text-[#F9C846]
"

>

🏠 الرئيسية

</Link>



<Link

href="/admin/settings"

className="
block
hover:text-[#F9C846]
"

>

⚙️ إعدادات الشركة

</Link>



<Link

href="/admin/services"

className="
block
hover:text-[#F9C846]
"

>

🎬 الخدمات

</Link>



<Link

href="/admin/projects"

className="
block
hover:text-[#F9C846]
"

>

📸 المشاريع

</Link>



<Link

href="/"

className="
block
hover:text-[#F9C846]
"

>

🌐 الموقع

</Link>



</nav>



</aside>






{/* Content */}


<main

className="
flex-1
p-10
"

>


<div className="flex justify-between items-center mb-10">


<h2

className="
text-5xl
font-bold
text-[#0B1F3A]
"

>

لوحة التحكم

</h2>




<button

onClick={logout}

className="
bg-red-500
text-white
px-6
py-3
rounded-xl
font-bold
hover:bg-red-600
transition
"

>

تسجيل الخروج

</button>


</div>







<div

className="
grid
md:grid-cols-2
xl:grid-cols-3
gap-8
"

>


{

cards.map((card,index)=>(


<Link

key={index}

href={card.link}

className="
bg-white
rounded-3xl
p-8
shadow-lg
hover:-translate-y-2
transition
border
border-gray-100
"

>


<div

className="
text-5xl
mb-5
"

>

{card.icon}

</div>




<h3

className="
text-2xl
font-bold
text-[#0B1F3A]
"

>

{card.title}

</h3>




<p

className="
mt-4
text-gray-600
leading-8
"

>

{card.description}

</p>




</Link>


))


}



</div>



</main>



</div>


);


}