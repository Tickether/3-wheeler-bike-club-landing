"use client"

import { Footer } from "./footer";
import { Header } from "./header";


export function Wrapper() {
  return (
    <div className="flex flex-col w-full min-h-screen">
      <div className="flex w-full">
        <Header/>
      </div>

      <Footer/>
    </div>
  );
}