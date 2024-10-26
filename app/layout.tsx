import "./globals.css";
import type { Metadata } from "next";
import { Inter, Dancing_Script } from "next/font/google";
import DarkProvider from "../components/DarkProvider";
import { CartProvider } from "@/context/cartContext";
import Headers from "../components/Headers";
import ScrollTopButton from "@/components/ScrollTopButton";
import MediaHeaders from "@/components/mediacomponents/MediaHeaders";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "RecipeHub",
};

const script = Dancing_Script({
  subsets: ['latin'],
  display: 'swap',
  variable: '--text-script'
})

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.className} ${script.variable} dark:bg-gray-900 bg-gray-200`}>
        <DarkProvider>
          <CartProvider>
            <MediaHeaders/>
            <Headers />
            <main className="mt-16 md:mt-36">
              {children}
            </main>
            <ScrollTopButton/>
            <Footer/>
          </CartProvider>
        </DarkProvider>
      </body>
    </html>
  );
}
