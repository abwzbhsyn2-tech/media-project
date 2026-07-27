import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();



// GET - جلب الخدمات

export async function GET(){


try{


const services = await prisma.service.findMany({

orderBy:{

createdAt:"desc"

}

});


return NextResponse.json(services);



}

catch(error){


console.error(error);


return NextResponse.json(

{
error:"Failed to fetch services"
},

{
status:500
}

);


}


}









// POST - إضافة خدمة

export async function POST(req:Request){


try{


const body = await req.json();


const {

title,

description,

image

}=body;





const service = await prisma.service.create({


data:{


title,

description,

image: image || null


}


});





return NextResponse.json(service);



}

catch(error){


console.error(error);


return NextResponse.json(

{
error:"Failed to create service"
},

{
status:500
}

);


}


}









// PUT - تعديل خدمة

export async function PUT(req:Request){


try{


const body = await req.json();


const {

id,

title,

description,

image

}=body;





const service = await prisma.service.update({


where:{


id:Number(id)


},



data:{


title,

description,

image: image || null


}



});






return NextResponse.json(service);



}

catch(error){


console.error(error);


return NextResponse.json(

{
error:"Failed to update service"
},

{
status:500
}

);


}


}









// DELETE - حذف خدمة

export async function DELETE(req:Request){


try{


const body = await req.json();


const {id}=body;





await prisma.service.delete({


where:{


id:Number(id)


}


});





return NextResponse.json({

success:true

});



}

catch(error){


console.error(error);


return NextResponse.json(

{
error:"Failed to delete service"
},

{
status:500
}

);


}


}