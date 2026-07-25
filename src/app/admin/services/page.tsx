"use client";

import { useEffect, useState } from "react";


interface Service {

  title:string;
  desc:string;

}



export default function ServicesAdmin(){


const [services,setServices] = useState<Service[]>([]);


const [title,setTitle] = useState("");

const [desc,setDesc] = useState("");

const [editIndex,setEditIndex] = useState<number|null>(null);



useEffect(()=>{

const data = JSON.parse(
localStorage.getItem("services") || "[]"
);


setServices(data);


},[]);





function saveService(){


if(!title || !desc){

alert("أكمل البيانات");

return;

}



let updated;



if(editIndex !== null){


updated = services.map((service,index)=>{


if(index === editIndex){

return {

title,

desc

};

}


return service;


});


alert("تم تعديل الخدمة ✅");



}else{


updated = [

...services,

{

title,

desc

}

];


alert("تم إضافة الخدمة ✅");


}





localStorage.setItem(

"services",

JSON.stringify(updated)

);



setServices(updated);


clearForm();


}






function editService(index:number){


const service = services[index];


setTitle(service.title);

setDesc(service.desc);

setEditIndex(index);


}





function deleteService(index:number){


const updated = services.filter(

(_,i)=>i !== index

);



localStorage.setItem(

"services",

JSON.stringify(updated)

);



setServices(updated);


}





function clearForm(){

setTitle("");

setDesc("");

setEditIndex(null);

}





return (


<div className="min-h-screen bg-[#F5F7FA] p-10">


<h1 className="text-4xl font-bold text-[#0B1F3A] mb-10">

إدارة الخدمات

</h1>





<div className="bg-white p-8 rounded-2xl shadow max-w-2xl mb-12">


<h2 className="text-2xl font-bold mb-6">

{editIndex !== null ? "تعديل الخدمة":"إضافة خدمة"}

</h2>




<input

value={title}

onChange={(e)=>setTitle(e.target.value)}

className="w-full border p-3 rounded mb-4"

placeholder="اسم الخدمة"

/>




<textarea

value={desc}

onChange={(e)=>setDesc(e.target.value)}

className="w-full border p-3 rounded mb-4"

placeholder="وصف الخدمة"

/>





<button

onClick={saveService}

className="bg-[#F9C846] text-[#0B1F3A] px-8 py-3 rounded-full font-bold"

>

حفظ

</button>



</div>







<h2 className="text-3xl font-bold mb-6">

الخدمات الحالية

</h2>




<div className="grid md:grid-cols-3 gap-8">


{

services.map((service,index)=>(


<div

key={index}

className="bg-white p-6 rounded-2xl shadow"

>


<h3 className="text-2xl font-bold text-[#0B1F3A]">

{service.title}

</h3>


<p className="text-gray-600 mt-4">

{service.desc}

</p>



<div className="flex gap-3 mt-5">


<button

onClick={()=>editService(index)}

className="bg-[#0B1F3A] text-white px-5 py-2 rounded-full"

>

تعديل

</button>




<button

onClick={()=>deleteService(index)}

className="bg-red-600 text-white px-5 py-2 rounded-full"

>

حذف

</button>


</div>


</div>


))

}


</div>


</div>


);


}