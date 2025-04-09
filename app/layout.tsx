import type { Metadata } from "next";
import "@/styles/app.scss";

export const metadata: Metadata = {
  title: "App",
  description: "App",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}