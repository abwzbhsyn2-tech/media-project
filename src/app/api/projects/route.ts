import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();


// جلب كل المشاريع
export async function GET() {

  try {

    const projects = await prisma.project.findMany({
      orderBy:{
        createdAt:"desc"
      }
    });


    return NextResponse.json(projects);


  } catch(error){

    return NextResponse.json(
      {
        error:"Failed to get projects"
      },
      {
        status:500
      }
    );

  }

}




// إضافة مشروع جديد
export async function POST(req: Request) {


  try {


    const body = await req.json();


    const {
      name,
      desc,
      image
    } = body;



    const project = await prisma.project.create({

      data:{
        name,
        desc,
        image
      }

    });



    return NextResponse.json(project);



  } catch(error){


    return NextResponse.json(
      {
        error:"Failed to create project"
      },
      {
        status:500
      }
    );


  }


}






// حذف مشروع
export async function DELETE(req: Request){


  try{


    const body = await req.json();


    await prisma.project.delete({

      where:{
        id:Number(body.id)
      }

    });



    return NextResponse.json({
      success:true
    });



  }catch(error){


    return NextResponse.json(
      {
        error:"Failed to delete project"
      },
      {
        status:500
      }
    );


  }


}





// تعديل مشروع
export async function PUT(req: Request){


  try{


    const body = await req.json();


    const {
      id,
      name,
      desc,
      image
    } = body;



    const project = await prisma.project.update({

      where:{
        id:Number(id)
      },


      data:{
        name,
        desc,
        image
      }

    });



    return NextResponse.json(project);



  }catch(error){


    return NextResponse.json(
      {
        error:"Failed to update project"
      },
      {
        status:500
      }
    );


  }


}