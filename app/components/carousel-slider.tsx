"use client"
import { useRef, useEffect } from "react";
import Image from "next/image";

const CarouselSlider = () => {

    const ref = useRef(null);

    useEffect(() => {

      const sync = async () => {

      const { Carousel } = await import("bootstrap");

      const inst = new Carousel(ref.current, {
        pause: false,
      });

      inst.cycle();
    }
    sync();
    }, []);

    return (

      <div ref={ref} data-bs-ride="carousel" data-bs-pause="false" className="carousel slide col-6 col-md-4 mx-auto mx-xl-0">

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

export default CarouselSlider;