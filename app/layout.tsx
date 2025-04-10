import Bootstrap from "@/components/bootstrap";
import localFont from "next/font/local";
import type { Metadata } from "next";
import { AppWrapper } from "@/components/context";
import "@/styles/app.scss";

const poppins = localFont({
  display: "swap",
  variable: "--font-poppins",
  src: [
    {
      path: "../public/fonts/Poppins-Thin.ttf",
      weight: "100",
    },
    {
      path: "../public/fonts/Poppins-ExtraLight.ttf",
      weight: "200",
    },
    {
      path: "../public/fonts/Poppins-Light.ttf",
      weight: "300",
    },
    {
      path: "../public/fonts/Poppins-Regular.ttf",
      weight: "400",
    },
    {
      path: "../public/fonts/Poppins-Medium.ttf",
      weight: "500",
    },
    {
      path: "../public/fonts/Poppins-SemiBold.ttf",
      weight: "600",
    },
    {
      path: "../public/fonts/Poppins-Bold.ttf",
      weight: "700",
    },
    {
      path: "../public/fonts/Poppins-ExtraBold.ttf",
      weight: "800",
    },
    {
      path: "../public/fonts/Poppins-Black.ttf",
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

        <Bootstrap />

        <AppWrapper>
          
          {children}

        </AppWrapper>
        
      </body>

    </html>

  );
};

export default RootLayout;