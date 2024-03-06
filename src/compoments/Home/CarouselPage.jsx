import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const CarouselPage = () => {
  return (
    <div style={{
      width :"70%"
    }} className = "mx-auto mb-3" >
      <Carousel dynamicHeight  showArrows width showThumbs >
      <div style={{
       
      }}>
         <img src="https://images.unsplash.com/photo-1511895426328-dc8714191300?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
         {/* <p className="legend">Legend 1</p> */}
       </div>
       <div style={{
       
      }}>
         <img src="https://images.unsplash.com/photo-1524307751606-4f70b5303caa?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" />
         {/* <p className="legend">Legend 2</p> */}
       </div>
      <div style={{
        
      }}>
      <img src="https://images.unsplash.com/photo-1488372759477-a7f4aa078cb6?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" />
      {/* <p className="legend">Legend 3</p> */}
     </div>
   </Carousel>
    </div>
  );
};
export default CarouselPage