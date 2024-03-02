import React from "react";

function SectionSecond() {
  return (
    <div className=" bg-[#991f48] h-72 mb-2 ">
      <div className="flex justify-center w-[70%] mx-auto p-5">
        <div className="text-center">
          <div className="p-4">
            <h1 className="text-center text-[40px] text-white">
              Think Health. Think Massage.
            </h1>
          </div>
          <div className="px-5">
            <h4 className =" text-center  text-[18px] leading-7 mx-8 text-white ">
              We are open 9am to 6pm; Monday through Sunday. If you would like
              to schedule an appointment with us, please call us at 987-654-3210
              today!
            </h4>
          </div>
          <div className="flex justify-center items-center gap-4 p-6">
            <button className="py-4 px-9 text-white border border-white font-bold hover:bg-white hover:text-[#991f48]"  type="submit">
              LEARN MORE ABOUT US
            </button>
            <button type="submit" className="py-4 px-10 text-white border border-white font-bold hover:bg-white hover:text-[#991f48]">
              CONTACT US TODAY
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default SectionSecond;
