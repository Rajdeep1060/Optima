import React from 'react';
import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import img3 from "../assets/5.webp";

const Services = () => {
  return (
    <div className='services'>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1500}
        style={{ maxHeight: '100vh' }}
      >
        <div>
          <img src={img1} alt='item1' style={{ objectFit: 'contain' }} />
          <p className='legend'>Full stack</p>
        </div>
        <div>
          <img src={img2} alt='item2' style={{ objectFit: 'contain' }} />
          <p className='legend'>Peer to peer support service</p>
        </div>
        <div>
          <img src={img3} alt='item3' style={{ objectFit: 'contain' }} />
          <p className='legend'>Technical Support Services</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
