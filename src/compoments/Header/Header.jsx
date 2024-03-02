import React from "react";

function Header() {
  return (
    <header className="bg-white shadow-md w-full pb-3 ">
      <nav className="mt-4 w-[70%] flex justify-center items-center mx-auto">
        <div className="w-full ">
          <div className="py-9">
            <h1 className="text-4xl  text-[#991f48]">Family Wellness</h1>
            <p className="tracking-[0.18em] mt-2 ">MASSAGE THERAPY</p>
          </div>
          <div className=" flex  justify-evenly bg-[#B8B8B8] text-center font-bold text-white items-center  ">

            <div className=" text-center w-full p-2  bg-[#991f48] "> HOME</div>
            <div className="w-full text-center   p-2  transition-all hover:bg-[#c64c75] " > ABOUT</div>
            <div className="w-full text-center p-2 hover:bg-[#c64c75] "> SERVICE</div>
            <div className="w-full text-center  p-2 hover:bg-[#c64c75]"> FAQ</div>
            <div className="w-full text-center  p-2 hover:bg-[#c64c75]"> CONTACT</div>
          </div>
        </div>
      </nav>
    </header>
  );
}

export default Header;
