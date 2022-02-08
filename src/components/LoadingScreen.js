import React from "react";

function LoadingScreen() {
  return (
    <div class="flex flex-col justify-center items-center bg-[#038ECD] h-screen w-screen">
      <p class="font-extrabold font-sans text-white text-xl">
        Going to <span class="text-red-400 tracking-wide ">Rax's Gallery</span>{" "}
        ...
      </p>

      <div class="w-[250px] h-[6px] bg-[#e8e9f3] mt-[22px] relative overflow-hidden">
        <div class="before:content-[''] before:absolute before:w-[125px] before:h-[8px] before:top-0 before:left-0 before:bg-red-500 before:animate-loading relative before:-translate-x-9"></div>
      </div>
    </div>
  );
}

export default LoadingScreen;
