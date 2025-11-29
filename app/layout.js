import { Outfit, Prata } from "next/font/google";
import "./globals.css";

const outfit = Outfit({
  subsets: ["latin"],
  weight: ["400","500","600","700"],
});

const prata = Prata({
  subsets: ["latin"],
  weight: ["400"],
});

export const metadata = {
  title: "My Portfolio",
  description: "All the details about me and my services",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth dark">
      <body
        className={`${outfit.variable} ${prata.variable} antialiased dark:bg-darkTheme dark:text-white`}
      >
        {children}
      </body>
    </html>
  );
}
