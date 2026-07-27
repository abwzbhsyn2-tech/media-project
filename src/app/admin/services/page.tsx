"use client";

import { useEffect, useState } from "react";


interface Service {

  id:number;

  title:string;

  description:string;

  image?:string | null;

}



export default function ServicesAdmin(){


const [services,setServices] = useState<Service[]>([]);

const [title,setTitle] = useState("");

const [description,setDescription] = useState("");

const [editId,setEditId] = useState<number|null>(null);




// جلب الخدمات

async function getServices(){


try{


const res = await fetch("/api/services");


const data = await res.json();


setServices(data);


}catch(error){

console.log(error);

}


}




useEffect(()=>{

getServices();

},[]);







// إضافة أو تعديل

async function saveService(){


if(!title || !description){

alert("أكمل البيانات");

return;

}



try{


let res;



if(editId !== null){


// تعديل

res = await fetch("/api/services",{

method:"PUT",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

id:editId,

title,

description

})

});



}else{


// إضافة

res = await fetch("/api/services",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

title,

description

})

});


}





if(res.ok){


alert(

editId !== null

?

"تم تعديل الخدمة ✅"

:

"تم إضافة الخدمة ✅"

);



getServices();


clearForm();


}



}catch(error){

console.log(error);

}


}








// اختيار للتعديل

function editService(service:Service){


setTitle(service.title);

setDescription(service.description);

setEditId(service.id);


}







// حذف

async function deleteService(id:number){



const confirmDelete = confirm("هل تريد حذف الخدمة؟");



if(!confirmDelete) return;



try{


const res = await fetch("/api/services",{

method:"DELETE",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

id

})

});





if(res.ok){


alert("تم حذف الخدمة ✅");


getServices();


}



}catch(error){

console.log(error);

}



}









function clearForm(){


setTitle("");

setDescription("");

setEditId(null);


}









return (


<div className="min-h-screen bg-[#F5F7FA] p-10">



<h1 className="text-4xl font-bold text-[#0B1F3A] mb-10">

إدارة الخدمات

</h1>







<div className="bg-white p-8 rounded-2xl shadow max-w-2xl mb-12">



<h2 className="text-2xl font-bold mb-6">


{

editId !== null

?

"تعديل الخدمة"

:

"إضافة خدمة"

}


</h2>





<input

value={title}

onChange={(e)=>setTitle(e.target.value)}

className="w-full border p-3 rounded mb-4"

placeholder="اسم الخدمة"

/>






<textarea

value={description}

onChange={(e)=>setDescription(e.target.value)}

className="w-full border p-3 rounded mb-4"

placeholder="وصف الخدمة"

/>







<button

onClick={saveService}

className="bg-[#F9C846] text-[#0B1F3A] px-8 py-3 rounded-full font-bold"

>

{

editId !== null

?

"تحديث الخدمة"

:

"إضافة الخدمة"

}


</button>






{

editId !== null &&

<button

onClick={clearForm}

className="bg-gray-400 text-white px-8 py-3 rounded-full font-bold mr-3"

>

إلغاء

</button>

}



</div>










<h2 className="text-3xl font-bold mb-6">

الخدمات الحالية

</h2>








<div className="grid md:grid-cols-3 gap-8">



{

services.length > 0 ? (


services.map((service)=>(



<div

key={service.id}

className="bg-white p-6 rounded-2xl shadow"

>


<h3 className="text-2xl font-bold text-[#0B1F3A]">

{service.title}

</h3>



<p className="text-gray-600 mt-4">

{service.description}

</p>





<div className="flex gap-3 mt-5">



<button

onClick={()=>editService(service)}

className="bg-[#0B1F3A] text-white px-5 py-2 rounded-full"

>

تعديل

</button>





<button

onClick={()=>deleteService(service.id)}

className="bg-red-600 text-white px-5 py-2 rounded-full"

>

حذف

</button>



</div>



</div>



))


)

:

(

<p className="text-gray-500">

لا توجد خدمات مضافة حاليًا

</p>

)


}



</div>





</div>


);


}