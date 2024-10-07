import "./globals.css";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "Kvala",
  description: "Restaurant Kvala",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="font-figtree">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
