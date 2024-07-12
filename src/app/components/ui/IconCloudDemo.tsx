import IconCloud from "@/app/components/magicui/iconcloud";

const slugs = [
  "typescript",
  "javascript",
  "java",
  "react",
  "html5",
  "css3",
  "nodedotjs",
  "express",
  "nextdotjs",
  "flask",
  "python",
  "firebase",
  "php",
  "laravel",
  "angular",
  "vuedotjs",
  "vercel",
  "netlify",
  "framer",
  "webflow",
  "notion",
  "trello",
  "mysql",
  "git",
  "arduino",
  "github",
  "visualstudiocode",
  "elementor",
  "wordpress",
  "figma",
];

export function IconCloudDemo() {
  return (
    <div className="relative flex p-3 md:h-full md:w-full md:p-2 items-center justify-center overflow-hidden rounded-lg bg-background">
      <IconCloud iconSlugs={slugs} />
    </div>
  );
}
