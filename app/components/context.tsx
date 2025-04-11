"use client"
import { createContext, useContext, useState} from "react";

const AppContext = createContext(null);

export const AppWrapper = ({
  children,
}: {
  children: React.ReactNode,
}) => {

  const [scrollingRef, setScrollingRef] = useState(0);

  return (

    <AppContext.Provider value={{ scrollingRef, setScrollingRef }}>

      {children}

    </AppContext.Provider>

  );
};

export const useAppContext = () => {
  
  return useContext(AppContext);
};