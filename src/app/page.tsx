import { FloatingNavDemo } from "./components/ui/FloatingNavDemo";
import { GridBackgroundDemo } from "./components/ui/GridBackground";
import { IconCloudDemo } from "./components/ui/IconCloudDemo";



export default function Home() {
  return (
   <div className="h-fit">

    <GridBackgroundDemo/>
    <FloatingNavDemo/>
    <IconCloudDemo/>


    </div>
  );
}
