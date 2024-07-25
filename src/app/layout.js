import { Poppins } from "next/font/google";
import "./globals.css";

const inter = Poppins({
  subsets: ["latin"],
  weight: ["100", "300", "400", "500", "600", "700"],
});

export const metadata = {
  title: "Smart Gift",
  description: "Smart gift you think we ink",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
