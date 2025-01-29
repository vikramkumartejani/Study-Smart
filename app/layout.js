import "./globals.css";
import { LanguageProvider } from "./context/LanguageContext";
import ClientWrapper from "./components/ClientWrapper";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export const metadata = {
  title: "StudySmart",
  description: "StudySmart - Your Medical Dream",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <LanguageProvider>
          <ClientWrapper>
            <Navbar />
            <main>{children}</main>
            <Footer />
          </ClientWrapper>
        </LanguageProvider>
      </body>
    </html>
  );
}
