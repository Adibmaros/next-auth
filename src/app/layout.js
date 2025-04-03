import { Providers } from "@/components/Providers";
import "./globals.css";

export const metadata = {
  title: "My Application",
  description: "My Next.js application with authentication",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
