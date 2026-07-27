"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {

  const [open, setOpen] = useState(false);


  return (

    <header className="
      w-full
      bg-[#0B1F3A]
      text-white
      shadow-lg
      sticky
      top-0
      z-50
    ">


      <div className="
        max-w-7xl
        mx-auto
        px-5
        md:px-10
        py-4
        flex
        justify-between
        items-center
      ">


        {/* الشعار */}

        <div className="
          flex
          items-center
          gap-3
        ">


          <Image

            src="/images/logo.jpg"

            alt="الطريق ميديا"

            width={60}

            height={60}

            className="
              rounded-full
              object-cover
            "

          />



          <h1 className="
            text-xl
            md:text-3xl
            font-bold
            text-[#F9C846]
          ">

            الطريق ميديا

          </h1>


        </div>





        {/* زر الموبايل */}

       <button
        className="
        block
        md:hidden
        text-3xl
        "
        onClick={() => setOpen(!open)}
        >
        ☰
        </button>







        {/* روابط الكمبيوتر */}

        <nav
        className="
        hidden
        md:flex
        items-center
        gap-8
        text-lg
        "
        >


          <a
            href="/"
            className="hover:text-[#F9C846] transition"
          >

            الرئيسية

          </a>



          <a
            href="#about"
            className="hover:text-[#F9C846] transition"
          >

            من نحن

          </a>



          <a
            href="#services"
            className="hover:text-[#F9C846] transition"
          >

            الخدمات

          </a>



          <a
            href="#work"
            className="hover:text-[#F9C846] transition"
          >

            أعمالنا

          </a>



          <a
            href="/admin"
            className="hover:text-[#F9C846] transition"
          >

            الإدارة

          </a>



        </nav>



      </div>







      {/* قائمة الموبايل */}

      {open && (

        <nav className="
          md:hidden
          flex
          flex-col
          items-center
          gap-5
          pb-6
          text-lg
        ">


          <a
            href="/"
            className="hover:text-[#F9C846]"
          >

            الرئيسية

          </a>



          <a
            href="#about"
            className="hover:text-[#F9C846]"
          >

            من نحن

          </a>



          <a
            href="#services"
            className="hover:text-[#F9C846]"
          >

            الخدمات

          </a>



          <a
            href="#work"
            className="hover:text-[#F9C846]"
          >

            أعمالنا

          </a>



          <a
            href="/admin"
            className="hover:text-[#F9C846]"
          >

            الإدارة

          </a>



        </nav>

      )}



    </header>

  );

}