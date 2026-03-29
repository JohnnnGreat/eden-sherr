import { Cormorant_Garamond, Outfit } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const cormorantGaramond = Cormorant_Garamond({
  weight: ["400", "500", "600"],
  style: ["normal", "italic"],
  subsets: ["latin"],
  variable: "--font-dm-serif",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Edan & Sherr Limited — Premium Nigerian Ginger",
  description:
    "Nigeria's premier ginger agro-processor. We export sun-dried, steam-treated, and milled ginger to buyers in 15+ countries. NAFDAC certified.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${cormorantGaramond.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal-900">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
