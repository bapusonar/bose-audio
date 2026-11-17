import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL("https://sabkuchdigitalhoga.com"),
  title: { default: "Sabkuch Digital Hoga | Laptop & Audio Repair", template: "%s | Sabkuch Digital Hoga" },
  description: "Laptop, desktop and premium audio device repair support. Book a service request with Sabkuch Digital Hoga.",
  keywords: ["laptop repair", "desktop repair", "speaker repair", "audio repair", "laptop parts", "Bose repair", "Marshall repair"],
  openGraph: { title: "Sabkuch Digital Hoga", description: "One destination for laptop, desktop and audio device repair.", url: "https://sabkuchdigitalhoga.com", siteName: "Sabkuch Digital Hoga", type: "website" },
  robots: { index: true, follow: true }
};
export default function RootLayout({children}:{children:React.ReactNode}) {
  return <html lang="en"><body>{children}</body></html>;
}
