import type { Metadata } from "next";
import { Inter, Outfit } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Airbnb Price Predictor | AI-Powered",
  description: "Predict Airbnb rental prices instantly using advanced machine learning.",
  icons: {
    icon: [
      {
        url: "data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 32 32' fill='%23FF385C'><path d='M16 1c2.008 0 3.463.963 4.751 3.269l.533 1.025c1.954 3.83 6.114 12.54 7.1 14.836l.145.353c.667 1.591.91 3.25.722 4.933-.483 4.336-3.6 7.587-7.951 7.587-3.088 0-5.864-1.782-6.985-4.408l-.315-.8-.315.8c-1.121 2.626-3.897 4.408-6.985 4.408-4.351 0-7.468-3.251-7.951-7.587-.188-1.683.055-3.342.722-4.933l.144-.353c.987-2.296 5.148-11.006 7.102-14.836l.533-1.025C12.536 1.963 13.992 1 16 1z'/></svg>",
        type: "image/svg+xml",
      },
    ],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${outfit.variable} antialiased bg-white dark:bg-slate-900 text-gray-900 dark:text-white selection:bg-airbnb selection:text-white overflow-x-hidden transition-colors duration-300`}
      >
        <ThemeProvider>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
