"use client";
import Image from "next/image";
import { useRef } from "react";
import { gsap, SplitText, useGSAP } from "@/lib/gsap";

export default function Home() {
  const h2Ref = useRef(null);
  const imageRef = useRef(null);
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
        stagger: 0.05,
        duration: 1,
        ease: "power4.out",
        scrollTrigger: {
          trigger: h2Ref.current,
          start: "top 80%",
        },
      });
      gsap.fromTo(
        imageRef.current,
        { clipPath: "polygon(25% 25%, 75% 25%, 75% 75%, 25% 75%)", scale: 1.2 },

        {
          clipPath: "polygon(0% 0%, 100% 0%, 100% 100%, 0% 100%)",
          scale: 1,
          duration: 1.5,
          ease: "power4.out",
          delay: 0.5,
        },
      );
    },
    {
      scope: container,
    },
  );

  return (
    <main ref={container}>
      <section className="h-screen overflow-hidden flex flex-col px-5 sm:px-10 sm:gap-32 gap-12 sm:py-36 py-24 sm:pb-16">
        {/* Top section with grid layout - takes available space and grows */}
        <div className="sm:grid sm:grid-cols-4 flex flex-col items-start gap-8 h-full">
          <h1 className="col-span-1">Minimal works.</h1>
          <div className="sm:col-start-3 flex h-full w-full sm:w-auto">
            <div className="relative flex sm:aspect-portrait h-full w-full sm:w-auto">
              <Image
                ref={imageRef}
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
          <div className="flex flex-row items-center gap-2">
            <div className="w-[3] h-[3] bg-foreground" />
            <h3>About me</h3>
          </div>
          <h2 ref={h2Ref}>
            I design and build thoughtful digital experiences — minimal in form,
            purposeful in function. Driven by clarity, craft, and curiosity.
          </h2>
        </div>
      </section>
      <section className="overflow-hidden flex flex-col gap-16 py-40 px-5 sm:px-10">
        {/* Top section with grid layout */}
        <div className="sm:grid sm:grid-cols-2 flex flex-col items-center gap-4">
          <h2>Selected works.</h2>
          <h2>22/25</h2>
        </div>

        {/* Bottom section with grid layout */}
        <div className="grid grid-cols-2 items-end gap-4">
          <div className="flex flex-row gap-2 items-center">
            <div className="w-[16px] h-[16px] bg-foreground" />
            <h2>01</h2>
          </div>
          <div className="flex relative aspect-16/10 h-auto w-full gap-2">
            <Image
              src="/connor.jpeg"
              fill
              className="object-cover"
              alt="hero image"
            />
          </div>
        </div>
      </section>
    </main>
  );
}
