"use client";
export const dynamic = "force-dynamic";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import WhyUs from "@/components/WhyUs";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import Contact from "@/components/Contact";
import WhatsAppButton from "@/components/WhatsAppButton";
import Footer from "@/components/Footer";


export default function Home() {


  return (

    <div className="min-h-screen bg-white text-[#0B1F3A]">


      {/* الهيدر */}
      <Header />


      {/* الصفحة الرئيسية */}
      <Hero />


      {/* من نحن */}
      <About />


      {/* لماذا نحن */}
      <WhyUs />


      {/* الخدمات */}
      <Services />


      {/* الأعمال */}
      <Portfolio />


      {/* التواصل */}
      <Contact />


      {/* زر الواتساب */}
      <WhatsAppButton />


      {/* الفوتر */}
      <Footer />


    </div>

  );

}