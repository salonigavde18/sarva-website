import localFont from "next/font/local";
import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Preloader from "./components/Preloader";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
  display: "swap",
});

const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
  display: "swap",
});

export const metadata = {
  title: "Sarva | Clothing brand",
  description: "Experience tranquility and rejuvenation at Sarva",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased font-light`}
      >
        <Preloader/>
        <Navbar />

        <main className="min-h-screen w-full overflow-x-hidden">
          {children}
        </main>

        <Footer />
      </body>
    </html>
  );
}
