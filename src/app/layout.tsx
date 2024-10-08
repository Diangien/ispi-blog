import type { Metadata } from "next";
import "./globals.css";


export const metadata: Metadata = {
  title: "Duvidas Next",
  description: "Send ideas for everyone like it",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="pt-pt">
      <link rel="shortcut icon" href="favicon.ico" type="image/x-icon" />
      <body>
        {children}
      </body>
    </html>
  );
}
