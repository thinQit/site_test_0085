"use client";

import * as React from "react";
import { motion } from "framer-motion";

export interface AuroraBackgroundProps {
  children: React.ReactNode;
  auroraColors?: string[];
  className?: string;
}

const defaultAuroraColors = [
  "#3b82f6",
  "#06b6d4",
  "#67e8f9",
  "#bfdbfe",
  "#38bdf8",
];

export function AuroraBackground({
  children,
  auroraColors = defaultAuroraColors,
  className = "",
}: AuroraBackgroundProps) {
  return (
    <div className={"relative isolate w-full overflow-hidden " + className}>
      <motion.div
        initial={{ opacity: 0.4 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1.5, ease: "easeOut" }}
        className="pointer-events-none absolute inset-0 -z-10"
        aria-hidden
      >
        <svg
          width="100%"
          height="100%"
          viewBox="0 0 1440 800"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-full w-full"
        >
          <defs>
            <radialGradient
              id="aurora"
              cx="50%"
              cy="50%"
              r="72%"
              gradientTransform="rotate(20 .5 .5)"
            >
              {auroraColors.map((color, i) => (
                <stop
                  key={color + i}
                  offset={String((i + 1) / (auroraColors.length + 1))}
                  stopColor={color}
                />
              ))}
              <stop offset="1" stopColor="#ffffff" stopOpacity="0.7" />
            </radialGradient>
          </defs>
          <rect width="1440" height="800" fill="url(#aurora)" />
        </svg>
      </motion.div>
      {children}
    </div>
  );
}
