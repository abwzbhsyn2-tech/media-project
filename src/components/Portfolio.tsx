"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Project {
  id: number;
  name: string;
  desc: string;
  image: string;
}


export default function Portfolio() {


  const [projects, setProjects] = useState<Project[]>([]);
  const [loading, setLoading] = useState(true);



  async function getProjects() {

    try {

      const res = await fetch("/api/projects", {
  method: "GET",
  cache: "no-store",
  next: {
    revalidate: 0
  }
});


      const data = await res.json();


      console.log("PROJECTS:", data);


      setProjects(data);


    } catch (error) {

      console.log(error);

    } finally {

      setLoading(false);

    }

  }





  useEffect(() => {

    getProjects();

  }, []);






  return (


    <section
      id="work"
      className="py-24 bg-[#F5F7FA]"
    >


      <div className="max-w-7xl mx-auto px-6">



        <motion.h2

          className="
          text-5xl
          font-bold
          text-center
          text-[#0B1F3A]
          mb-6
          "

          initial={{
            opacity:0,
            y:-40
          }}

          whileInView={{
            opacity:1,
            y:0
          }}

          viewport={{
            once:true
          }}

        >

          أعمالنا

        </motion.h2>





        <div
          className="
          w-24
          h-1
          bg-[#F9C846]
          mx-auto
          mb-14
          rounded-full
          "
        >


        </div>








        {

          loading ? (


            <p className="text-center text-gray-500">

              جاري تحميل المشاريع...

            </p>



          )

          : projects.length === 0 ? (


            <p className="
            text-center
            text-gray-500
            "
            >

              لا توجد أعمال مضافة حاليًا

            </p>



          )

          : (



            <div
              className="
              grid
              grid-cols-1
              md:grid-cols-3
              gap-8
              "
            >



              {

                projects.map((project,index)=>(



                  <motion.div


                    key={project.id}


                    className="
                    bg-white
                    rounded-3xl
                    overflow-hidden
                    shadow-lg
                    "



                    initial={{
                      opacity:0,
                      y:50
                    }}



                    whileInView={{
                      opacity:1,
                      y:0
                    }}



                    viewport={{
                      once:true
                    }}



                    transition={{
                      duration:0.5,
                      delay:index * 0.15
                    }}



                    whileHover={{
                      y:-10
                    }}


                  >




                    <img

                      src={project.image}

                      alt={project.name}

                      className="
                      w-full
                      h-60
                      object-cover
                      "

                    />







                    <div
                      className="
                      p-8
                      "
                    >



                      <h3

                        className="
                        text-2xl
                        font-bold
                        text-[#0B1F3A]
                        mb-4
                        "

                      >

                        {project.name}


                      </h3>







                      <p

                        className="
                        text-gray-600
                        leading-8
                        "

                      >

                        {project.desc}


                      </p>





                    </div>





                  </motion.div>



                ))


              }




            </div>



          )

        }



      </div>


    </section>


  );


}