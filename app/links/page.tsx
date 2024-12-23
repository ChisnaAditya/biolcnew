"use client";
import React, { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../firebase";
import Image from "next/image";
import { Link, Button } from "@nextui-org/react";

export default function Links() {
  const [links, setLinks] = useState<any[]>([]);

  useEffect(() => {
    const dbRef = ref(db, "links");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setLinks(Object.values(data));
      console.log(data);
    });
  }, []);

  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen overflow-hidden  font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-pattern">
        <div className="w-full">
          <Image
            width={50}
            height={50}
            alt="logolc"
            src={`/favicon.ico`}
            className="w-[50px] mx-auto"
          />
          <p className="text-center">@kampunginggrislc</p>
        </div>

        <div className="max-w-2xl container text-center">
          <article className="prose">
            <h1>Dokumentasi Kegiatan</h1>
            <p>
              Welcoming, outing, suasana kelas dan dokumentasi lainnya yang bisa
              kamu akses dengan klik salah satu tombol dibawah.
            </p>
          </article>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 rounded-lg justify-between mt-10">
            {links.map((item, index) => (
              <button
                key={index}
                onClick={() => (window.location.href = `${item.link}`)}
                className={`${item.isVisible ? "block" : "hidden"}
                font-semibold text-[#29363B] border-[#29363B] bg-[#FDBD13] p-2 border-[2px] border-b-[4px] rounded-xl w-full transition-all ease-out duration-75 hover:border-r-[4px] hover:border-b-[4px] hover:-translate-x-[2px] hover:-translate-y-[2px]`}
              >
                {item.title}
              </button>
            ))}
          </div>

          <div className="flex item-center justify-center border-[1px]  border-[#29363B] bg-[#F8F6F6] rounded-xl w-full mt-10 p-2 md:p-10">
            <article className="prose p-5">
              <h2 className="text-[#29363B]">
                Yuk, gabung ke Kampung Inggris LC bareng ribuan member lainnya
              </h2>
              {/* <p className="text-[#29363B]">
                Dapatkan info terbaru tentang Kampung Inggris LC sekaligus
                sarana diskusi tentang bahasa Inggris bareng ribuan member
                lainnya.
              </p> */}

              <div className="space-y-2">
                <button
                  onClick={() =>
                    (window.location.href = `https://registrasi.kampunginggris.id/?utm_medium=linkdokumentasi`)
                  }
                  className="font-bold text-xl text-[#FEF3F8] border-[#29363B] bg-[#E31413] p-2 border-[2px] border-b-[4px] rounded-xl w-full transition-all ease-out duration-75 hover:border-r-[4px] hover:border-b-[4px] hover:-translate-x-[2px] hover:-translate-y-[2px]"
                >
                  Daftar Sekarang
                </button>
                <button
                  onClick={() =>
                    (window.location.href = `https://cs.kampunginggrislc.com/all?utm_medium=linkdokumentasi`)
                  }
                  className="font-bold text-xl text-[#FEF3F8] border-[#29363B] bg-[#0aad01] p-2 border-[2px] border-b-[4px] rounded-xl w-full transition-all ease-out duration-75 hover:border-r-[4px] hover:border-b-[4px] hover:-translate-x-[2px] hover:-translate-y-[2px]"
                >
                  Tanya CS
                </button>
              </div>
            </article>
          </div>
        </div>
      </main>
    </div>
  );
}
