import "./globals.css";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import DarkProvider from "../components/DarkProvider";
import { CartProvider } from "@/context/cartContext";
import Headers from "../components/Headers";
import ScrollTopButton from "@/components/ScrollTopButton";
import MediaHeaders from "@/components/mediacomponents/MediaHeaders";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RecipeHub",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <DarkProvider>
          <CartProvider>
            <MediaHeaders/>
            <Headers />
            <main className="mt-16 md:mt-32">
              {children}
            </main>
            <ScrollTopButton/>
          </CartProvider>
        </DarkProvider>
      </body>
    </html>
  );
}
