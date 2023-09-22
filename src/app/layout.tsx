import "./globals.css";
import type {Metadata} from "next";
import {Inter} from "next/font/google";
import {ClerkProvider} from "@clerk/nextjs";

const inter = Inter({subsets: ["latin"]});

export const metadata: Metadata = {
  title: "GlobeTix",
  description: "A ticket booking sites for your travel needs",
};

export default function RootLayout({children}: {children: React.ReactNode}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <main className="-20 overflow-x-hidden">{children}</main>
        </body>
      </html>
    </ClerkProvider>
  );
}
