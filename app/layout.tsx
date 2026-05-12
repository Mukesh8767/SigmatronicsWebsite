import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SiteFooter from "./components/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const navItems = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "/about" },
  { 
    label: "Verticals", 
    href: "#", 
    isDropdown: true,
    subItems: [
      { label: "Sigmatronics Hardware", href: "/hardware" },
      { label: "Sigmatronics Software", href: "/software" },
      { label: "Sigmatronics Solutions", href: "/solutions" },
      { label: "Sigmatronics Consultancy", href: "/consultancy" },
    ]
  },
  { label: "Sigmatronics Learnings", href: "/learnings" },
  { label: "Industries", href: "/industries" },
  { label: "Products & Platforms", href: "/products" },
];

export const metadata: Metadata = {
  title: "Sigmatronics | Global Technology & Innovation",
  description:
    "Sigmatronics is a global technology company delivering hardware, software, solutions, and consultancy for enterprise digital transformation.",
  metadataBase: new URL("https://sigmatronics.ai"),
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full bg-white text-slate-900">
        <header className="fixed inset-x-0 top-0 z-50 border-b border-slate-200 bg-white/95 backdrop-blur-sm shadow-sm">
          <div className="mx-auto flex max-w-7xl items-center justify-between gap-3 px-6 py-4 sm:px-8">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image 
                src="/Sigmatronics_Logo_new.png" 
                alt="Sigmatronics" 
                width={160} 
                height={44} 
                className="h-11 w-auto object-contain"
                priority
              />
            </Link>
            <nav className="hidden items-center gap-5 text-sm font-medium text-slate-600 xl:flex">
              {navItems.map((item) => (
                item.isDropdown ? (
                  <div key={item.label} className="group relative">
                    <button className="flex items-center gap-1 transition hover:text-slate-900">
                      {item.label}
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4 transition-transform group-hover:rotate-180"><path d="m6 9 6 6 6-6"/></svg>
                    </button>
                    <div className="absolute left-0 top-full hidden pt-4 group-hover:block w-56">
                      <div className="rounded-xl border border-slate-200 bg-white p-2 shadow-xl">
                        {item.subItems?.map((subItem) => (
                          <Link key={subItem.label} href={subItem.href} className="block rounded-lg px-4 py-2 text-sm text-slate-600 transition hover:bg-slate-50 hover:text-slate-900">
                            {subItem.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link key={item.label} href={item.href} className="transition hover:text-slate-900">
                    {item.label}
                  </Link>
                )
              ))}
            </nav>
            <Link
              href="/contact"
              className="hidden rounded-full bg-cyan-700 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-800 xl:inline-flex"
            >
              Contact Us
            </Link>
          </div>
        </header>
        <div className="pt-24">{children}</div>
        <SiteFooter />
      </body>
    </html>
  );
}
