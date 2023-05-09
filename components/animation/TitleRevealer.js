import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const TitleRevealer = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div style={{ position: "relative", overflow: "hidden" }}
      ref={ref}
    >
      <motion.div
        variants={{
          hidden: {
            x: -500,
            opacity: 0,
            scale: 0.5
          },
          visible: {
            x: 0,
            opacity: 1,
            scale: 1
          }
        }}
        initial="hidden"
        animate={isInView ? "visible" : "hidden"}
        transition={{ duration: 0.8 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default TitleRevealer;