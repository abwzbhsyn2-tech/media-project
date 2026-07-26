"use client";

import Image from "next/image";
import { useState } from "react";

export default function Header() {

  const [open,setOpen] = useState(false);

  return (

    <header className="fixed top-0 w-full z-50 bg-[#0B1F3A]/95 backdrop-blur text-white shadow-lg">


      <div className="max-w-7xl mx-auto flex justify-between items-center px-6 py-4">


        {/* Logo */}

        <div className="flex items-center gap-3">

          <Image
            src="/images/logo.jpg"
            alt="الطريق ميديا"
            width={55}
            height={55}
            className="rounded-full object-cover"
          />


          <h1 className="text-2xl font-bold text-[#F9C846]">
            الطريق ميديا
          </h1>

        </div>



        {/* Desktop Menu */}

        <nav className="hidden md:flex gap-8 text-lg">


          <a href="/" className="hover:text-[#F9C846]">
            الرئيسية
          </a>


          <a href="#about" className="hover:text-[#F9C846]">
            من نحن
          </a>


          <a href="#services" className="hover:text-[#F9C846]">
            الخدمات
          </a>


          <a href="#work" className="hover:text-[#F9C846]">
            أعمالنا
          </a>


          <a href="/admin" className="hover:text-[#F9C846]">
            الإدارة
          </a>


        </nav>



        {/* Mobile Button */}

        <button
          onClick={()=>setOpen(!open)}
          className="md:hidden text-3xl"
        >
          ☰
        </button>


      </div>



      {/* Mobile Menu */}

      {
        open &&

        <nav className="md:hidden bg-[#132F52] flex flex-col text-center gap-5 py-6">


          <a href="/">
            الرئيسية
          </a>


          <a href="#about">
            من نحن
          </a>


          <a href="#services">
            الخدمات
          </a>


          <a href="#work">
            أعمالنا
          </a>


          <a href="/admin">
            الإدارة
          </a>


        </nav>

      }



    </header>

  );

}