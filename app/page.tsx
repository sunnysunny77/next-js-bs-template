"use client"
import { useEffect } from "react";
import { useAppContext } from "@/components/context";
import CarouselSlider from "@/components/carousel-slider";

const Home = () => {

  const { varOne, setVarOne } = useAppContext();

  useEffect(() => {

    setVarOne("hello word");
  }, [setVarOne]);

  return (

    <main className="mt-5">

     { varOne }

      <CarouselSlider  />

    </main>

  );
};

export default Home;