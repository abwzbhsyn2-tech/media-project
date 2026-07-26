"use client";

import Image from "next/image";

export default function Header() {

  return (

    <header
      className="
      fixed
      top-0
      left-0
      w-full
      z-50
      flex
      justify-between
      items-center
      px-10
      py-5
      bg-[#0B1F3A]/95
      backdrop-blur
      text-white
      shadow-lg
      "
    >


      <div className="flex items-center gap-4">


        <Image
          src="/images/logo.jpg"
          alt="الطريق ميديا"
          width={60}
          height={60}
          className="rounded-full w-[60px] h-[60px]"
        />


        <h1 className="text-3xl font-bold text-[#F9C846]">
          الطريق ميديا
        </h1>


      </div>



      <nav className="flex gap-8 text-lg">


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


    </header>

  );
}