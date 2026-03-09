"use client";

import * as React from "react";
import { motion } from "framer-motion";

export interface TextGenerateEffectProps {
  words: string;
  className?: string;
}

export function TextGenerateEffect({
  words,
  className = "",
}: TextGenerateEffectProps) {
  return (
    <motion.h1
      className={className}
      initial="hidden"
      animate="visible"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.7, ease: "easeOut" },
        },
      }}
    >
      {words}
    </motion.h1>
  );
}
