import React from "react";

const HomePage: React.FC = () => {
  return (
    <div>
      <div
        className="min-h-[60vh] sm:min-h-[80vh] md:min-h-screen w-full flex-col relative flex items-center justify-center"
        id="home"
      >
        <div className="pt-10 select-none">
          <p className="text-4xl sm:text-5xl md:text-7xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b dark:from-neutral-200 dark:to-neutral-500 from-neutral-600 to-neutral-800 py-2">
            Hi <span className="wave text-black">👋</span>
          </p>
          <div className="flex items-center gap-5">
            <span className="text-4xl sm:text-5xl md:text-7xl font-bold dark:text-white">
              I&apos;m
            </span>
            <p className="text-4xl sm:text-5xl md:text-7xl font-bold relative z-10 bg-clip-text text-transparent bg-gradient-to-b dark:from-gray-200 dark:to-blue-500 from-red-600 to-pink-800 py-2 cursor-pointer">
              Samarth Dhawan
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default HomePage;
