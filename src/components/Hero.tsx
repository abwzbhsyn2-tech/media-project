"use client";

import { motion } from "framer-motion";


export default function Hero() {


  return (

    <section
      className="
      relative
      min-h-screen
      flex
      items-center
      bg-[#0B1F3A]
      overflow-hidden
      pt-24
      "
    >


      <div
        className="
        max-w-7xl
        mx-auto
        px-6
        grid
        md:grid-cols-2
        gap-12
        items-center
        "
      >



        {/* النص والشعار */}

        <motion.div

          className="text-white"

          initial={{
            opacity:0,
            x:-50
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.8
          }}

        >



          {/* الشعار */}

          <div className="mb-8 mt-10 flex justify-start">


            <motion.img

              src="/images/logo.jpg"

              alt="Al Tareeq Media Logo"

              className="
              w-52
              h-52
              object-contain
              rounded-xl
              "

              initial={{
                opacity:0,
                scale:0.5
              }}

              animate={{
                opacity:1,
                scale:1
              }}

              transition={{
                duration:0.8
              }}

            />


          </div>





          <h1
            className="
            text-5xl
            md:text-7xl
            font-bold
            leading-tight
            "
          >

            نصنع المحتوى

           
           
            <br />


         الذي يترك -

<span className="text-[#F9C846]">
  أثرًا
</span>

          </h1>





          <p
            className="
            mt-6
            text-xl
            text-gray-300
            leading-9
            "
          >

            الطريق ميديا شركة متخصصة في الإنتاج الإعلامي
            وصناعة المحتوى الإبداعي والإعلانات الرقمية،
            نقدم حلولًا إعلامية مبتكرة تساعد العلامات التجارية
            على الوصول لجمهورها.


          </p>






          <div
            className="
            flex
            gap-5
            mt-10
            flex-wrap
            "
          >


            <a

              href="#contact"

              className="
              bg-[#F9C846]
              text-[#0B1F3A]
              px-8
              py-4
              rounded-full
              font-bold
              hover:scale-105
              transition
              "

            >

              اطلب عرض سعر

            </a>





            <a

              href="#work"

              className="
              border
              border-white
              text-white
              px-8
              py-4
              rounded-full
              font-bold
              hover:bg-white
              hover:text-[#0B1F3A]
              transition
              "

            >

              مشاهدة أعمالنا

            </a>



          </div>



        </motion.div>








        {/* الفيديو */}

        <motion.div

          className="
          flex
          justify-center
          "

          initial={{
            opacity:0,
            x:50
          }}

          animate={{
            opacity:1,
            x:0
          }}

          transition={{
            duration:0.8
          }}

        >



          <div
            className="
            relative
            w-full
            h-[420px]
            rounded-3xl
            overflow-hidden
            bg-black/30
            border
            border-white/20
            shadow-2xl
            flex
            items-center
            justify-center
            "
          >



            <img

              src="/images/media.jpg"

              alt="Media Preview"

              className="
              absolute
              w-full
              h-full
              object-cover
              opacity-60
              "

            />





            <div
              className="
              absolute
              inset-0
              bg-[#0B1F3A]/50
              "
            >

            </div>







            <motion.button

              className="
              relative
              z-10
              w-24
              h-24
              rounded-full
              bg-[#F9C846]
              text-[#0B1F3A]
              text-4xl
              shadow-xl
              "

              animate={{
                scale:[1,1.1,1]
              }}

              transition={{
                duration:1.5,
                repeat:Infinity
              }}

            >

              ▶

            </motion.button>





          </div>



        </motion.div>





      </div>


    </section>

  );

}