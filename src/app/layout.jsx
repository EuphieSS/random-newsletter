import "./globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Random Newsletter",
  description: "A Weekly Dose of Cuteness to Make You Smile",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <main className="h-screen flex justify-center items-center">
          {children}
        </main>
      </body>
    </html>
  );
}
