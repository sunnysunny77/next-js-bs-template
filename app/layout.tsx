import Bootstrap from "@/components/bootstrap";
import localFont from 'next/font/local'
import type { Metadata } from "next";
import "@/styles/app.scss";

const poppins = localFont({
  display: "swap",
  variable: "--font-poppins",
  src: [
    {
      path: "/fonts/Poppins-Thin.ttf",
      weight: "100",
    },
    {
      path: "/fonts/Poppins-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "/fonts/Poppins-Light.ttf",
      weight: "300",
    },
    {
      path: "/fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "/fonts/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "/fonts/Poppins-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "/fonts/Poppins-Bold.ttf",
      weight: "700",
    },
    {
      path: "/fonts/Poppins-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "/fonts/Poppins-Black.ttf",
      weight: "900",
    },
  ],
})

export const metadata: Metadata = {
  title: "App",
  description: "App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode,
}) {

  return (

    <html lang="en">

      <body className={poppins.variable}>

        <main>
          
          {children}

        </main>
        
      </body>

      <Bootstrap />

    </html>

  );
};