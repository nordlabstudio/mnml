import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <section className="h-screen overflow-hidden flex flex-col justify-between pt-36 pb-8 px-5 sm:px-10 bg-[#F1FF00]">
        {/* Top section with grid layout */}
        <div className="sm:grid sm:grid-cols-2 flex flex-col items-start gap-4">
          <h1>Minimal works.</h1>
        </div>

        {/* Bottom section with grid layout */}
        <div className="sm:grid sm:grid-cols-2 flex flex-col items-start gap-4">
          <div className="flex flex-col gap-2">
            <div className="w-[16px] h-[16px] bg-foreground" />
          </div>
          <h2>
            I design and build thoughtful digital experiences — minimal in form,
            purposeful in function. Driven by clarity, craft, and curiosity.
          </h2>
        </div>
      </section>
      <section className="h-screen overflow-hidden flex flex-col justify-between pt-36 pb-8 px-5 sm:px-10">
        {/* Top section with grid layout */}
        <div className="grid sm:grid-cols-2 grid-cols-1 items-center gap-4">
          <h2>Selected works.</h2>
        </div>

        {/* Bottom section with grid layout */}
        <div className="grid grid-cols-2 items-start gap-4">
          <div className="flex flex-row gap-2">
            <div className="w-[16px] h-[16px] bg-foreground" />
            <h3>In progress.</h3>
          </div>
          <Image src="/connor.jpeg" width={500} height={500} alt="hero image" />
        </div>
      </section>
    </>
  );
}
