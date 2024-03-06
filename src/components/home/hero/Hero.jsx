
import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";
import "./hero.css";

import image1 from "../../images/about.jpg";
import image2 from "../../images/pricing.jpg";
import image3 from "../../images/services.jpg";
import image4 from "../../images/about.jpg";

const Hero = () => {
  return (
    <>
      <section className='hero'>
        <div className='container'>
          <Carousel
            autoPlay
            interval={3000}
            infiniteLoop
            showThumbs={false}
            showStatus={false}
          >
            <div>
              <img src={image1} alt="Image 1" />
            </div>
            <div>
              <img src={image2} alt="Image 2" />
            </div>
            <div>
              <img src={image3} alt="Image 3" />
            </div>
            <div>
              <img src={image4} alt="Image 4" />
            </div>
          </Carousel>
        </div>
      </section>
    </>
  );
};

export default Hero;
