import type { Metadata, Viewport } from "next";
import { Geist } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import { ThemeProvider } from "@/components/providers/theme-provider";
import "./globals.css";

const _geist = Geist({ subsets: ["latin"] });

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  title: "Nantsoinaharimanana Nomena Tiavina - Full Stack Developer",
  description:
    "Développeur full-stack et ingénieur Energie renoubvelable passionné par des solutions innovantes en développement logiciel, concepteur d'application et ingenierie en énergie renouvelable.",
  generator: "noufy",
  icons: {
    icon: [
      {
        url: "/icon/icon-light-32x32.png",
        type: "image/svg+xml", // s'adapte light/dark automatiquement
      },
    ],
    apple: "/apple-icon.png", // → apple-icon-180.png renommé
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
        className={`${_geist.className} min-h-screen font-sans antialiased`}>
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange>
          {children}
        </ThemeProvider>
        {process.env.NODE_ENV === "production" && <Analytics />}
      </body>
    </html>
  );
}
