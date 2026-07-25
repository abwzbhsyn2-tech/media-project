"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function Header(){


const [companyName,setCompanyName] = useState("الطريق ميديا");

const [scrolled,setScrolled] = useState(false);



useEffect(()=>{


const data = JSON.parse(

localStorage.getItem("settings") || "{}"

);


if(data.companyName){

setCompanyName(data.companyName);

}




const handleScroll = ()=>{

if(window.scrollY > 50){

setScrolled(true);

}else{

setScrolled(false);

}

};


window.addEventListener(
"scroll",
handleScroll
);


return ()=>{

window.removeEventListener(
"scroll",
handleScroll
);

};



},[]);






return (


<motion.header

initial={{
y:-100
}}

animate={{
y:0
}}

transition={{
duration:0.6
}}

className={`
fixed
top-0
w-full
z-50
transition-all
duration-300

${

scrolled

?

"bg-[#0B1F3A] shadow-xl"

:

"bg-white shadow-md"

}

`}

>



<div

className="
max-w-7xl
mx-auto
px-6
py-3
flex
justify-between
items-center
"

>





{/* الشعار واسم الشركة */}


<div

className="
flex
items-center
gap-4
"

>


<img

src="/images/logo.jpg"

alt="logo"

className="
w-14
h-14
object-contain
rounded-lg
"

/>




<h1

className={`
text-2xl
font-bold

${

scrolled

?

"text-white"

:

"text-[#0B1F3A]"

}

`}

>

{companyName}

</h1>



</div>









{/* القائمة */}


<nav

className={`
hidden
md:flex
gap-8
font-bold

${
scrolled
?
"text-white"
:
"text-[#0B1F3A]"
}

`}

>


<a

href="/"

className="hover:text-[#F9C846] transition"

>

الرئيسية

</a>




<a

href="#about"

className="hover:text-[#F9C846] transition"

>

من نحن

</a>




<a

href="#services"

className="hover:text-[#F9C846] transition"

>

خدماتنا

</a>




<a

href="#work"

className="hover:text-[#F9C846] transition"

>

أعمالنا

</a>




<a

href="#contact"

className="hover:text-[#F9C846] transition"

>

تواصل معنا

</a>




<a

href="/admin"

className="
hover:text-[#F9C846]
transition
"

>

الإدارة

</a>


</nav>








{/* واتساب */}


<a

href="https://wa.me/962798862435"

target="_blank"

className="
hidden
md:block
bg-[#F9C846]
text-[#0B1F3A]
px-5
py-3
rounded-full
font-bold
hover:scale-105
transition
"

>

واتساب

</a>





</div>


</motion.header>


);


}