"use client";

import React, { forwardRef } from "react";
import { motion, type HTMLMotionProps } from "framer-motion";

type Props = Omit<HTMLMotionProps<"div">, "ref"> & {
  delay?: number;
  yOffset?: number;
  duration?: number;
};

const LazyMotionDiv = forwardRef<HTMLDivElement, Props>(
  function LazyMotionDiv({ children, delay = 0, yOffset = 20, duration = 0.6, ...rest }, ref) {
    return (
      <motion.div
        ref={ref}
        initial={{ opacity: 0, y: yOffset }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay, duration }}
        {...rest}
      >
        {children}
      </motion.div>
    );
  }
);

export default LazyMotionDiv;
