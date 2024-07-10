import { BackgroundBoxesDemo } from "./components/ui/BackgroundDemo";
import { IconCloudDemo } from "./components/ui/IconCloudDemo";
import { NavbarDemo } from "./components/ui/NavbarDemo";


export default function Home() {
  return (
   <div className="h-fit">

    <NavbarDemo/>
    <BackgroundBoxesDemo/>
    <IconCloudDemo/>


    </div>
  );
}
