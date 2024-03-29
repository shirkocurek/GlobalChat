import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header";
import { ThemeProvider } from "@/components/ThemeProvider";
import ClientProviders from "@/components/ClientProviders";

export const metadata: Metadata = {
  title: "GlobalChat",
  description: "Chat with anyone, anywhere",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClientProviders>
      <html lang="en">
        <body className="flex flex-col min-h-screen">
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
          >
            <Header />
            {children}
          </ThemeProvider>
        </body>
      </html>
    </ClientProviders>
  );
}
