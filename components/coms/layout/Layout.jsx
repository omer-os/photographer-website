import { AnimatePresence } from "framer-motion";
import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
export default function Layout({ children }) {
  return (
    <div className="bg-stone-800 text-white min-h-screen">
      <NavBar />

      <AnimatePresence>{children}</AnimatePresence>

      <Footer />
    </div>
  );
}
