"use client"
import { useEffect } from "react";
import Link from 'next/link';

export default function Anchor() {

  useEffect(() => {

    import("bootstrap/js/dist/button");
  }, []);

  return ( 
    <>

      <Link href="/" className="btn btn-primary">

        HOME
        
      </Link>

    </>
  );
}