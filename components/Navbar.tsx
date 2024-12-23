"use client";

import { Button } from "@/components/ui/button";

export default function Navbar() {
  return (
    <nav className="flex justify-between border-b-[0.5px] max-w-2xl mx-auto px-10 py-4 border-black/10">
      <img alt="logo" src="/icon/logo-lc.png" className="w-[100px]" />
      <div>
        <Button
          className="bg-gradient-to-br from-red-500 to-red-700 text-white font-semibold"
          onClick={() =>
            (window.location.href = `https://registrasi.kampunginggris.id`)
          }
        >
          Daftar
        </Button>
      </div>
    </nav>
  );
}
