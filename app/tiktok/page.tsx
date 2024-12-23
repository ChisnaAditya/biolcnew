import CardV1 from "@/components/Card/CardV1";
import TrendingSlider from "@/components/Slider/sliderV1";
import { Card } from "@/components/ui/card";

export default function Home() {
  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
        <article className="prose prose-neutral">
          {/* <div>Hi, there...</div> */}
          <h1 className="leading-[1.2em]">
            Yuk, pilih{" "}
            <span className="text-red-500 drop-shadow-2xl">
              program atau kelas
            </span>{" "}
            yang sesuai dengan kebutuhan kamu
          </h1>
          <p>
            Kursus bahasa Inggris{" "}
            <span className="bg-amber-400">paket lengkap</span> plus asrama
            dengan fasilitas English area
          </p>
        </article>

        {/* <div className="flex item-center justify-center border-[0.1px] border-[#43464730] rounded-xl in-h-[200px] w-full"></div> */}

        {/* <article className="prose">
          <blockquote className="italic text-red-500">
            Unlock Your English Potential at Kampung Inggris LC with Powerful
            Method + Cozy Camp
          </blockquote>
        </article> */}

        <div className="w-full">
          <article className="prose">
            <h2>Desember Ceria</h2>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Nobis,
              omnis?
            </p>
            {/* <TrendingSlider /> */}
          </article>
        </div>

        <div className="w-full">
          <article className="prose">
            <h2>Cabang LC</h2>
            <p></p>
          </article>
          <div className="grid grid-cols-3 gap-4">
            <CardV1 path="pare" name="pare" />
            <CardV1 path="online" name="online" />
            <CardV1 path="bandung" name="bandung" />
            <CardV1 path="bogor" name="bogor" />
            <CardV1 path="jogja" name="jogja" />
            <CardV1 path="lampung" name="lampung" />
            <CardV1 path="makassar" name="makassar" />
            <CardV1 path="medan" name="medan" />
            <CardV1 path="serang" name="serang" />
          </div>
        </div>
        <div className="w-full">
          <h2 className="text-2xl font-semibold py-4">Others:</h2>
          <div className="grid gap-4">
            <CardV1 path="rombongan" name="daftar rombongan" />
            <CardV1 path="mitra" name="mitra cabang" />
            <CardV1 path="carrers" name="carrers" />
            <CardV1 path="telegram" name="grup telegram" />
          </div>
          <div>
            <Card />
          </div>
        </div>
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>@2024 Powered by Kampung Inggris LC</p>
      </footer>
    </div>
  );
}
