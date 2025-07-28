"use client";
import Image from "next/image";
import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

export default function Home() {
  const h2Ref = useRef(null);
  const container = useRef(null);

  useGSAP(
    () => {
      const Split = SplitText.create(h2Ref.current, {
        type: "lines",
        linesClass: "lineH2",
        mask: "lines",
      });
      gsap.from(Split.lines, {
        yPercent: 100,
        stagger: 0.08,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: h2Ref.current,
          start: "top 80%",
        },
      });
    },
    {
      scope: container,
    }
  );

  return (
    <main ref={container} className="w-full overflow-visible">
      <section className="h-screen overflow-hidden flex flex-col sm:pt-36 pt-24 pb-8 px-5 sm:px-10 sm:gap-32 gap-4 bg-[#F1FF00]">
        {/* Top section with grid layout - takes available space and grows */}
        <div className="sm:grid sm:grid-cols-4 flex flex-col items-start gap-8 h-full">
          <h1 className="col-span-1">Minimal works.</h1>
          <div className="sm:col-start-3 flex h-full">
            <div className="relative flex aspect-2/3 w-auto">
              <Image
                src="/portrait.jpeg"
                fill
                className="object-cover"
                alt="hero image"
              />
            </div>
          </div>
        </div>

        {/* Bottom section with grid layout - only takes content height */}
        <div className="sm:grid sm:grid-cols-2 flex flex-col items-start gap-8">
          <div className="flex flex-row gap-2 pt-[16px]">
            <div className="w-[16px] h-[16px] bg-foreground" />
            <h3>About me</h3>
          </div>
          <h2 ref={h2Ref}>
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
    </main>
  );
}
