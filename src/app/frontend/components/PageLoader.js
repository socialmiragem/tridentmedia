"use client";

import Image from "next/image";
import { AnimatePresence, motion } from "framer-motion";
import { useLoader } from "@/app/context/LoaderContext";

const PageLoader = () => {

  const { loading } = useLoader();

  return (
    <AnimatePresence>

      {loading && (
        <motion.div
          className="page-loader"
          initial={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.4 }}
        >

          <div className="logo-reveal-wrapper">

            <img
              src="/images/logo.png"
              alt="Logo"
                height=''
                width=''
              priority
              className="loader-logo img-fluid"
              style={{filter : 'invert(1)'}}
            />

            <motion.div
              className="logo-mask"
              initial={{ x: 0 }}
              animate={{ x: "100%" }}
              transition={{
                duration: 1.5,
                ease: "easeInOut",
                repeat: Infinity,
                repeatDelay: 0.2,
              }}
            />

          </div>

        </motion.div>
      )}

    </AnimatePresence>
  );
};

export default PageLoader;