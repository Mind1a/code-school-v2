import type { Metadata } from "next";
import "./globals.css";
import { QueryProvider } from "@/features/query/QueryProvider";
import Header from "@/features/common/components/primitives/Header";
import Footer from "@/features/common/components/primitives/Footer";

export const metadata: Metadata = {
  title: "Coding School",
  description:
    "Learn to code with interactive lessons and real-world projects. Join Coding School today and start your programming journey!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="flex flex-col flex-1 min-h-screen">
          <Header />
          <QueryProvider>{children}</QueryProvider>
        </div>
        <Footer />
      </body>
    </html>
  );
}
