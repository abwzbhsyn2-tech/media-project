"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";


export default function Footer(){


const [settings,setSettings] = useState<any>({});


useEffect(()=>{


const data = JSON.parse(

localStorage.getItem("settings") || "{}"

);


setSettings(data);


},[]);





return (

<footer

className="
bg-[#0B1F3A]
text-white
py-16
"

>


<div

className="
max-w-7xl
mx-auto
px-6
grid
md:grid-cols-4
gap-10
"

>



{/* الشركة */}

<motion.div

initial={{
opacity:0,
y:30
}}

whileInView={{
opacity:1,
y:0
}}

viewport={{
once:true
}}

>


<img

src="/images/logo.jpg"

alt="logo"

className="
w-24
h-24
object-contain
rounded-xl
mb-5
"

/>



<h2

className="
text-3xl
font-bold
text-[#F9C846]
"

>

{

settings.companyName ||

"الطريق ميديا"

}

</h2>



<p

className="
mt-4
text-gray-300
leading-8
"

>

{

settings.description ||

"شركة متخصصة في الإنتاج الإعلامي وصناعة المحتوى الإبداعي."

}

</p>



</motion.div>









{/* روابط */}

<div>


<h3

className="
text-xl
font-bold
mb-5
"

>

روابط سريعة

</h3>


<ul className="
space-y-3
text-gray-300
">


<li>
<a href="#about" className="hover:text-[#F9C846]">
من نحن
</a>
</li>


<li>
<a href="#services" className="hover:text-[#F9C846]">
خدماتنا
</a>
</li>


<li>
<a href="#work" className="hover:text-[#F9C846]">
أعمالنا
</a>
</li>


<li>
<a href="#contact" className="hover:text-[#F9C846]">
تواصل معنا
</a>
</li>


</ul>


</div>








{/* التواصل */}

<div>


<h3

className="
text-xl
font-bold
mb-5
"

>

تواصل معنا

</h3>



<p className="text-gray-300 mb-3">

📞 {settings.phone || "رقم الهاتف"}

</p>



<p className="text-gray-300">

✉️ {settings.email || "البريد الإلكتروني"}

</p>


</div>









{/* السوشال */}

<div>


<h3

className="
text-xl
font-bold
mb-5
"

>

تابعنا

</h3>



<div className="
flex
gap-4
">


<a

className="
bg-[#F9C846]
text-[#0B1F3A]
w-10
h-10
rounded-full
flex
items-center
justify-center
font-bold
"

>

f

</a>



<a

className="
bg-[#F9C846]
text-[#0B1F3A]
w-10
h-10
rounded-full
flex
items-center
justify-center
font-bold
"

>

◎

</a>



</div>


</div>





</div>





<div

className="
border-t
border-white/20
mt-12
pt-6
text-center
text-gray-400
"

>

© {new Date().getFullYear()} جميع الحقوق محفوظة - الطريق ميديا

</div>




</footer>

);


}