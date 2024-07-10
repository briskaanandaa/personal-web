import { Spotlight } from "@/app/components/ui/Spotlight";
import { GradualSpacingDemo } from "./GradualSpacingDemo";

export function SpotlightPreview() {
  return (
    <div className="h-[100vh] w-full flex items-center justify-center bg-slate-950 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="-top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className=" p-4 max-w-7xl  mx-auto relative z-10  w-full pt-20 md:pt-0">
      <GradualSpacingDemo/>
      </div>
    </div>
  );
}
