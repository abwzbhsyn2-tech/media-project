"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";


export default function LoginPage(){


const router = useRouter();


const [username,setUsername] = useState("");

const [password,setPassword] = useState("");

const [error,setError] = useState("");



async function handleLogin(e:React.FormEvent){


e.preventDefault();


setError("");



const res = await fetch("/api/auth/login",{

method:"POST",

headers:{

"Content-Type":"application/json"

},

body:JSON.stringify({

username,

password

})

});



const data = await res.json();



if(data.success){


router.push("/admin");


}

else{


setError("اسم المستخدم أو كلمة المرور غير صحيحة");


}



}




return (


<div

className="
min-h-screen
flex
items-center
justify-center
bg-[#F5F7FA]
px-6
"

>


<div

className="
bg-white
shadow-xl
rounded-3xl
p-10
w-full
max-w-md
"

>


<img

src="/images/logo.jpg"

alt="logo"

className="
w-24
h-24
object-contain
mx-auto
mb-6
"

/>



<h1

className="
text-3xl
font-bold
text-center
text-[#0B1F3A]
mb-8
"

>

دخول الإدارة

</h1>




<form

onSubmit={handleLogin}

className="
space-y-5
"

>



<input

type="text"

placeholder="اسم المستخدم"

value={username}

onChange={(e)=>setUsername(e.target.value)}

className="
w-full
border
rounded-xl
p-4
outline-none
focus:border-[#F9C846]
"

/>





<input

type="password"

placeholder="كلمة المرور"

value={password}

onChange={(e)=>setPassword(e.target.value)}

className="
w-full
border
rounded-xl
p-4
outline-none
focus:border-[#F9C846]
"

/>





{

error &&

<p

className="
text-red-500
text-center
"

>

{error}

</p>

}




<button

type="submit"

className="
w-full
bg-[#0B1F3A]
text-white
py-4
rounded-xl
font-bold
hover:bg-[#F9C846]
hover:text-[#0B1F3A]
transition
"

>

دخول

</button>




</form>



</div>



</div>


);


}