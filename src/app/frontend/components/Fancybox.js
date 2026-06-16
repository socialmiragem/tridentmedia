"use client";

import { useEffect } from "react";
import { Fancybox as NativeFancybox } from "@fancyapps/ui";
import "@fancyapps/ui/dist/fancybox/fancybox.css";

export default function Fancybox({ children, options = {} }) {
  useEffect(() => {
    NativeFancybox.bind("[data-fancybox]", {
      animated: true,
      dragToClose: true,

      Toolbar: {
        display: {
          left: [],
          middle: [],
          right: ["close"],
        },
      },

      ...options,
    });

    return () => {
      NativeFancybox.destroy();
    };
  }, [options]);

  return <>{children}</>;
}