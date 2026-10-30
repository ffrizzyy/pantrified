"use client";

import { useEffect } from "react";
import { withBasePath } from "@/lib/basePath";

export function Pwa() {
  useEffect(() => {
    if (!("serviceWorker" in navigator)) return;
    const register = () => {
      navigator.serviceWorker
        .register(withBasePath("/sw.js"), { scope: `${withBasePath("/")}` })
        .catch(() => {
          // A failed registration must not block the app.
        });
    };
    if (document.readyState === "complete") {
      register();
      return;
    }
    window.addEventListener("load", register);
    return () => window.removeEventListener("load", register);
  }, []);

  return null;
}
