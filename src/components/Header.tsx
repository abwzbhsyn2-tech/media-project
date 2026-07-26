"use client";

import Image from "next/image";

export default function Header() {

  return (

    <header className="
      w-full
      flex
      justify-between
      items-center
      px-10
      py-5
      bg-[#0B1F3A]
      text-white
      shadow-lg
      relative
      z-50
    ">


      {/* Logo */}

      <div className="flex items-center gap-4">

        <Image
          src="/images/logo.jpg"
          alt="الطريق ميديا"
          width={60}
          height={60}
          className="rounded-full"
        />


        <h1 className="
          text-3xl
          font-bold
          text-[#F9C846]
        ">
          الطريق ميديا
        </h1>

      </div>




      {/* Menu */}

      <nav className="
        flex
        gap-8
        text-lg
        items-center
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



    </header>

  );

}