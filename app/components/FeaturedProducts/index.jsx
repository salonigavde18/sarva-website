"use client";
import React, { useState, useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);
const FeaturedProducts = () => {
  const sectionRef = useRef(null);
  const headingRef = useRef(null);
  const subtitleRef = useRef(null);

  useEffect(() => {
    if (typeof window !== "undefined") {
      gsap.fromTo(
        [headingRef.current, subtitleRef.current],
        { y: 0 },
        {
          y: "100vh",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top top",
            end: "bottom bottom",
            scrub: 0.5,
            pin: false,
            markers: true,
          },
        }
      );
    }
  }, []);

  const products = [
    {
      id: 1,
      name: "Winter Collection",
      category: "New Season",
      image:
        "https://image.hm.com/content/dam/global_campaigns/season_00/ladies/6000/6000-1x1-2-holiday-2024-women.jpg?imwidth=1260",
    },
    {
      id: 2,
      name: "Evening Elegance",
      category: "Limited Edition",
      image:
        "https://image.hm.com/content/dam/global_campaigns/season_00/ladies/ws60aa/WS60AA-1x1-1-2.jpg?imwidth=1260",
    },
    {
      id: 3,
      name: "Summer Breeze",
      category: "Exclusive",
      image:
        "https://image.hm.com/content/dam/global_campaigns/season_00/ladies/ws60a/WS60A-1x1.jpg?imwidth=1260",
    },
    {
      id: 4,
      name: "Urban Chic",
      category: "Trending Now",
      image:
        "https://image.hm.com/ffc/share/assets/2024/6000/6000_15.png?imwidth=1080",
    },
  ];

  return (
    <section ref={sectionRef} className="p-10 bg-white">
      <div className="grid grid-cols-3 gap-12 items-start max-w-7xl mx-auto">
        {/* First Column */}
        <div className="space-y-12">
          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-4 relative">
              <img
                src={products[0].image}
                alt={products[0].name}
                className="w-full h-[400px] object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-4 py-1 bg-white/90 text-xs tracking-[0.2em] uppercase mb-2">
                  {products[0].category}
                </span>
                <h3 className="text-xl font-light text-white">
                  {products[0].name}
                </h3>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-4 relative">
              <img
                src={products[2].image}
                alt={products[2].name}
                className="w-full h-[400px] object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-4 py-1 bg-white/90 text-xs tracking-[0.2em] uppercase mb-2">
                  {products[2].category}
                </span>
                <h3 className="text-xl font-light text-white">
                  {products[2].name}
                </h3>
              </div>
            </div>
          </div>
        </div>

        {/* Center Column - Heading */}
        <div className="flex flex-col justify-center items-center">
          <h2
            ref={headingRef}
            className="text-4xl font-light tracking-[0.2em] mb-4"
          >
            Featured
          </h2>
          <p
            ref={subtitleRef}
            className="text-gray-600 text-center max-w-md font-light"
          >
            Discover our handpicked selection of trending items
          </p>
        </div>

        {/* Third Column */}
        <div className="space-y-12">
          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-4 relative">
              <img
                src={products[1].image}
                alt={products[1].name}
                className="w-full h-[400px] object-cover transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-4 py-1 bg-white/90 text-xs tracking-[0.2em] uppercase mb-2">
                  {products[1].category}
                </span>
                <h3 className="text-xl font-light text-white">
                  {products[1].name}
                </h3>
              </div>
            </div>
          </div>

          <div className="group cursor-pointer">
            <div className="overflow-hidden mb-4 relative">
              <img
                src={products[3].image}
                alt={products[3].name}
                className="w-full h-[400px] object-cover object-top transition-all duration-700 group-hover:scale-110"
              />
              <div className="absolute inset-0 bg-black/20 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                <span className="inline-block px-4 py-1 bg-white/90 text-xs tracking-[0.2em] uppercase mb-2">
                  {products[3].category}
                </span>
                <h3 className="text-xl font-light text-white">
                  {products[3].name}
                </h3>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
