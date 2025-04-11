"use client"
import { useAppContext } from "@/components/context";
import Carousel from "@/components/carousel";

const Home = () => {

  const { scrollingRef, setScrollingRef } = useAppContext();

  return (

    <main>

      <Carousel />

    </main>

  );
};

export default Home;