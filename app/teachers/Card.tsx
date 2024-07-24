"use client";

import Image from "next/image";
import { Avatar } from "@nextui-org/avatar";
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
            {/* <Image
              alt="foto profil teacher"
              src="/teachers/TEACHER 3 GIN.png"
              width={50}
              height={50}
            /> */}
            <Avatar src="/teachers/TEACHER 3 GIN.png" />
          </div>
          <div>
            <h3 className="text-md text-black/90 font-bold uppercase">
              {props.nama}
            </h3>
            <p className="flex items-center gap-1 text-sm text-slate-500 capitalize">
              <span>
                <Image
                  alt="foto profil teacher"
                  src={`/favicon.ico`}
                  width={15}
                  height={15}
                />
              </span>
              {props.cabang}
            </p>
          </div>
        </div>
        <div
          className="hover:scale-[1.1] transition-all duration-[0.6s]"
          onClick={handleModal}
        >
          <DialogPopup uid={props.uid} />
        </div>
      </div>
      <div className="dropdown text-sm border-t-2 py-2">
        {isOpen ? props.keterangan : props.keterangan.substring(0, 50) + `...`}
      </div>
      <p
        className="cursor-pointer text-sm text-right drop-shadow-2xl hover:underline"
        onClick={() => setIsOpen(!isOpen)}
      >
        {isOpen ? `Show less` : `Show more`}
      </p>
    </div>
  );
}
