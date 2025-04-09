import Bootstrap from "@/components/bootstrap";
import localFont from "next/font/local";
import type { Metadata } from "next";
import "@/styles/app.scss";

const poppins = localFont({
  display: "swap",
  variable: "--font-poppins",
  src: [
    {
      path: "/styles/fonts/Poppins-Thin.ttf",
      weight: "100",
    },
    {
      path: "/styles/fonts/Poppins-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "/styles/fonts/Poppins-Light.ttf",
      weight: "300",
    },
    {
      path: "/styles/fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "/styles/fonts/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "/styles/fonts/Poppins-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "/styles/fonts/Poppins-Bold.ttf",
      weight: "700",
    },
    {
      path: "/styles/fonts/Poppins-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "/styles/fonts/Poppins-Black.ttf",
      weight: "900",
    },
  ],
})

export const metadata: Metadata = {
  title: "App",
  description: "App",
};

const RootLayout = ({
  children,
}: {
  children: React.ReactNode,
}) => {

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

export default RootLayout;