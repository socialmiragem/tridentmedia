"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useLoader } from "@/app/context/LoaderContext";

const PageLoader = () => {

  const { loading } = useLoader();

  return (
    <AnimatePresence>

      {loading && (

        <motion.div
          className="page-loader"

          initial={{ x: "100%" }}
          animate={{ x: "0%" }}
          exit={{ x: "-100%" }}

          transition={{
            duration: 0.8,
            ease: [0.76, 0, 0.24, 1],
          }}
        >

          <div className="loader-panel left-panel"></div>

          <div className="loader-panel center-panel">

            <img
              src="/images/logo.png"
              alt="Logo"
              className="loader-logo img-fluid"
            />

          </div>

          <div className="loader-panel right-panel"></div>

        </motion.div>

      )}

    </AnimatePresence>
  );
};

export default PageLoader;