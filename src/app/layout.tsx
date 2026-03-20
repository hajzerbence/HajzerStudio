import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "HajzerStudio – Modern weboldalak fodrászoknak és barber shopoknak",
  description:
    "Profi, mobilbarát weboldalak fodrászoknak és barber shopoknak. Gyors, ügyfélszerzésre optimalizálva. Kérj ingyenes ajánlatot!",
  keywords:
    "weboldal fodrász, barber shop weboldal, fodrász honlap, mobilbarát weboldal, SEO optimalizáció",
  openGraph: {
    title: "HajzerStudio – Modern weboldalak fodrászoknak",
    description:
      "Gyors, mobilbarát honlapok, amelyek új ügyfeleket hoznak fodrászoknak és barber shopoknak.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="hu" className="scroll-smooth">
      <body className="min-h-screen bg-[#0a0a0a] text-white antialiased">
        {children}
      </body>
    </html>
  );
}
