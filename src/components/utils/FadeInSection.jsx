import { motion } from "framer-motion";

export const FadeInSection = ({ children, delay }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}      // start slightly down & invisible
      whileInView={{ opacity: 1, y: 0 }}   // fade in and move up
      viewport={{ once: true, amount: 0.3 }} // trigger once when 30% visible
      transition={{ duration: 0.8, delay }}
      className="w-full"
    >
      {children}
    </motion.div>
  );
};