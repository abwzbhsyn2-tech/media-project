"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {

const [open,setOpen] = useState(false);


return (

<header className="
w-full
bg-[#0B1F3A]
text-white
shadow-lg
relative
z-50
">


<div className="
flex
justify-between
items-center
px-5
py-4
md:px-10
">


<div className="flex items-center gap-3">

<Image
src="/images/logo.jpg"
alt="الطريق ميديا"
width={50}
height={50}
className="rounded-full"
/>


<h1 className="
text-xl
md:text-3xl
font-bold
text-[#F9C846]
">
الطريق ميديا
</h1>


</div>



{/* زر الموبايل */}

<button

className="
md:hidden
text-3xl
"

onClick={()=>setOpen(!open)}

>

☰

</button>



<nav className="
hidden
md:flex
gap-8
text-lg
">


<a href="/">الرئيسية</a>

<a href="#about">من نحن</a>

<a href="#services">الخدمات</a>

<a href="#work">أعمالنا</a>

<a href="/admin">الإدارة</a>


</nav>


</div>




{/* قائمة الموبايل */}

{

open && (

<nav className="
md:hidden
flex
flex-col
text-center
gap-5
pb-6
text-lg
">


<a href="/">الرئيسية</a>

<a href="#about">من نحن</a>

<a href="#services">الخدمات</a>

<a href="#work">أعمالنا</a>

<a href="/admin">الإدارة</a>


</nav>

)

}


</header>


);

}