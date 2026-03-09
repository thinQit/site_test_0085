"use client";

import * as React from "react";
import { motion, AnimatePresence } from "framer-motion";

export interface AnimatedTestimonial {
  quote: string;
  name: string;
  designation: string;
  src: string;
}

export interface AnimatedTestimonialsProps {
  testimonials: AnimatedTestimonial[];
  autoplay?: boolean;
}

export function AnimatedTestimonials({
  testimonials,
  autoplay = true,
}: AnimatedTestimonialsProps) {
  const [current, setCurrent] = React.useState(0);

  React.useEffect(() => {
    if (!autoplay) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [autoplay, testimonials.length]);

  if (!testimonials || testimonials.length === 0) return null;

  const t = testimonials[current];

  return (
    <div className="relative mx-auto flex max-w-2xl flex-col items-center justify-center">
      <AnimatePresence initial={false} mode="wait">
        <motion.blockquote
          key={current}
          className="mx-auto text-center text-xl text-foreground font-medium leading-relaxed md:text-2xl"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -24 }}
          transition={{ duration: 0.5 }}
        >
          “{t.quote}”
          <footer className="mt-7 flex flex-col items-center gap-1">
            <span className="text-base font-semibold text-foreground">{t.name}</span>
            <span className="text-sm text-muted-foreground">
              {t.designation}
            </span>
          </footer>
        </motion.blockquote>
      </AnimatePresence>
      <div className="mt-6 flex items-center justify-center gap-2">
        {testimonials.map((_, idx) => (
          <button
            key={idx}
            onClick={() => setCurrent(idx)}
            aria-label={`Show testimonial ${idx + 1}`}
            className={`h-2 w-2 rounded-full transition-colors ${
              idx === current ? "bg-primary" : "bg-muted"
            }`}
            tabIndex={0}
          />
        ))}
      </div>
    </div>
  );
}
