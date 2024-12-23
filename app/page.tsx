import Image from "next/image";

export default function Home() {
  return (
    <div className="relative grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen overflow-hidden p-8 pb-20 gap-16 sm:p-20 font-[family-name:var(--font-geist-sans)]">
      <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start bg-pattern">
        <article className="prose prose-neutral">
          <div>Hi, there...</div>
          <h1>LC is amazing</h1>
          <p>
            I bring you here to explore {""}
            <span className="bg-amber-400">
              {" "}
              all of programs, information, ect.
            </span>{" "}
            that we have provided
          </p>
        </article>

        {/* <div className="flex item-center justify-center border-[2px] border-[#29363B] rounded-xl in-h-[200px] w-full bg-[#0AC3AB]"></div> */}

        <article className="prose">
          <blockquote className="italic text-[#E31413]">
            "Best Teachers and Best Environtment for The Best Result"
          </blockquote>
        </article>

        {/* <div className="w-full">
          <h2 className="text-2xl font-semibold py-4">Branches:</h2>
          <div className="grid grid-cols-3 gap-4"></div>
        </div> */}
      </main>
      <footer className="row-start-3 flex gap-6 flex-wrap items-center justify-center">
        <p>
          Made with love @2024 by{" "}
          <span className="underline">Marketing Language Center</span>
        </p>
      </footer>
    </div>
  );
}
