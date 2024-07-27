import type { Metadata } from "next";
import "./globals.css";

import { Header, MainFooter } from "@/components";

export const metadata: Metadata = {
  title: "BOOK STORE",
  description: "Apple Books is the single destination to find, buy, and dive into audiobooks and ebooks. Browse curated collections and get personalized recommendations. Share your books with up to five family members.* All with no subscription or monthly commitment.",
  icons: {
    icon: '/assets/icons/logo.svg'
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Header/>
        <main className="dark:bg-gray-900">
          {children}
        </main>
        <MainFooter/>
      </body>
    </html>
  );
}
