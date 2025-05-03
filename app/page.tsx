"use client"

import { Wrapper } from "@/components/landing/wrapper";
import { useEffect } from "react";
import { useRouter } from "next/navigation";

export default function Home() {
  const router = useRouter();
  
  useEffect(() => {
    // Remove hash from URL on page load/refresh
    if (window.location.hash) {
      router.replace("/");
    }
  }, [router]);

  return (
    <main>
      <Wrapper/>
    </main>
  );
}
