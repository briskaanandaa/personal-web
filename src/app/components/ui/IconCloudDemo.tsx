import IconCloud from "@/app/components/ui/icon-cloud";

const slugs = [
  "typescript",
  "javascript",
  "react",
  "html5",
  "css3",
  "tailwindcss",
  "bootstrap",
  "nodedotjs",
  "express",
  "postgresql",
  "firebase",
  "vercel",
  "nextdotjs",
  "framer",
  "git",
  "github",
  "gitlab",
  "visualstudiocode",
  "figma",
  "webflow",
  "wordpress",
  "python",
  "elementor",
];

export function IconCloudDemo() {
  return (

    <div className="flex flex-col md:flex-row w-full bg-neutral-50 px-[10%] h-[100vh] justify-center items-center">
    <div className="relative flex h-fit w-full max-w-[32rem] items-center justify-center overflow-hidden">
      <IconCloud iconSlugs={slugs} />
    </div>

    <div className="w-full h-full p-[10%]">
        <h1 className="text-slate-800 text-lg font-semibold text-center">This is my tech stack</h1>
        
    </div>
    </div>
  );
}
