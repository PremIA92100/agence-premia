
"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { motion, useMotionTemplate, useMotionValue, useSpring, HTMLMotionProps } from "framer-motion";

interface SpotlightProps extends HTMLMotionProps<"div"> {
    children: React.ReactNode;
    className?: string;
    spotlightColor?: string;
}

export function Spotlight({
    children,
    className = "",
    spotlightColor = "rgba(79, 70, 229, 0.25)",
    ...props
}: SpotlightProps) {
    const mouseX = useMotionValue(0);
    const mouseY = useMotionValue(0);

    const [isHovering, setIsHovering] = useState(false);

    function handleMouseMove({
        currentTarget,
        clientX,
        clientY,
    }: React.MouseEvent<HTMLDivElement>) {
        const { left, top, width, height } = currentTarget.getBoundingClientRect();

        // Spotlight position
        mouseX.set(clientX - left);
        mouseY.set(clientY - top);
    }

    // 3D Tilt Logic
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const mouseXSpring = useSpring(x);
    const mouseYSpring = useSpring(y);

    const rotateX = useMotionTemplate`${mouseYSpring}deg`;
    const rotateY = useMotionTemplate`${mouseXSpring}deg`;

    function handleTiltMove(e: React.MouseEvent<HTMLDivElement>) {
        const rect = e.currentTarget.getBoundingClientRect();
        const width = rect.width;
        const height = rect.height;
        const mouseX = e.clientX - rect.left;
        const mouseY = e.clientY - rect.top;

        const xPct = mouseX / width - 0.5;
        const yPct = mouseY / height - 0.5;

        x.set(yPct * -10); // Tilt intensitity
        y.set(xPct * 10);
    }

    function handleTiltLeave() {
        x.set(0);
        y.set(0);
        setIsHovering(false);
    }

    return (
        <motion.div
            onMouseMove={(e) => {
                handleMouseMove(e);
                handleTiltMove(e);
            }}
            onMouseEnter={() => setIsHovering(true)}
            onMouseLeave={handleTiltLeave}
            style={{
                rotateX,
                rotateY,
                transformStyle: "preserve-3d",
            }}
            className={cn(
                "group relative rounded-2xl border border-slate-200 bg-white shadow-xl transition-all duration-300 hover:shadow-2xl hover:border-slate-300",
                className
            )}
            {...(props as any)}
        >
            {/* Animated Gradient Border on Hover (Spotlight) */}
            <motion.div
                className="pointer-events-none absolute -inset-px rounded-2xl opacity-0 transition duration-300 group-hover:opacity-100"
                style={{
                    background: useMotionTemplate`
            radial-gradient(
              650px circle at ${mouseX}px ${mouseY}px,
              ${spotlightColor},
              transparent 80%
            )
          `,
                }}
            />

            {/* Bottom Gradient Line */}
            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500 transform scale-x-0 transition-transform duration-300 group-hover:scale-x-100 rounded-b-2xl" />

            <div className="relative h-full z-10 p-2 transform-style-3d group-hover:translate-z-10 transition-transform duration-300">
                {children}
            </div>
        </motion.div>
    );
}
