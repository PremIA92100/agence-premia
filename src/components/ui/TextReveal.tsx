
"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const characters = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789!@#$%^&*()_+";

interface TextRevealProps {
    text: string;
    className?: string;
    delay?: number;
}

export function TextReveal({ text, className, delay = 0 }: TextRevealProps) {
    const [displayedText, setDisplayedText] = useState("");

    useEffect(() => {
        let iteration = 0;
        let interval: NodeJS.Timeout;

        const startScramble = () => {
            interval = setInterval(() => {
                setDisplayedText(
                    text
                        .split("")
                        .map((letter, index) => {
                            if (index < iteration) {
                                return text[index];
                            }
                            return characters[Math.floor(Math.random() * characters.length)];
                        })
                        .join("")
                );

                if (iteration >= text.length) {
                    clearInterval(interval);
                }

                iteration += 1 / 3; // Controls speed of reveal
            }, 30);
        };

        const timeout = setTimeout(startScramble, delay * 1000);

        return () => {
            clearTimeout(timeout);
            clearInterval(interval);
        };
    }, [text, delay]);

    return (
        <motion.span
            className={className}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: delay }}
        >
            {displayedText}
        </motion.span>
    );
}
