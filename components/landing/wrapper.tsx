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
      <div className="flex w-full">
        <Header/>
      </div>
      <div>
        <section className="flex w-full h-screen" id="home">
          <Hero/>
        </section>
        <section className="flex w-full h-screen" id="services">
          <Services/>
        </section>
        <section className="flex w-full h-screen" id="about">
          <About/>
        </section>
        <section className="flex w-full h-screen" id="faqs">
          <FAQs/>
        </section>
        <section className="flex w-full h-60" id="footer">
          <Footer/>
        </section>
      </div>
      
    </div>
  );
}