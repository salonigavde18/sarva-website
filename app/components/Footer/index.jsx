"use client"
import React, { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const Footer = () => {
  const branding = useRef(null);
  const containerRef = useRef(null);
  const footerRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      const textWidth = branding.current.offsetWidth;
      const distance = textWidth;

      // Animation for the text scroll
      const textAnimation = gsap.to(branding.current, {
        scrollTrigger: {
          trigger: containerRef.current,
          start: "top top",
          end: "+=1800",
          pin: true,
          scrub: 0.5,
          markers: true,
          onEnter: () => {
            footerRef.current.style.position = 'fixed';
            footerRef.current.style.bottom = '0';
            footerRef.current.style.width = '100%';
          },
          onLeaveBack: () => {
            footerRef.current.style.position = 'relative';
          },
          onLeave: () => {
            footerRef.current.style.position = 'relative';
          }
        },
        x: -distance,
        ease: "none",
      });

      return () => textAnimation.kill();
    }
  }, []);

  return (
    <footer ref={footerRef} className="bg-[#fafafa] text-gray-600 h-screen flex flex-col justify-between">
      <div ref={containerRef} className="flex-1 flex items-center justify-center overflow-hidden">
        <div ref={branding} className="whitespace-nowrap translate-x-[50%]">
          <h1 className="text-[6rem] md:text-[8rem] uppercase tracking-tight">
            Small in scale, big on impact – a clothing brand from India, supporting local NGOs with every thread.
          </h1>
        </div>
      </div>

      <div className="text-center py-8 border-t border-gray-200 bg-[#fafafa]">
        <p className="text-sm text-gray-500">
          © 2024 Sarva. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
