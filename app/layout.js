import { Analytics } from "@vercel/analytics/next"
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Animeverse",
  description: "Welcome to Animeverse – your ultimate anime destination! Stream your favorite anime titles in sync with friends and explore a vast library of series and movies. Join our vibrant community for an unforgettable anime-watching experience!",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {children}
        <Analytics />
      </body>
    </html>
  );
}
