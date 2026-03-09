import "./globals.css";
import Navbar from "./components/Navbar.jsx";

import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  weight: ["400", "600", "700", "800"]
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${inter.className}`}
      >
      <Navbar />
        {children}
      </body>
    </html>
  );
}
