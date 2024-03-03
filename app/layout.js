import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/layout/navbar/Navbar";
import Footer from "@/components/layout/footer/Footer";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Animeverse",
  description: "Welcome to Animeverse – your ultimate anime destination! Stream your favorite anime titles in sync with friends and explore a vast library of series and movies. Join our vibrant community for an unforgettable anime-watching experience!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
