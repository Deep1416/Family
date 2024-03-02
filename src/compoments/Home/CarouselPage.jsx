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
         <img src="https://images.unsplash.com/photo-1517329782449-810562a4ec2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8N3x8aW1hZ2V8ZW58MHx8MHx8fDA%3D"  />
         {/* <p className="legend">Legend 1</p> */}
       </div>
       <div style={{
       
      }}>
         <img src="https://images.unsplash.com/photo-1575936123452-b67c3203c357?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D" />
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