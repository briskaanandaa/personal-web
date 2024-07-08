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
    <div className="flex flex-col md:flex-row w-full bg-slate-50">
    <div className="relative flex h-fit w-full max-w-[32rem] items-center justify-center overflow-hidden">
      <IconCloud iconSlugs={slugs} />
    </div>

    <div>
        <h1>Hello This is my tech stack</h1>
    </div>
    </div>
  );
}
