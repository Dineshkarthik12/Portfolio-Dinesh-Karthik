import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/ui/Navbar";

export const metadata: Metadata = {
  title: "Dinesh Karthik A | Backend & AI Engineer",
  description: "Portfolio of Dinesh Karthik A, a Backend Developer focused on building scalable, high-performance systems and AI/ML integration.",
  keywords: ["Backend Developer", "FastAPI", "Python", "RAG", "MLOps", "Microservices", "System Design"],
  authors: [{ name: "Dinesh Karthik A" }],
  openGraph: {
    title: "Dinesh Karthik A | Portfolio",
    description: "Backend Developer specializing in scalable systems and AI integration.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
