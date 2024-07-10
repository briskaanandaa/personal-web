"use client";
import { cn } from "@/app/utils/cn";
import { Boxes } from "../ui/background-boxes";

export function BackgroundBoxesDemo() {
  return (
    <div className="h-[100vh] relative w-full overflow-hidden bg-slate-50 flex flex-col items-center justify-center">
      <div className="absolute inset-0 w-full h-full bg-slate-50 z-20 [mask-image:radial-gradient(transparent,white)] pointer-events-none" />

      <Boxes />
      <h1 className={cn("md:text-4xl text-xl text-white relative z-20")}>
        Hello, Briska is here
      </h1>
      <p className="text-center mt-2 text-neutral-300 relative z-20">
        A happy Website Developer
      </p>
    </div>
  );
}
