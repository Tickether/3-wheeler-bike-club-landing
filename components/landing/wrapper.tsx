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
        <section className="flex w-full h-screen px-4" id="home">
          <Hero/>
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