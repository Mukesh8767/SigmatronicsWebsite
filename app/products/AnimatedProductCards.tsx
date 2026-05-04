"use client";

import Image from "next/image";
import { motion } from "framer-motion";

interface ProductCard {
  title: string;
  description: string;
  image: string;
  features: string[];
}

interface Props {
  productCards: ProductCard[];
}

export default function AnimatedProductCards({ productCards }: Props) {
  return (
    <div className="mt-10 grid gap-6 lg:grid-cols-2">
      {productCards.map((card, index) => (
        <motion.div
          key={card.title}
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.25 }}
          transition={{ duration: 0.7, delay: index * 0.1 }}
          className="group overflow-hidden rounded-4xl border border-slate-200 bg-white shadow-lg"
        >
          <div className="relative h-64 overflow-hidden">
            <Image
              src={card.image}
              alt={card.title}
              fill
              className="object-cover transition duration-700 group-hover:scale-105"
            />
          </div>
          <div className="p-6">
            <p className="text-sm uppercase tracking-[0.28em] text-slate-500">Product</p>
            <h2 className="mt-4 text-2xl font-semibold text-slate-900">{card.title}</h2>
            <p className="mt-3 text-sm leading-7 text-slate-600">{card.description}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {card.features.map((feature) => (
                <span key={feature} className="rounded-full border border-slate-200 bg-slate-50 px-3 py-1 text-xs font-semibold text-slate-700">
                  {feature}
                </span>
              ))}
            </div>
          </div>
        </motion.div>
      ))}
    </div>
  );
}
