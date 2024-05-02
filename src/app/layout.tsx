import "~/styles/globals.css";

import { Inter } from "next/font/google";
import { ThemeProvider } from "@material-tailwind/react";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
});

export const metadata = {
  title: "Create T3 App",
  description: "Generated by create-t3-app",
  icons: [{ rel: "icon", url: "/favicon.ico" }],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <ThemeProvider>
        <body className={`font-sans ${inter.variable}`}>{children}</body>
      </ThemeProvider>
    </html>
  );
}
