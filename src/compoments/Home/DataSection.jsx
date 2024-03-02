import React, { useEffect } from "react";
import Aos from 'aos';
import 'aos/dist/aos.css'


function DataSection() {
  useEffect(()=>{
    Aos.init({duration : 600,
      easing: 'ease-in-out'})
  },[])
  return (
    <div data-aos="slide-up">
      <div className="w-[70%] mx-auto mb-10" >
        <div className="flex justify-center" >
          <div className="text-left py-3 px-3 " >
            <div className="w-full "  >
              <p className="text-[#991f48] mt-5 mr-5 text-lg leading-[1.4em]" >
                Are you looking for a professional, registered massage
                therapist? Sample Massage Therapy has 4 registered massage
                therapists who can provide clinical massage.
              </p>
            </div>
            <div className="text-lg text-[#5C5C5C] mt-6">
              We are committed to your long term health and well-being. Our
              multi-disciplinary clinic provides a balanced approach to a
              healthy lifestyle. Enhance your health and improve your
              performance with our treatments.
              <br />
              <br />
              We welcome you to come explore all the benefits you'll enjoy as
              one of our valued guests. Our professional staff is committed to
              offering the best massage therapy in Mainland.
            </div>
          </div>
        </div>
        <hr  className="mt-6 border-gray-300 h-1" />
      </div>
    </div>
  );
}

export default DataSection;
