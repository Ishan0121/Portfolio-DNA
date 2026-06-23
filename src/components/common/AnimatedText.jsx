import { useEffect, useState } from "react";
import { motion } from "framer-motion";

/**
 * Cycles through an array of texts with a typewriter effect.
 * @param {Object} props
 * @param {string[]} props.texts - Array of strings to cycle through
 * @param {number} [props.speed=60] - ms per character
 * @param {number} [props.pause=1800] - ms to pause at end of each word
 * @param {string} [props.className]
 */
export function AnimatedText({ texts, speed = 60, pause = 1800, className = "" }) {
  const [index, setIndex] = useState(0);
  const [displayed, setDisplayed] = useState("");
  const [deleting, setDeleting] = useState(false);

  useEffect(() => {
    if (!texts || texts.length === 0) return;
    const current = texts[index];
    let timeout;

    if (!deleting && displayed.length < current.length) {
      timeout = setTimeout(() => setDisplayed(current.slice(0, displayed.length + 1)), speed);
    } else if (!deleting && displayed.length === current.length) {
      timeout = setTimeout(() => setDeleting(true), pause);
    } else if (deleting && displayed.length > 0) {
      timeout = setTimeout(() => setDisplayed(displayed.slice(0, -1)), speed / 2);
    } else if (deleting && displayed.length === 0) {
      timeout = setTimeout(() => {
        setDeleting(false);
        setIndex((i) => (i + 1) % texts.length);
      }, 0);
    }

    return () => clearTimeout(timeout);
  }, [displayed, deleting, index, texts, speed, pause]);

  return (
    <span className={`inline-flex items-center ${className}`}>
      <span>{displayed}</span>
      <motion.span
        className="inline-block w-0.5 h-[1.1em] bg-primary ml-1 rounded-full"
        animate={{ opacity: [1, 0] }}
        transition={{ duration: 0.6, repeat: Infinity, repeatType: "reverse" }}
      />
    </span>
  );
}
