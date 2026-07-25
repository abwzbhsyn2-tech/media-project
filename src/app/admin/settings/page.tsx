"use client";

import { useEffect, useState } from "react";


export default function SettingsPage(){


const [companyName,setCompanyName] = useState("");

const [description,setDescription] = useState("");

const [phone,setPhone] = useState("");

const [whatsapp,setWhatsapp] = useState("");

const [email,setEmail] = useState("");

const [address,setAddress] = useState("");





useEffect(()=>{


const data = JSON.parse(

localStorage.getItem("settings") || "{}"

);



setCompanyName(data.companyName || "");

setDescription(data.description || "");

setPhone(data.phone || "");

setWhatsapp(data.whatsapp || "");

setEmail(data.email || "");

setAddress(data.address || "");



},[]);







function saveSettings(){



const data = {


companyName,

description,

phone,

whatsapp,

email,

address


};



localStorage.setItem(

"settings",

JSON.stringify(data)

);



alert("تم حفظ الإعدادات ✅");


}





return (

<div className="min-h-screen bg-[#F5F7FA] p-10">


<h1 className="text-4xl font-bold text-[#0B1F3A] mb-10">

إعدادات الشركة

</h1>




<div className="bg-white rounded-2xl shadow p-8 max-w-3xl">



<input

value={companyName}

onChange={(e)=>setCompanyName(e.target.value)}

className="w-full border p-3 rounded mb-4"

placeholder="اسم الشركة"

/>





<textarea

value={description}

onChange={(e)=>setDescription(e.target.value)}

className="w-full border p-3 rounded mb-4"

placeholder="وصف الشركة"

/>






<input

value={phone}

onChange={(e)=>setPhone(e.target.value)}

className="w-full border p-3 rounded mb-4"

placeholder="رقم الهاتف"

/>






<input

value={whatsapp}

onChange={(e)=>setWhatsapp(e.target.value)}

className="w-full border p-3 rounded mb-4"

placeholder="رقم الواتساب"

/>






<input

value={email}

onChange={(e)=>setEmail(e.target.value)}

className="w-full border p-3 rounded mb-4"

placeholder="البريد الإلكتروني"

/>






<input

value={address}

onChange={(e)=>setAddress(e.target.value)}

className="w-full border p-3 rounded mb-4"

placeholder="العنوان"

/>






<button

onClick={saveSettings}

className="bg-[#F9C846] text-[#0B1F3A] px-10 py-3 rounded-full font-bold"

>

حفظ الإعدادات

</button>



</div>


</div>

);


}