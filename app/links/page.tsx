"use client";
import React, { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../firebase";
// import { Link } from "@nextui-org/link";
import { Link, Button } from "@nextui-org/react";

export default function Links() {
  const [links, setLinks] = useState<any[]>([]);

  useEffect(() => {
    const dbRef = ref(db, "links");
    onValue(dbRef, (snapshot) => {
      const data = snapshot.val();
      setLinks(Object.values(data));
    });
  }, []);

  return (
    <div className="min-h-screen">
      <div className="flex flex-col items-center py-10">
        <img alt="logolc" src={`../favicon.ico`} className="w-[50px]" />
        <h1>@kampunginggrislc</h1>
      </div>
      <div className="max-w-2xl container">
        <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
          Link Google Drive
        </h1>
        <p className="leading-7 [&:not(:first-child)]:mt-6">
          Beberapa kegiatan yang sudah terdokumentasi akan dicantumkan pada link
          dibawah ini. Kalian bisa mengaksesnya dengan cara klik salah satu yang
          kalian inginkan.
        </p>
        <div className="flex flex-wrap gap-4 rounded-lg mx-auto mt-10">
          {links.map((item, index) => (
            <Button
              key={index}
              title={item.title}
              href={item.link}
              variant="solid"
              color="primary"
              as={Link}
              showAnchorIcon
            >
              {item.title}
            </Button>
          ))}
        </div>
      </div>
    </div>
  );
}
