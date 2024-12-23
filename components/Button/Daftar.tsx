"use client";

type Content = {
  nama: string;
  path: string;
};

export default function Daftar(props: Content) {
  return (
    <div className="border-[1px] border-fuchsia-500">
      <button
        onClick={() => alert(`Daftar ${props.nama}`)}
        className="bg-fuchsia-500 text-neutral-50 gont-bold px-4 py-1 font-bold transition-all ease-linear hover:-translate-x-1 hover:-translate-y-1"
      >
        Daftar
      </button>
    </div>
  );
}
