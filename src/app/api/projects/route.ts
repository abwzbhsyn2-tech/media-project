import { NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client";


const prisma = new PrismaClient();




// GET - جلب المشاريع

export async function GET(){


  try{


    const projects = await prisma.project.findMany({

      orderBy:{
        createdAt:"desc"
      }

    });



    return NextResponse.json(

      projects,

      {

        headers:{

          "Cache-Control":"no-store, no-cache, must-revalidate"

        }

      }

    );



  }catch(error){


    console.error(
      "GET PROJECTS ERROR:",
      error
    );



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








// POST - إضافة مشروع جديد

export async function POST(
  req:Request
){


  try{


    const body = await req.json();



    console.log(
      "NEW PROJECT:",
      body
    );




    const {
      name,
      desc,
      image
    } = body;





    if(
      !name ||
      !desc ||
      !image
    ){


      return NextResponse.json(

        {
          error:"Missing project data"
        },

        {
          status:400
        }

      );


    }







    const project = await prisma.project.create({


      data:{

        name,

        desc,

        image

      }


    });






    console.log(
      "CREATED PROJECT:",
      project
    );





    return NextResponse.json(

      {

        success:true,

        project

      }

    );





  }catch(error){


    console.error(
      "CREATE PROJECT ERROR:",
      error
    );



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









// PUT - تعديل مشروع

export async function PUT(
  req:Request
){


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





    return NextResponse.json(

      {

        success:true,

        project

      }

    );





  }catch(error){



    console.error(
      "UPDATE PROJECT ERROR:",
      error
    );



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









// DELETE - حذف مشروع

export async function DELETE(
  req:Request
){


  try{


    const body = await req.json();




    await prisma.project.delete({


      where:{

        id:Number(body.id)

      }


    });





    return NextResponse.json(

      {

        success:true

      }

    );





  }catch(error){



    console.error(
      "DELETE PROJECT ERROR:",
      error
    );



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