import { motion, useInView } from "framer-motion";
import { useRef } from "react";

//WIP -resusable revealer for content -issue: overflow hidden also hides the box shadow
const Revealer = ({ children }) => {
  const ref = useRef(null)
  const isInView = useInView(ref, { once: true })

  return (
    <div style={{ position: "relative", overflow: "hidden" }}
      ref={ref}
    >
      <motion.div
        variants={{
          hidden: {
            x: 500,
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
        transition={{ duration: 0.9 }}
      >
        {children}
      </motion.div>
    </div>
  );
};

export default Revealer;