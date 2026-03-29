import { Figtree, Outfit } from "next/font/google";
import "./globals.css";

const figtree = Figtree({
  weight: ["600", "700", "800"],
  subsets: ["latin"],
  variable: "--font-figtree",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata = {
  title: "Edan & Sherr Limited | Premium Nigerian Ginger",
  description:
    "Nigeria's premier ginger agro-processor. We export sun-dried, steam-treated, and milled ginger to buyers in 15+ countries. NAFDAC certified.",
};

export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${figtree.variable} ${outfit.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col bg-cream text-charcoal-900">
        <main className="flex-1 flex flex-col">
          {children}
        </main>
      </body>
    </html>
  );
}
