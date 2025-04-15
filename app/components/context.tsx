"use client"
import { createContext, useContext, useState} from "react";

const AppContext = createContext(null);

export const AppWrapper = ({
  children,
}: {
  children: React.ReactNode,
}) => {

  const [varOne, setVarOne] = useState("");

  return (

    <AppContext.Provider value={{ varOne, setVarOne }}>

      {children}

    </AppContext.Provider>

  );
};

export const useAppContext = () => {
  
  return useContext(AppContext);
};