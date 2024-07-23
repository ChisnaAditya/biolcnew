"use client";

import FloatButton from "@/components/FloatButton";
import Card from "./Card";
import { useEffect, useState } from "react";
import { onValue, ref } from "firebase/database";
import { db } from "../firebase";
import { AddData } from "./AddData";
import { InputForm } from "./Form";

export default function Teachers() {
  const [dataRaw, setDataRaw] = useState<any[]>([]);

  const readData = async () => {
    try {
      const dbRef = ref(db, "teachers");
      onValue(dbRef, (snapshot) => {
        const data = snapshot.val();
        setDataRaw(Object.entries(data));
      });
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    readData();
  }, []);
  return (
    <div className="relative min-h-screen bg-boxes">
      <div className="w-full p-20 bg-black/90 bg-polygon shadow-2xl">
        <h1 className="text-5xl text-redLC font-bold">Teachers</h1>
        <h2 className="text-lg text-slate-200">Kampung Inggris LC, Pare</h2>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-10 p-10">
        {dataRaw.map((teacher) => (
          <div id={teacher[0]} key={teacher[0]}>
            <Card
              uid={teacher[0]}
              nama={teacher[1].name}
              cabang={teacher[1].branch}
              keterangan={teacher[1].bio}
            />
          </div>
        ))}
      </div>
      {/* <FloatButton /> */}
      <InputForm />
      {/* {console.log(dataRaw) as any} */}
    </div>
  );
}
