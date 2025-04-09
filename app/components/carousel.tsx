"use client"
import { useRef, useEffect } from "react";

const Carousel = () => {

    const ref = useRef(null);

    useEffect(() => {
  
      const { Carousel } = require("bootstrap");
      const carousel = new Carousel(ref.current, {
        pause: false,
      });
      carousel.cycle();
    }, []);

    return (

      <div ref={ref} className="carousel slide col-6 col-md-4 mx-auto mx-xl-0">

        <div className="carousel-inner">

          <div className="carousel-item active">

            a

          </div>

          <div className="carousel-item">

            b

          </div>

          <div className="carousel-item">

            c

          </div>

        </div>

      </div>
      
    );
};

export default Carousel;