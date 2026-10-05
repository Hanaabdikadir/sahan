import { Fraunces, Outfit } from "next/font/google";
import "./globals.css";
import { Footer, Nav } from "./site";

const display = Fraunces({
  subsets: ["latin"],
  variable: "--font-display",
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Sahan — Modern restaurant",
  description: "A bright modern dining room for grilled plates, warm bread, and slow evenings.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${display.variable} ${sans.variable} h-full`}>
      <body className="min-h-full bg-[#f6f1e8] font-[family-name:var(--font-sans)] text-[#1c1915] antialiased">
        <Nav />
        {children}
        <Footer />
      </body>
    </html>
  );
}
