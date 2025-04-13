"use client"
import { useAppContext } from "@/components/context";
import CarouselSlider from "@/components/carousel-slider";

const Home = () => {

  const { scrollingRef, setScrollingRef } = useAppContext();

  return (

    <main>

      <CarouselSlider  />

    </main>

  );
};

export default Home;