import React,{useEffect} from 'react'
import Aos from 'aos';
import 'aos/dist/aos.css'

function LastSection() {

  useEffect(()=>{
    Aos.init({duration : 600,
      easing: 'ease-in-out'})
  },[])

  return (
    <div className = "h-[209px]" data-aos="slide-up">
      <div className = "w-[70%] mx-auto mb-7">
       <div className = "text-center">
       <div className = "text-[25px] leading-6 text-[#991f48] mt-5" >Family Wellness Massage Therapy</div> <br />
        <div className = "text-[18px] leading-[1.4em] mt-9 text-[#5C5C5C]">
        888 Griffiths Way, Mainland ML 12345<br />
        Tel: 987.654.3210<br />
        Email: info@yoursite.com
        </div>
       </div>
      </div>
    </div>
  )
}

export default LastSection
