"use client"

import { About } from "./about";
import { FAQs } from "./faqs";
import { Footer } from "./footer";
import { Header } from "./header";
import { Hero } from "./hero";
import { Services } from "./services";


export function Wrapper() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      
      <div className="flex w-full sticky top-0 z-50">
        <Header/>
      </div>

      <div>
        <section className="flex w-full h-screen px-4 relative" id="home">
          <div className="absolute inset-0 bg-[url('/images/heroBG.svg')] bg-center bg-cover"></div>
          <div className="absolute inset-0 bg-black/50"></div>
          <div className="relative z-10 flex w-full">
            <Hero/>
          </div>
        </section>
        <section className="flex w-full h-screen px-4" id="services">
          <Services/>
        </section>
        <section className="flex w-full h-screen px-4" id="about">
          <About/>
        </section>
        <section className="flex w-full h-screen px-4" id="faqs">
          <FAQs/>
        </section>
        <section className="flex w-full h-60 bg-[#0D0D0D]" id="footer">
          <Footer/>
        </section>
      </div>
      
    </div>
  );
}