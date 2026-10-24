import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Mehedi Hasan Shuvo | .NET and Full-Stack Developer",
  description:
    "Portfolio of Mehedi Hasan Shuvo, a Computer Science and Engineering graduate building full-stack apps with ASP.NET Core, React and Next.js.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="font-sans">{children}</body>
    </html>
  );
}
