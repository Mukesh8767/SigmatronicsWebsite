'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";

const navItems = [
  { label: "Home", href: "/" },
  { label: "About", href: "/about" },
  { label: "Hardware", href: "/hardware" },
  { label: "Software", href: "/software" },
  { label: "Solutions", href: "/solutions" },
  { label: "Products", href: "/products" },
  { label: "Contact", href: "/contact" },
];

const verticals = [
  {
    title: "Sigmatronics Hardware",
    subtitle: "Advanced Electronics, Embedded Systems, IoT Devices & Smart Industrial Hardware",
    description: "Designing intelligent, connected, and scalable hardware for modern businesses — from industrial control systems and automation devices to custom embedded products, vending systems, energy systems, and IoT gateways.",
    href: "/hardware",
    image: "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-blue-50"
  },
  {
    title: "Sigmatronics Software",
    subtitle: "Custom Software, IoT Platforms, Websites, Dashboards & Digital Products",
    description: "Developing modern software platforms, customer-facing portals, operational dashboards, analytics systems, SaaS platforms, and web applications that integrate seamlessly with Sigmatronics hardware or third-party devices.",
    href: "/software",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-indigo-50"
  },
  {
    title: "Sigmatronics Solutions",
    subtitle: "Complete End-to-End Smart Solutions Across Industries",
    description: "Delivering fully integrated hardware + software solutions tailored to business use cases such as vending, water automation, industrial IoT, energy monitoring, smart infrastructure, digital queue systems, remote asset control, and more.",
    href: "/solutions",
    image: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-cyan-50"
  },
  {
    title: "Sigmatronics Consultancy",
    subtitle: "Technology Advisory, Product Strategy, Development Partnerships & Execution Support",
    description: "Helping organizations build and scale technology through expert consultancy in embedded systems, product development, IoT, automation, web platforms, software architecture, and partner-led implementation.",
    href: "/consultancy",
    image: "https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-slate-50"
  },
  {
    title: "Sigmatronics Learnings",
    subtitle: "Internships, Industry Exposure, Applied Learning & Innovation Development",
    description: "Empowering students, interns, fresh innovators, and aspiring professionals with practical exposure to embedded systems, IoT, software development, product engineering, automation, and modern technology ecosystems.",
    href: "/learnings",
    image: "https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&auto=format&fit=crop&w=800&q=80",
    color: "bg-orange-50"
  }
];



const heroImages = [
  {
    src: "/hero_ai_hardware_software.png",
    alt: "AI generated technology visualization across hardware and software",
  },
  {
    src: "https://images.unsplash.com/photo-1519389950473-47ba0277781c?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    alt: "AI concept visualization with connected digital hardware",
  },
  {
    src: "https://images.unsplash.com/photo-1504384308090-c894fdcc538d?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80",
    alt: "Embedded system hardware board with a futuristic finish",
  },
];

export default function Home() {

  return (
    <div className="relative overflow-hidden bg-white text-slate-900">
      {/* Light Animated Background */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Subtle Mesh Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]" />

        {/* Animated Light Blobs */}
        <motion.div
          animate={{
            scale: [1, 1.2, 1],
            x: [0, 100, 0],
            y: [0, 50, 0],
          }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -left-20 -top-20 h-[500px] w-[500px] rounded-full bg-cyan-400/20 blur-[100px]"
        />
        <motion.div
          animate={{
            scale: [1.2, 1, 1.2],
            x: [0, -80, 0],
            y: [0, 120, 0],
          }}
          transition={{
            duration: 25,
            repeat: Infinity,
            ease: "easeInOut",
          }}
          className="absolute -right-20 top-40 h-[600px] w-[600px] rounded-full bg-orange-400/20 blur-[120px]"
        />
      </div>

      <main className="relative z-20 mx-auto max-w-7xl px-4 pb-12 pt-6 sm:px-6 lg:px-8">
        <section className="relative overflow-hidden rounded-[32px] border border-slate-200/60 bg-white/80 p-4 shadow-xl backdrop-blur-xl lg:p-8">
          <div className="relative grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-center">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut" }}
              className="max-w-2xl"
            >
              <p className="inline-flex rounded-full border border-cyan-200/50 bg-cyan-50/80 px-3 py-1 text-[10px] font-bold uppercase tracking-[0.2em] text-cyan-700 shadow-sm">
                Multi-Vertical Technology
              </p>
              <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-950 sm:text-5xl lg:text-[56px] lg:leading-[1.1]">
                Building <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Intelligent</span> Technology
              </h1>
              <p className="mt-4 text-base leading-7 text-slate-700">
                Sigmatronics Innovation Private Limited is a multi-vertical technology company delivering advanced embedded hardware, IoT systems, industrial automation, custom software platforms, smart products, digital solutions, consultancy, and innovation-driven learning programs for businesses, institutions, and emerging industries.
              </p>

              <div className="mt-8 flex flex-wrap items-center gap-4">
                <Link
                  href="/verticals"
                  className="rounded-full bg-cyan-700 px-6 py-3 text-sm font-bold text-white shadow-lg shadow-cyan-900/20 transition hover:bg-cyan-800"
                >
                  Explore Verticals
                </Link>
                <Link
                  href="/contact"
                  className="rounded-full border border-slate-200 bg-white/50 px-6 py-3 text-sm font-bold text-slate-900 shadow-sm transition hover:bg-white"
                >
                  Talk to Our Experts
                </Link>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.7, ease: "easeOut", delay: 0.1 }}
              className="relative rounded-3xl border border-slate-200 bg-white/40 p-4 shadow-lg backdrop-blur-md"
            >
              <div className="relative grid gap-4">
                <div className="space-y-4">
                  <div className="h-48 overflow-hidden rounded-2xl border border-slate-200 shadow-sm">
                    <Image
                      src={heroImages[0].src}
                      alt={heroImages[0].alt}
                      width={500}
                      height={300}
                      className="h-full w-full object-cover"
                    />
                  </div>
                  <div className="grid gap-3 sm:grid-cols-2">
                    <div className="h-24 overflow-hidden rounded-4xl border border-slate-200 bg-slate-100 shadow-sm">
                      <Image
                        src={heroImages[1].src}
                        alt={heroImages[1].alt}
                        width={260}
                        height={160}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <div className="h-24 overflow-hidden rounded-4xl border border-slate-200 bg-slate-100 shadow-sm">
                      <Image
                        src={heroImages[2].src}
                        alt={heroImages[2].alt}
                        width={260}
                        height={160}
                        className="h-full w-full object-cover"
                      />
                    </div>
                  </div>
                </div>

                <div className="flex h-full min-h-65 flex-col justify-between rounded-4xl border border-slate-200 bg-white p-4 shadow-sm">
                  <div className="space-y-3">
                    <p className="text-[11px] uppercase tracking-[0.32em] text-slate-500">End-to-End Execution</p>
                    <h2 className="text-xl font-semibold leading-tight text-slate-950">
                      Trusted by innovators and enterprises.
                    </h2>
                    <p className="text-sm leading-6 text-slate-600">
                      Trusted by innovators, enterprises, institutions, and growing businesses for end-to-end technology execution — from device engineering to cloud platforms.
                    </p>
                  </div>
                  <div className="grid gap-2">
                    {[
                      "Device Engineering",
                      "Cloud Platforms",
                      "Automation",
                    ].map((item) => (
                      <span key={item} className="inline-flex rounded-full border border-slate-200 bg-slate-100 px-3 py-2 text-xs font-medium text-slate-700">
                        {item}
                      </span>
                    ))}
                  </div>
                  <Link
                    href="/about"
                    className="mt-4 inline-flex w-full items-center justify-center rounded-full bg-slate-950 px-4 py-2 text-sm font-semibold text-white transition hover:bg-slate-800"
                  >
                    Learn more
                  </Link>
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="mt-24">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="relative overflow-hidden rounded-[40px] border border-slate-200 bg-white p-8 shadow-2xl sm:p-12"
          >
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(56,189,248,0.08),transparent_40%)]" />
            <div className="relative z-10 grid gap-12 lg:grid-cols-2 lg:items-center">
              <div>
                <p className="inline-flex rounded-full bg-cyan-50 px-3 py-1 text-xs font-bold uppercase tracking-widest text-cyan-700">Who We Are</p>
                <h2 className="mt-6 text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
                  A New-Age Technology Company Built for Multi-Domain Innovation
                </h2>
                <div className="mt-8 space-y-6 text-lg leading-relaxed text-slate-600">
                  <p>
                    Sigmatronics Innovation Private Limited began with a strong foundation in hardware design and embedded systems engineering. Over time, our expertise expanded into software platforms, IoT analytics, industrial automation, smart dispensing systems, digital business platforms, consultancy, and innovation enablement.
                  </p>
                  <p>
                    Today, Sigmatronics operates as an integrated technology company with multiple verticals that work together to deliver complete solutions — from concept, electronics design, and firmware to cloud software, analytics, deployment, and long-term support.
                  </p>
                </div>
              </div>
              <div className="rounded-3xl border border-slate-100 bg-slate-50 p-8 shadow-inner lg:p-10">
                <p className="text-lg leading-relaxed text-slate-600 italic">
                  "Our mission is to help businesses, institutions, governments, and innovators adopt practical, scalable, and future-ready technology that solves real-world problems."
                </p>
                <div className="mt-8 flex gap-4">
                  <div className="h-12 w-12 rounded-full bg-cyan-600 shadow-lg shadow-cyan-200" />
                  <div>
                    <p className="font-bold text-slate-900">Sigmatronics Innovation</p>
                    <p className="text-sm text-slate-500">Leading the future of tech</p>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </section>

        {/* Our Technology Verticals Section */}
        <section className="mt-32">
          <div className="text-center">
            <h2 className="text-4xl font-bold tracking-tight text-slate-900 sm:text-5xl">Our Technology Verticals</h2>
            <p className="mx-auto mt-6 max-w-3xl text-lg text-slate-600">
              Sigmatronics is structured into specialized verticals so clients can clearly understand our expertise and engage with the right team for their business needs. Each vertical is designed to work independently or as part of an integrated end-to-end solution.
            </p>
          </div>

          <div className="mt-20 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {verticals.map((vertical, index) => (
              <motion.div
                key={vertical.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                whileHover={{ y: -8 }}
                className={`group flex flex-col overflow-hidden rounded-3xl border border-slate-200 bg-white shadow-sm transition-all hover:shadow-xl ${index >= 3 ? 'lg:col-span-1' : ''}`}
              >
                <div className="relative h-64 overflow-hidden">
                  <Image
                    src={vertical.image}
                    alt={vertical.title}
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-110"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                  <div className="absolute bottom-4 left-6 right-6">
                    <h3 className="text-xl font-bold text-white">{vertical.title}</h3>
                  </div>
                </div>
                <div className="flex flex-1 flex-col p-8">
                  <p className="text-sm font-bold uppercase tracking-wider text-cyan-600">{vertical.subtitle}</p>
                  <p className="mt-4 text-base leading-relaxed text-slate-600">
                    {vertical.description}
                  </p>
                  <div className="mt-auto pt-8">
                    <Link
                      href={vertical.href}
                      className="inline-flex items-center text-sm font-bold text-slate-900 group-hover:text-cyan-700"
                    >
                      Explore {vertical.title.split(' ').pop()}
                      <svg xmlns="http://www.w3.org/2000/svg" className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="m9 5 7 7-7 7" />
                      </svg>
                    </Link>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </section>



        <section className="mt-20 rounded-4xl border border-slate-200 bg-slate-50 p-8 shadow-sm">
          <div className="grid gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-center">
            <div>
              <p className="text-sm uppercase tracking-[0.32em] text-cyan-700">Focused pages</p>
              <h2 className="mt-3 text-3xl font-semibold text-slate-900">Everything lives in the right place.</h2>
              <p className="mt-4 max-w-xl text-base leading-7 text-slate-600">
                Home is simple and bold, with product and company details moved to dedicated pages so the site feels modern and easy to explore.
              </p>
            </div>
            <div className="flex flex-col gap-3 rounded-3xl border border-slate-200 bg-white p-6 shadow-sm">
              <Link
                href="/about"
                className="inline-flex items-center justify-center rounded-full bg-cyan-700 px-5 py-3 text-sm font-semibold text-white shadow-lg shadow-cyan-500/20 transition hover:bg-cyan-800 interactive-hover"
              >
                About Sigmatronics
              </Link>
              <Link
                href="/products"
                className="inline-flex items-center justify-center rounded-full border border-slate-200 bg-white px-5 py-3 text-sm font-semibold text-slate-900 transition hover:border-slate-300 hover:bg-slate-50 interactive-hover"
              >
                Products & Platforms
              </Link>
            </div>
          </div>
        </section>
      </main>
    </div>
  );
}
