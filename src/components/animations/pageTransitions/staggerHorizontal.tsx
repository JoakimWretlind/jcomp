import { motion } from "framer-motion";
import { HorizontalMotionOverlay, PanelHorizontal } from "./style";

// How many panels we want
const articles = [{ id: 1 }, { id: 2 }, { id: 3 }];

export const HorizontalStaggerTransition = () => {
  return (
    <HorizontalMotionOverlay>
      {articles.map((article, i) => (
        <PanelHorizontal
          as={motion.li}
          key={article.id}
          initial={{ translateX: "100vw" }}
          animate={{ translateX: 0 }}
          transition={{
            duration: 0.25,
            delay: i * 0.05,
            ease: [0.5, 0.11, 0.45, 0.15],
          }}
        />
      ))}
    </HorizontalMotionOverlay>
  );
};
