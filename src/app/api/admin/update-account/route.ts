import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";
import { cookies } from "next/headers";


const prisma = new PrismaClient();



export async function POST(req: Request){


try {


const cookieStore = await cookies();


const session = cookieStore.get("admin_session");



if(!session){


return NextResponse.json({

success:false,

message:"Not logged in"

});


}




const sessionData = JSON.parse(session.value);




const body = await req.json();



const {

oldPassword,

newUsername,

newPassword

} = body;





const user = await prisma.user.findUnique({


where:{


id:sessionData.id


}


});





if(!user){


return NextResponse.json({

success:false,

message:"User not found"

});


}






const passwordMatch = await bcrypt.compare(

oldPassword,

user.password

);





if(!passwordMatch){


return NextResponse.json({

success:false,

message:"كلمة المرور الحالية غير صحيحة"

});


}







const hashedPassword = await bcrypt.hash(

newPassword,

10

);







const updatedUser = await prisma.user.update({


where:{


id:user.id


},


data:{


username:newUsername,

password:hashedPassword


}


});







const response = NextResponse.json({


success:true,


user:{


id:updatedUser.id,

username:updatedUser.username


}


});






response.cookies.set(


"admin_session",


JSON.stringify({


id:updatedUser.id,

username:updatedUser.username


}),


{


httpOnly:true,

secure:false,

sameSite:"lax",

maxAge:60 * 60 * 24


}


);






return response;





}


catch(error){



console.error(error);



return NextResponse.json({

success:false,

message:"Server error"

});


}



}