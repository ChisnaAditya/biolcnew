"use client";

import Image from "next/image";
import { Button } from "@/components/ui/button";
import { CardWithForm } from "./Modal";
import { DialogPopup } from "./Dialog";
import { useState } from "react";

type teacher = {
  uid: string;
  nama: string;
  cabang: string;
  keterangan: string;
};

export default function Card(props: teacher) {
  const [isOpen, setIsOpen] = useState(false);
  const handleModal = () => {
    setIsOpen(true);
  };
  const handleClose = () => {
    setIsOpen(false);
  };

  return (
    <div className="p-4 rounded-[1rem] shadow-custom shadow-xl bg-[#f8f8f8]">
      <div className="flex justify-between items-center gap-2 mb-2">
        <div className="flex items-center gap-2">
          <div>
            <Image
              alt="foto profil teacher"
              src={`/favicon.ico`}
              width={50}
              height={50}
            />
          </div>
          <div>
            <h3 className="text-lg text-black/90 font-bold uppercase">
              {props.nama}
            </h3>
            <p className="text-sm text-slate-500 capitalize">{props.cabang}</p>
          </div>
        </div>
        <div
          className="hover:scale-[1.1] transition-all duration-[0.6s]"
          onClick={handleModal}
        >
          <DialogPopup uid={props.uid} />
        </div>
      </div>
      {/* <div className="py-2"></div>s */}
      <div className="dropdown text-md border-t-2 py-2">{props.keterangan}</div>
    </div>
  );
}
