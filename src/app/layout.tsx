import "./styles/globals.css";
import Providers from "./redux/provider";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Jacob's Website",
  description: "Jacob's Website for all the next coding tech practice",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Providers>
          {/* <HeaderNavigation /> */}
          {children}
          {/* <Footer /> */}
        </Providers>
      </body>
    </html>
  );
}
