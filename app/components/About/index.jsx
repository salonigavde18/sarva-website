import React from "react";

const About = () => {
  return (
    <section id= "about" className="min-h-screen py-20">
      <div className="flex w-full h-full gap-16 max-w-7xl mx-auto px-5">
        {/* Video Column */}
        <div className="flex-1 overflow-hidden">
          <video
            src="/about.mp4"
            className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
            autoPlay
            loop
            muted
            playsInline
          ></video>
        </div>

        {/* Content Column */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-5xl font-light mb-12 tracking-wide">About</h2>
          <div className="space-y-8 text-lg leading-relaxed text-gray-600">
            <p>
              At Sarva, our journey began with a simple idea: to create fashion that celebrates individuality and authenticity. Founded by Saloni Gavde, Sarva was born from a passion for creativity and a desire to redefine comfort and style. Inspired by India's rich, diverse culture and bustling textile markets, Saloni envisioned a brand that blends contemporary design with timeless elegance.
            </p>
            <p>
              The story started during my college years, where I was influenced by global fashion trends and the narratives behind handcrafted pieces. Determined to build a clothing line that champions sustainability and quality, I committed to sourcing fine fabrics and collaborating with skilled artisans who share this vision.
            </p>
            <p>
              Every Sarva collection is thoughtfully curated to embody our philosophy: clothing should be more than just what you wear—it should be a statement of who you are. Our goal is to provide a wardrobe that empowers and inspires, giving customers confidence and a sense of value.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About