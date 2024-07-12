import { Spotlight } from "@/app/components/ui/Spotlight";
import BlurInDemo from "./BlurInDemo";
import { GradualSpacingDemo } from "./GradualSpacingDemo";
import { IconCloudDemo } from "./IconCloudDemo";

export function SpotlightPreview() {
  return (
    <div className="h-[100vh] w-full flex items-start justify-start bg-slate-900 antialiased bg-grid-white/[0.02] relative overflow-hidden">
      <Spotlight
        className="top-40 left-0 md:left-60 md:-top-20"
        fill="white"
      />
      <div className="h-full md:p-10 max-w-7xl relative z-10 items-center flex flex-col md:flex-row  w-full">
      
      <div className="flex flex-col pt-20 pb-5 md:py-10 px-5">
      <GradualSpacingDemo/>
      <BlurInDemo/>
      </div>

      <IconCloudDemo/>
      </div>
    </div>
  );
}
