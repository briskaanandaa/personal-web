import { BackgroundBoxesDemo } from "./components/ui/BackgroundDemo";
import { IconCloudDemo } from "./components/ui/IconCloudDemo";
import NavbarPortfolio from "./components/ui/Navbar";
import { NavbarDemo } from "./components/ui/NavbarDemo";


export default function Home() {
  return (
   <div className="h-fit">

    <NavbarDemo/>
    <NavbarPortfolio/>
    <BackgroundBoxesDemo/>
    <IconCloudDemo/>


    </div>
  );
}
