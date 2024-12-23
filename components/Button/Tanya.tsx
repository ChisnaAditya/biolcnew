"use client";

type Content = {
  nama: string;
  path: string;
};

export default function Tanya(props: Content) {
  return (
    <div className="border-[1px] border-sky-500">
      <button
        onClick={() => alert(`Tanya ${props.nama}`)}
        className="bg-sky-500 text-neutral-50 gont-bold px-4 py-1 font-bold transition-all ease-in hover:-translate-x-1 hover:-translate-y-1"
      >
        Tanya
      </button>
    </div>
  );
}
