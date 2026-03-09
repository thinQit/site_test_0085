"use client";
import React from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

interface CardContainerProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}

export function CardContainer({ children, className, ...props }: CardContainerProps) {
  const ref = React.useRef<HTMLDivElement>(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const rotateX = useSpring(useTransform(y, [0, 1], [8, -8]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(x, [0, 1], [-8, 8]), { stiffness: 100, damping: 20 });

  function handleMouseMove(e: React.MouseEvent<HTMLDivElement, MouseEvent>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    const posX = e.clientX - rect.left;
    const posY = e.clientY - rect.top;
    x.set(posX / rect.width);
    y.set(posY / rect.height);
  }
  function handleMouseLeave() {
    x.set(0.5);
    y.set(0.5);
  }

  React.useEffect(() => {
    // center the effect initially
    x.set(0.5);
    y.set(0.5);
    // eslint-disable-next-line
  }, []);

  return (
    <motion.div
      ref={ref}
      className={className}
      style={
        {
          perspective: 1000,
        } as React.CSSProperties
      }
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      {...props}
    >
      <motion.div
        style={{
          rotateX,
          rotateY,
        }}
      >
        {children}
      </motion.div>
    </motion.div>
  );
}

interface CardBodyProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
}
export function CardBody({ children, className, ...props }: CardBodyProps) {
  return (
    <div
      className={
        "relative flex flex-col justify-start items-start overflow-hidden transition-shadow " +
        className
      }
      {...props}
    >
      {children}
    </div>
  );
}

interface CardItemProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  translateZ?: string | number;
  as?: React.ElementType;
}
export function CardItem({
  children,
  className,
  translateZ = 0,
  as: Comp = "div",
  ...props
}: CardItemProps) {
  return (
    <Comp
      className={className}
      style={{
        transform: `translateZ(${translateZ}px)`,
        willChange: "transform",
      }}
      {...props}
    >
      {children}
    </Comp>
  );
}
