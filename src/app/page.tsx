import HeroSection from "./components/Page/HeroSection";
import { DockDemo } from "./components/ui/DockDemo";
import { HeroParallaxDemo } from "./components/ui/HeroParallaxDemo";


export default function Home() {
  return (
   <div className="h-[200vh]">
  
  
  <HeroSection/>
  <HeroParallaxDemo/>
  <DockDemo/>

    </div>
  );
}
