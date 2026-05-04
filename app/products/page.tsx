import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import AnimatedProductCards from "./AnimatedProductCards";

export const metadata: Metadata = {
  title: "Products | Sigmatronics",
  description: "Explore Sigmatronics product platforms, embedded systems, and connected solutions.",
};

const productCards = [
  {
    title: "SigmaCore Platform",
    description: "A modular software foundation for industrial data, device management, and analytics.",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: ["Device onboarding", "Analytics engine", "Cloud-ready"],
  },
  {
    title: "Nexus Edge Gateway",
    description: "A secure connected gateway for sensors, controllers, and remote operations.",
    image: "https://images.unsplash.com/photo-1498050108023-8a1d7a8ce091?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: ["Multi-protocol", "Secure VPN", "OTA updates"],
  },
  {
    title: "Pulse Analytics Suite",
    description: "Operational dashboards, alerts, and insights for real-time decision support.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: ["Insights", "Alerts", "Collaboration"],
  },
  {
    title: "Aura Security Mesh",
    description: "Secure device networking, encrypted connectivity, and data protection for IoT deployments.",
    image: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80",
    features: ["Encryption", "Mesh routing", "Access control"],
  },
];

export default function ProductsPage() {
  return (
    <div className="relative overflow-hidden bg-white text-slate-900">
      <main className="mx-auto max-w-6xl px-6 py-16 sm:px-8">
        <section className="rounded-4xl border border-slate-200 bg-slate-50 p-10 shadow-sm">
          <div className="space-y-6">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-700">Products & Platforms</p>
            <h1 className="text-4xl font-semibold text-slate-900">Built as modular product components for modern enterprise use.</h1>
            <p className="max-w-3xl text-lg leading-8 text-slate-600">
              Explore hardware and software modules designed for fast integration, secure operations, and consistent performance.
            </p>
          </div>

          <div className="mt-10 overflow-hidden rounded-4xl border border-cyan-100 bg-slate-50 shadow-sm">
            <Image
              src="https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1200&q=80"
              alt="AI-generated product platform illustration"
              width={1200}
              height={520}
              className="h-full w-full object-cover"
            />
          </div>

          <AnimatedProductCards productCards={productCards} />

          <div className="mt-10 rounded-3xl border border-cyan-100 bg-white p-6 shadow-sm">
            <p className="text-sm uppercase tracking-[0.32em] text-cyan-700">Platform focus</p>
            <div className="mt-4 grid gap-4 sm:grid-cols-2">
              {[
                "Modular architecture",
                "Secure connectivity",
                "Device-centric analytics",
                "Scalable deployment",
              ].map((item) => (
                <div key={item} className="rounded-3xl border border-slate-200 bg-slate-50 px-4 py-4 text-sm text-slate-700">
                  {item}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">
            <Link
              href="/solutions"
              className="inline-flex items-center justify-center rounded-full bg-cyan-700 px-6 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-800 interactive-hover"
            >
              View solutions
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 interactive-hover"
            >
              Talk to sales
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
