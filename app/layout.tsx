import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import CustomCursor from "@/components/CustomCursor";
import { ViewTransitions } from "next-view-transitions";
import { Analytics } from '@vercel/analytics/next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Rahul's Stack",
  description: "You are watching Rahul's Portfolio",
  icons: "/R.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ViewTransitions>
      <html lang="en" suppressHydrationWarning>
        <meta name="viewport" content="width=1024, user-scalable=no" />
        <body
          className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        >
          <CustomCursor></CustomCursor>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            {children}
            <Analytics></Analytics>
          </ThemeProvider>
        </body>
      </html>
    </ViewTransitions>
  );
}
