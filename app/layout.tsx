import "./globals.css";
import type { Metadata } from "next";
import { Inter, IBM_Plex_Serif } from "next/font/google";

const ibmPlexSerif = IBM_Plex_Serif({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-ibm-plex-serif",
});
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

export const metadata: Metadata = {
  title: "Horizon",
  description: "Horizon is a Modern Banking Platform for Everyone.",
  icons: {
    icon: "icons/logo.svg",
  },
};

const RootLayout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${ibmPlexSerif.variable}`}>
        {children}
      </body>
    </html>
  );
};

export default RootLayout;
