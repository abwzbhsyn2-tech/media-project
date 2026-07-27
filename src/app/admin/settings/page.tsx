"use client";

import { useEffect, useState } from "react";


export default function SettingsPage(){


const [oldPassword,setOldPassword] = useState("");

const [newUsername,setNewUsername] = useState("");

const [newPassword,setNewPassword] = useState("");

const [accountMessage,setAccountMessage] = useState("");


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








async function updateAccount(){


const res = await fetch("/api/admin/update-account",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

oldPassword,

newUsername,

newPassword

})

});



const data = await res.json();




if(data.success){


setAccountMessage("تم تغيير بيانات الدخول بنجاح ✅");


setOldPassword("");

setNewUsername("");

setNewPassword("");


}

else{


setAccountMessage(data.message || "حدث خطأ");


}


}








return (


<div className="min-h-screen bg-[#F5F7FA] p-10">



<h1 className="text-4xl font-bold text-[#0B1F3A] mb-10">

إعدادات الشركة

</h1>





<div className="
bg-white
rounded-2xl
shadow
p-8
max-w-3xl
">





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

className="
bg-[#F9C846]
text-[#0B1F3A]
px-10
py-3
rounded-full
font-bold
"

>

حفظ الإعدادات

</button>








<div className="
mt-12
bg-gray-50
p-6
rounded-2xl
">





<h2 className="
text-2xl
font-bold
text-[#0B1F3A]
mb-6
">

تغيير بيانات الدخول

</h2>







<input

type="password"

value={oldPassword}

onChange={(e)=>setOldPassword(e.target.value)}

className="w-full border p-3 rounded mb-4"

placeholder="كلمة المرور الحالية"

/>








<input

value={newUsername}

onChange={(e)=>setNewUsername(e.target.value)}

className="w-full border p-3 rounded mb-4"

placeholder="اسم المستخدم الجديد"

/>








<input

type="password"

value={newPassword}

onChange={(e)=>setNewPassword(e.target.value)}

className="w-full border p-3 rounded mb-4"

placeholder="كلمة المرور الجديدة"

/>








<button

onClick={updateAccount}

className="
bg-[#0B1F3A]
text-white
px-10
py-3
rounded-full
font-bold
"

>

تحديث بيانات الدخول

</button>







<p className="
mt-4
text-center
font-bold
">

{accountMessage}

</p>







</div>






</div>




</div>


);


}