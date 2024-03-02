import React from "react";

function Footer() {
  return (
    <>
      <footer className="w-full">
        <div className="flex justify-center items-center p-4 bg-[#B8B8B8] mb-4">
          <div className="text-[12px]">
            Copyright 2019 Website.com. All Rights Reserved.
          </div>
        </div>
        <div className="text-center my-5 mx-auto ">
          <p className="mb-3">
            <a href="#">Website Created</a> & Hosted by Website.com{" "}
            <a href="#">Website Builder</a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
