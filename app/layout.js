import "./globals.css";
import Footer from "@/components/Footer";
import Header from "@/components/Header";

export const metadata = {
  title: "AI Mastery Step",
  description: "Clear, simple AI steps for small business owners."
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className="relative min-h-screen bg-gradient-to-b from-[#f9fbff] via-[#eef2ff] to-[#f7f9ff] text-ink antialiased">
        <div className="pointer-events-none fixed inset-0 -z-10 overflow-hidden">
          <div className="absolute -left-20 -top-28 h-80 w-80 rounded-full bg-accent/25 blur-3xl" />
          <div className="absolute right-[-12%] top-10 h-96 w-96 rounded-full bg-accent-2/25 blur-3xl" />
          <div className="absolute left-1/2 top-1/2 h-[32rem] w-[32rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#c7d2fe]/35 blur-[120px]" />
        </div>
        <Header />
        <main className="mx-auto w-[92%] max-w-5xl pb-16 pt-6 md:pt-10">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
