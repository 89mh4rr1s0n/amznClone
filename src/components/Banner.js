import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";

const Banner = () => {
  return (<>
  <div className='relative'>
      <div 
      className='absolute w-full h-32 
      bg-gradient-to-t from-gray-200 via-gray-200 to-transparent bottom-0 z-30' />
      <Carousel
      autoPlay
      infiniteLoop
      showStatus={false}
      showIndicators={false}
      showThumbs={false}
      interval={4000}
      >
        <div>
            <img loading="lazy" src="/BFF-V1-01-Hero-D-6bababd9-ff42-407e-8e71-b6b0012e8def._CB417386616_QL85_V1_.jpg" alt=''/>
        </div>
        <div>
            <img loading="lazy" src="https://links.papareact.com/6ff" alt=''/>
        </div>
        <div>
            <img loading="lazy" src="https://links.papareact.com/7ma" alt=''/>
        </div>
        {/* <div>
            <img loading="lazy" src="/PrimeDay-Empire-Banner.jpg" alt=''/>
        </div> */}
      </Carousel>
  </div>
  </>)};

export default Banner;
