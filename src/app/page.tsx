"use client";

import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";
import Portfolio from "@/components/Portfolio";
import Services from "@/components/Services";
import WhyUs from "@/components/WhyUs";
import About from "@/components/About";
import Hero from "@/components/Hero";
import Header from "@/components/Header";
import Image from "next/image";
import { useEffect, useState } from "react";

export default function Home() {

  const [projects,setProjects] = useState<any[]>([]);


  useEffect(()=>{

    const data = JSON.parse(
      localStorage.getItem("projects") || "[]"
    );

    setProjects(data);

  },[]);



  return (

    <div className="min-h-screen bg-white text-[#0B1F3A]">

<Header />
<Hero />
<About />
<WhyUs />
<Services />
<Portfolio />
<Contact />
 <WhatsAppButton />
<Footer />
   

      {/* Header */}

      <header className="flex justify-between items-center px-10 py-5 bg-[#0B1F3A] text-white shadow">


        <div className="flex items-center gap-3">

  <Image
    src="/logo.jpg"
    alt="شعار الطريق ميديا"
    width={60}
    height={60}
    className="rounded-full"
  />

  <h1 className="text-3xl font-bold text-[#F9C846]">
    الطريق ميديا
  </h1>

</div>


        <nav className="space-x-6 text-lg">


          <a href="#" className="hover:text-[#F9C846]">
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


      </header>





      {/* Hero */}


      <section className="bg-gradient-to-r from-[#0B1F3A] via-[#132F52] to-[#F9C846] text-white text-center py-36 px-5">


        <h2 className="text-6xl font-bold mb-6">
          الطريق ميديا
        </h2>


        <p className="text-2xl mb-8">
          نصنع المحتوى الذي يترك أثراً
        </p>



        <div className="flex justify-center gap-5">


          <a
          href="#services"
          className="bg-[#F9C846] text-[#0B1F3A] px-8 py-3 rounded-full font-bold hover:scale-105 transition"
          >
            خدماتنا
          </a>



          <a
          href="https://wa.me/"
          className="border border-white px-8 py-3 rounded-full hover:bg-white hover:text-[#0B1F3A] transition"
          >
            تواصل معنا
          </a>


        </div>


      </section>







      {/* About */}


      <section id="about" className="py-20 px-10 text-center">


        <h2 className="text-4xl font-bold mb-4">

          من نحن؟

        </h2>


        <div className="w-24 h-1 bg-[#F9C846] mx-auto mb-6"></div>



        <p className="max-w-3xl mx-auto text-gray-600 text-lg">

          الطريق ميديا شركة متخصصة في التصوير،
          المونتاج، التصميم وصناعة المحتوى الرقمي.

        </p>


      </section>








      {/* Services */}


      <section
      id="services"
      className="py-20 px-10 bg-[#F5F7FA]"
      >


        <h2 className="text-4xl font-bold text-center mb-12">

          خدماتنا

        </h2>



        <div className="grid md:grid-cols-3 gap-8">



          <ServiceCard
          image="/images/video.jpg"
          title="مونتاج الفيديو"
          desc="إنتاج فيديوهات إعلانية ومحتوى احترافي."
          />



          <ServiceCard
          image="/images/design.jpg"
          title="التصميم الجرافيكي"
          desc="تصاميم وهوية بصرية تناسب علامتك."
          />



          <ServiceCard
          image="/images/media.jpg"
          title="صناعة المحتوى"
          desc="محتوى رقمي للسوشال ميديا."
          />



        </div>


      </section>









      {/* Work */}


      <section id="work" className="py-20 px-10">


        <h2 className="text-4xl font-bold text-center mb-12">
          أعمالنا
        </h2>


        <div className="grid md:grid-cols-3 gap-8">


        {
          projects.map((project,index)=>(


            <div
            key={index}
            className="rounded-xl shadow-lg overflow-hidden border hover:border-[#F9C846] transition"
            >



            {
              project.image &&

              <img
              src={project.image}
              className="w-full h-60 object-cover"
              />

            }



            <div className="p-6">


              <h3 className="text-2xl font-bold">
                {project.name}
              </h3>


              <p className="mt-3 text-gray-600">
                {project.desc}
              </p>


            </div>


            </div>


          ))
        }


        </div>


      </section>







      {/* Contact */}


      <section className="py-20 bg-[#0B1F3A] text-white text-center">


        <h2 className="text-4xl font-bold mb-5">
          جاهز تبدأ مشروعك؟
        </h2>



        <p className="mb-8 text-xl">
          تواصل معنا الآن
        </p>



        <a
        href="https://wa.me/"
        className="bg-[#F9C846] text-[#0B1F3A] px-10 py-4 rounded-full font-bold"
        >
          واتساب
        </a>


      </section>







      <footer className="bg-black text-white text-center py-6">

        الطريق ميديا © 2026

      </footer>


    </div>

  );

}






function ServiceCard({image,title,desc}:any){

return(

<div className="bg-white rounded-xl shadow-lg p-5 hover:-translate-y-2 transition border hover:border-[#F9C846]">


<Image
src={image}
width={400}
height={250}
alt={title}
className="rounded"
/>


<h3 className="text-2xl font-bold mt-5">
{title}
</h3>


<p className="text-gray-600 mt-3">
{desc}
</p>




</div>

)

}