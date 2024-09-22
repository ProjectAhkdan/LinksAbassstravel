import type { Metadata } from "next";
import "./globals.css";
import localfont from "next/font/local";


const Inter = localfont({
  src: [
    { 
      path: "./font/WorkSans-Italic-VariableFont_wght.ttf",
    },
    {
      path: "./font/WorkSans-VariableFont_wght.ttf",
    },
  ],
});

export const metadata: Metadata = {
  title: "Abas-Travel",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={Inter.className}>{children}
      </body>
    </html>
  );
}
