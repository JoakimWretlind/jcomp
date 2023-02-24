import { motion } from "framer-motion";

export const FadeInTransition = ({ children }: any) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{
        opacity: 1,
        transition: {
          delay: 0.55,
        },
      }}
      transition={{
        default: { duration: 1 },
      }}
    >
      {children}
    </motion.div>
  );
};
