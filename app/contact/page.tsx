'use client';

import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { useState } from "react";

const contactReasons = [
  { icon: "🔬", label: "Hardware & IoT Development" },
  { icon: "💻", label: "Software & Platform" },
  { icon: "🎯", label: "End-to-End Solutions" },
  { icon: "🧠", label: "Technology Consultancy" },
  { icon: "🎓", label: "Internship / Learning" },
  { icon: "🤝", label: "Partnership Inquiry" },
];

const contactInfo = [
  { icon: "📧", title: "Email Us", value: "hello@sigmatronics.ai", link: "mailto:hello@sigmatronics.ai", desc: "We typically respond within 24 hours." },
  { icon: "📞", title: "Call Us", value: "+91 XXXXX XXXXX", link: "tel:+91XXXXXXXXXX", desc: "Mon–Sat, 10 AM – 7 PM IST" },
  { icon: "📍", title: "Visit Us", value: "Pune, Maharashtra, India", link: "#", desc: "Sigmatronics Innovation Pvt. Ltd." },
  { icon: "🌐", title: "Website", value: "sigmatronics.ai", link: "https://sigmatronics.ai", desc: "Explore our full portfolio online." },
];

const containerVariants = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
const cardVariants = { hidden: { opacity: 0, y: 20 }, visible: { opacity: 1, y: 0, transition: { duration: 0.5 } } };

export default function ContactPage() {
  const [selectedReason, setSelectedReason] = useState<string | null>(null);

  return (
    <div className="relative overflow-hidden bg-white text-slate-900">
      {/* Animated Background */}
      <div className="pointer-events-none absolute inset-0 z-0 overflow-hidden">
        <motion.div animate={{ scale: [1, 1.2, 1], x: [0, 80, 0] }} transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }} className="absolute -left-32 -top-32 h-[600px] w-[600px] rounded-full bg-cyan-400/10 blur-[120px]" />
        <motion.div animate={{ scale: [1.2, 1, 1.2], x: [0, -60, 0] }} transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }} className="absolute -right-32 top-48 h-[700px] w-[700px] rounded-full bg-orange-400/10 blur-[140px]" />
      </div>

      <main className="relative z-10 mx-auto max-w-7xl px-4 pb-20 pt-8 sm:px-6 lg:px-8">

        {/* HERO */}
        <section className="relative overflow-hidden rounded-[40px] border border-cyan-100 bg-gradient-to-br from-white via-cyan-50/40 to-blue-50/50 p-8 shadow-xl lg:p-14">
          <div className="absolute right-0 top-0 h-64 w-64 rounded-full bg-cyan-400/10 blur-3xl" />
          <div className="grid gap-12 lg:grid-cols-2 lg:items-center">
            <motion.div initial={{ opacity: 0, x: -30 }} animate={{ opacity: 1, x: 0 }} transition={{ duration: 0.7 }}>
              <span className="inline-flex items-center gap-2 rounded-full border border-cyan-200 bg-cyan-50 px-4 py-1.5 text-xs font-bold uppercase tracking-widest text-cyan-700">
                📬 Get in Touch
              </span>
              <h1 className="mt-6 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
                Let's Build Something{" "}
                <span className="bg-gradient-to-r from-cyan-600 to-blue-600 bg-clip-text text-transparent">Intelligent</span> Together
              </h1>
              <p className="mt-6 text-lg leading-relaxed text-slate-600">
                Whether you need a custom hardware product, a software platform, an end-to-end solution, or expert technology guidance — our team is ready to discuss your requirements and craft the right approach.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                {["Fast Response", "Expert Team", "End-to-End Support", "NDA Available"].map(tag => (
                  <span key={tag} className="rounded-full border border-cyan-100 bg-white px-4 py-1.5 text-xs font-semibold text-cyan-700 shadow-sm">{tag}</span>
                ))}
              </div>
            </motion.div>
            <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} transition={{ duration: 0.8, delay: 0.2 }}>
              <div className="overflow-hidden rounded-3xl shadow-2xl">
                <Image src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&auto=format&fit=crop&w=900&q=80" alt="Team meeting" width={900} height={500} className="h-72 w-full object-cover transition-transform duration-700 hover:scale-105" />
              </div>
            </motion.div>
          </div>
        </section>

        {/* CONTACT INFO CARDS */}
        <motion.div variants={containerVariants} initial="hidden" whileInView="visible" viewport={{ once: true }} className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {contactInfo.map(c => (
            <motion.a key={c.title} href={c.link} variants={cardVariants} whileHover={{ y: -5, boxShadow: "0 16px 48px rgba(0,0,0,0.1)" }} className="group block rounded-3xl border border-slate-100 bg-white p-7 shadow-sm transition-all">
              <div className="text-3xl">{c.icon}</div>
              <p className="mt-4 text-xs font-bold uppercase tracking-widest text-slate-400">{c.title}</p>
              <p className="mt-2 text-lg font-bold text-slate-900 group-hover:text-cyan-700 transition-colors">{c.value}</p>
              <p className="mt-1 text-sm text-slate-500">{c.desc}</p>
            </motion.a>
          ))}
        </motion.div>

        {/* CONTACT FORM + REASON */}
        <section className="mt-16 grid gap-8 lg:grid-cols-[1fr_1.2fr]">
          {/* LEFT — Reason Selector */}
          <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="overflow-hidden rounded-[32px] bg-gradient-to-br from-slate-900 to-blue-950 p-10 text-white shadow-2xl">
            <p className="text-xs font-bold uppercase tracking-widest text-cyan-300">How Can We Help?</p>
            <h2 className="mt-4 text-2xl font-bold leading-snug sm:text-3xl">Select Your Inquiry Type</h2>
            <p className="mt-4 text-sm leading-relaxed text-slate-400">Pick the area most relevant to your project — we'll connect you with the right team.</p>
            <div className="mt-8 space-y-3">
              {contactReasons.map(r => (
                <button
                  key={r.label}
                  onClick={() => setSelectedReason(r.label)}
                  className={`flex w-full items-center gap-4 rounded-2xl border px-5 py-4 text-left text-sm font-semibold transition-all ${
                    selectedReason === r.label
                      ? "border-cyan-400 bg-cyan-500/20 text-white"
                      : "border-white/10 bg-white/5 text-slate-300 hover:border-white/20 hover:bg-white/10"
                  }`}
                >
                  <span className="text-xl">{r.icon}</span>
                  {r.label}
                </button>
              ))}
            </div>
          </motion.div>

          {/* RIGHT — Contact Form */}
          <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.6, delay: 0.1 }} className="overflow-hidden rounded-[32px] border border-slate-100 bg-white p-10 shadow-xl">
            <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Send a Message</p>
            <h2 className="mt-4 text-2xl font-bold text-slate-900">Tell Us About Your Project</h2>
            <p className="mt-2 text-sm text-slate-500">Fill out the form below and our team will get back to you within 24 hours.</p>

            <form className="mt-8 space-y-5" onSubmit={(e) => e.preventDefault()}>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Full Name *</label>
                  <input type="text" placeholder="Your name" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-400/20" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Email Address *</label>
                  <input type="email" placeholder="you@company.com" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-400/20" />
                </div>
              </div>
              <div className="grid gap-5 sm:grid-cols-2">
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Phone Number</label>
                  <input type="tel" placeholder="+91 XXXXX XXXXX" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-400/20" />
                </div>
                <div>
                  <label className="mb-2 block text-sm font-semibold text-slate-700">Company / Organization</label>
                  <input type="text" placeholder="Your company name" className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-400/20" />
                </div>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Inquiry Type</label>
                <select className="w-full rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-400/20">
                  <option value="">Select an area...</option>
                  {contactReasons.map(r => (
                    <option key={r.label} value={r.label}>{r.label}</option>
                  ))}
                </select>
              </div>
              <div>
                <label className="mb-2 block text-sm font-semibold text-slate-700">Project Details *</label>
                <textarea rows={5} placeholder="Tell us about your requirements, timeline, and budget range..." className="w-full resize-none rounded-2xl border border-slate-200 bg-slate-50 px-5 py-3.5 text-sm text-slate-900 outline-none transition focus:border-cyan-400 focus:bg-white focus:ring-2 focus:ring-cyan-400/20" />
              </div>
              <button type="submit" className="w-full rounded-2xl bg-cyan-700 px-8 py-4 text-sm font-bold text-white shadow-lg shadow-cyan-500/25 transition hover:bg-cyan-800 active:scale-[0.98]">
                Send Message →
              </button>
              <p className="text-center text-xs text-slate-400">By submitting, you agree to our privacy policy. We'll never share your information.</p>
            </form>
          </motion.div>
        </section>

        {/* MAP / LOCATION */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16 overflow-hidden rounded-[32px] border border-slate-100 bg-gradient-to-br from-slate-50 to-blue-50 p-10 shadow-lg lg:p-14">
          <div className="grid gap-10 lg:grid-cols-2 lg:items-center">
            <div>
              <p className="text-xs font-bold uppercase tracking-widest text-blue-600">Our Office</p>
              <h2 className="mt-4 text-3xl font-bold text-slate-900">Sigmatronics Innovation Private Limited</h2>
              <div className="mt-6 space-y-4">
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-xl">📍</span>
                  <div>
                    <p className="font-semibold text-slate-900">Registered Office</p>
                    <p className="text-sm text-slate-500">Pune, Maharashtra, India</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-xl">🕐</span>
                  <div>
                    <p className="font-semibold text-slate-900">Business Hours</p>
                    <p className="text-sm text-slate-500">Monday – Saturday, 10:00 AM – 7:00 PM IST</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-xl">📧</span>
                  <div>
                    <p className="font-semibold text-slate-900">General Inquiries</p>
                    <p className="text-sm text-slate-500">hello@sigmatronics.ai</p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <span className="mt-1 text-xl">🎓</span>
                  <div>
                    <p className="font-semibold text-slate-900">Internship / Learnings</p>
                    <p className="text-sm text-slate-500">learnings@sigmatronics.ai</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="overflow-hidden rounded-3xl border border-slate-200 shadow-lg">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d242117.68078384278!2d73.72286709453123!3d18.524600699999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2bf2e67461101%3A0x828d43bf9d9ee343!2sPune%2C%20Maharashtra!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin"
                width="100%"
                height="320"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
                className="h-80 w-full"
              />
            </div>
          </div>
        </motion.section>

        {/* BOTTOM CTA */}
        <motion.section initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ duration: 0.6 }} className="mt-16 overflow-hidden rounded-[40px] bg-gradient-to-r from-cyan-700 to-blue-700 p-12 text-center text-white shadow-2xl shadow-cyan-500/20 lg:p-16">
          <p className="text-xs font-bold uppercase tracking-widest text-cyan-200">Prefer a Quick Chat?</p>
          <h2 className="mx-auto mt-4 max-w-3xl text-4xl font-extrabold leading-snug">We're Just an Email Away — Let's Get Started.</h2>
          <p className="mx-auto mt-5 max-w-2xl text-lg text-cyan-100">No forms needed — just drop us an email at hello@sigmatronics.ai and our team will respond within 24 hours.</p>
          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a href="mailto:hello@sigmatronics.ai" className="rounded-full bg-white px-10 py-4 text-sm font-bold text-cyan-700 shadow-xl transition hover:bg-cyan-50">
              Email Us Directly →
            </a>
            <a href="tel:+91XXXXXXXXXX" className="rounded-full border-2 border-white/30 px-10 py-4 text-sm font-bold text-white transition hover:bg-white/10">
              Call Us Now
            </a>
          </div>
        </motion.section>
      </main>
    </div>
  );
}
