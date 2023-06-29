import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from "../assets/3.jpg";
import img2 from "../assets/4.jpg";
import img3 from "../assets/download.jpeg";

const Services = () => {
  return (
    <div style={{ maxWidth: "100%", height: "auto" }}>
      <Carousel
        infiniteLoop
        autoPlay
        showStatus={false}
        showArrows={false}
        showThumbs={false}
        interval={1000}
      >
        <div>
          <img src={img1} alt="Item1" style={{ width: "100%", height: "auto" }} />
          <p className="legend">Full Stack</p>
        </div>
        <div>
          <img src={img2} alt="Item2" style={{ width: "100%", height: "auto" }} />
          <p className="legend">Peer-to-peer Support</p>
        </div>
        <div>
          <img src={img3} alt="Item3" style={{ width: "100%", height: "auto" }} />
          <p className="legend">Technical support services</p>
        </div>
      </Carousel>
    </div>
  );
};

export default Services;
