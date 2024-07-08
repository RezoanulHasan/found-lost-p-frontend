// pages/OurPartner.tsx
"use client";
import React from "react";
import Marquee from "react-fast-marquee";
import Image from "next/image";
import SectionTitle from "@/components/shared/SectionTitle/SectionTitle";

const images = [
  "https://i.ibb.co/RTZ8NdP/google.png",
  "https://i.ibb.co/rZhLYgL/spotify.png",
  "https://i.ibb.co/bgDWtxN/telerama.png",
  "https://i.ibb.co/0sKHS3B/amazon.png",
  "https://i.ibb.co/z6P1yZD/figma.png",
  "https://i.ibb.co/jhRsb7q/microsoft-logo-02.jpg",
  "https://i.ibb.co/gtWWxf0/youtube-logo-for-popular-online-media-content-creation-website-and-application-free-png.webp",
];

const OurPartner: React.FC = () => {
  return (
    <div className="mt-10">
      <SectionTitle subHeading="LostLocator" heading="Our Partners" />
      <div style={{ padding: "100px" }}>
        <Marquee pauseOnHover={true} gradient={false} speed={80}>
          {images.map((src, index) => (
            <div key={index} style={{ padding: "0 20px" }}>
              <Image
                src={src}
                alt={`Partner ${index + 1}`}
                width={150}
                height={100}
                style={{ objectFit: "contain" }}
              />
            </div>
          ))}
        </Marquee>
      </div>
    </div>
  );
};

export default OurPartner;
