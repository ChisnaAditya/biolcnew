"use client";
import Link from "next/link";
import React from "react";
import Image from "next/image";

const TrendingSlider = () => {
  const filteredItems = [
    {
      id: 1,
      img: "/brosur/dc/DC Bandung.webp",
      description: "Desember Ceria Bandung",
      price: 200,
    },
    {
      id: 2,
      img: "/brosur/dc/DC Bogor.webp",
      description: "Desember Ceria Bogor",
      price: 100,
    },
    {
      id: 3,
      img: "/brosur/dc/DC Jogja.webp",
      description: "Desember Ceria Jogja",
      price: 500,
    },
    {
      id: 4,
      img: "/brosur/dc/DC Lampung.webp",
      description: "Desember Ceria Lampung",
      price: 40,
    },
    {
      id: 5,
      img: "/brosur/dc/DC Makassar.webp",
      description: "Desember Ceria Makassar",
      price: 140,
    },
    {
      id: 6,
      img: "/brosur/dc/DC Medan.webp",
      description: "Desember Ceria Medan",
      price: 140,
    },
    {
      id: 7,
      img: "/brosur/dc/DC Serang.webp",
      description: "Desember Ceria Serang",
      price: 140,
    },
  ];

  return (
    <div className="flex gap-4 overflow-auto">
      {filteredItems.map((item) => (
        <div className="w-[200px] lg:w-[300px]">
          <Image
            alt="fasilitas kampung inggris lc pare"
            src={item.img}
            width={720}
            height={450}
            className="rounded-xl"
            loading="lazy"
          />
          <p className="text-center text-sm text-slate-500 mt-2">
            {item.description}
          </p>
        </div>
      ))}
    </div>
  );
};
export default TrendingSlider;
