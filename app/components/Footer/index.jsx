"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const branding = useRef(null);
  const containerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const textWidth = branding.current.offsetWidth;
      const windowWidth = window.innerWidth;
      const distance = textWidth;

      const animation = gsap.to(branding.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1800",
          pin: true,
          scrub: 0.5,
          markers: true,
        },
        x: -distance,
        ease: "none",
      });

      return () => animation.kill();
    }
  }, []);

  return (
    <footer className="bg-[#fafafa] text-gray-600 h-screen flex flex-col justify-between relative">
      <div ref={containerRef} className="flex-1 flex items-center justify-center overflow-hidden">
        <div ref={branding} className="whitespace-nowrap translate-x-[50%]">
          <h1 className="text-[6rem] md:text-[8rem] uppercase tracking-tight">
          Small in scale, big on impact – a clothing brand from India, supporting local NGOs with every thread.
          </h1>
        </div>
      </div>

      <div className="fixed bottom-0 left-0 right-0 text-center py-8 border-t border-gray-200 bg-[#fafafa]">
        <p className="text-sm text-gray-500">
          © 2024 Sarva. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
