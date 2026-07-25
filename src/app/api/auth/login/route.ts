import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";
import bcrypt from "bcrypt";


const prisma = new PrismaClient();



export async function POST(req: Request){


try {


const body = await req.json();


const {
username,
password
} = body;



const user = await prisma.user.findUnique({

where:{

username

}

});



if(!user){


return NextResponse.json({

success:false

});

}




const passwordMatch = await bcrypt.compare(
password,
user.password
);

console.log("PASSWORD CHECK:", {
  entered: password,
  hash: user.password,
  result: passwordMatch
});



if(!passwordMatch){


return NextResponse.json({

success:false

});

}




const response = NextResponse.json({

success:true,

user:{
id:user.id,
username:user.username,
name:user.name
}

});


response.cookies.set(

"admin_session",

"logged",

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

error:"Server error"

});


}



}