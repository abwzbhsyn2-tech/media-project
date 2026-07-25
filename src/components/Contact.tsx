"use client";

import { useEffect, useState } from "react";


export default function Contact(){

const [settings,setSettings] = useState<any>({});


useEffect(()=>{

const data = JSON.parse(
localStorage.getItem("settings") || "{}"
);

setSettings(data);

},[]);



return (

<section 
id="contact"
className="py-24 bg-[#F5F7FA]"
>


<div className="max-w-7xl mx-auto px-6">



<h2 className="text-5xl font-bold text-center text-[#0B1F3A]">

تواصل معنا

</h2>


<div className="w-24 h-1 bg-[#F9C846] mx-auto mt-4 mb-14 rounded-full"></div>




<div className="grid md:grid-cols-2 gap-10">



{/* معلومات التواصل */}


<div className="bg-[#0B1F3A] text-white rounded-2xl p-10">


<h3 className="text-3xl font-bold text-[#F9C846] mb-8">

معلومات الشركة

</h3>



<p className="mb-5 text-lg">

📞 {settings.phone || "رقم الهاتف"}

</p>



<p className="mb-5 text-lg">

💬 {settings.whatsapp || "واتساب"}

</p>



<p className="mb-5 text-lg">

✉️ {settings.email || "البريد الإلكتروني"}

</p>



<p className="text-lg">

📍 {settings.address || "العنوان"}

</p>



</div>





{/* النموذج */}


<div className="bg-white rounded-2xl shadow p-10">


<input

className="w-full border p-4 rounded mb-5"

placeholder="الاسم"

/>



<input

className="w-full border p-4 rounded mb-5"

placeholder="رقم الهاتف"

/>



<input

className="w-full border p-4 rounded mb-5"

placeholder="البريد الإلكتروني"

/>



<textarea

className="w-full border p-4 rounded mb-5"

placeholder="اكتب رسالتك"

rows={5}

/>



<button

className="bg-[#F9C846] text-[#0B1F3A] px-10 py-3 rounded-full font-bold"

>

إرسال الرسالة

</button>



</div>



</div>


</div>


</section>

);

}