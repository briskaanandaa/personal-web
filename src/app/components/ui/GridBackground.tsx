
export function GridBackgroundDemo() {
  return (
    <div className="h-[100vh] w-full dark:bg-black bg-white  dark:bg-grid-white/[0.2] bg-grid-black/[0.2] relative flex items-center justify-center">
      {/* Radial gradient for the container to give a faded look */}
      <div className="absolute pointer-events-none inset-0 flex items-center justify-center dark:bg-black bg-white [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)]"></div>
      
      <div className="flex flex-col items-center justify-center">
      <h1 className="text-4xl sm:text-7xl font-bold relative z-20 bg-clip-text text-transparent bg-gradient-to-b from-slate-200 to-slate-800 py-8">
        Hello,Briska is here
      </h1>

      <p className="text-slate-900 text-center"> 
      A happy UI/UX Designer and Web Developer who loves building beautiful web experiences <br/> and help others grow in web development.
      </p>
      </div>
    </div>
  );
}
