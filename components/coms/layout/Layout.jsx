import React from "react";
import Footer from "./Footer";
import NavBar from "./NavBar";
export default function Layout({ children }) {
  return (
    <div className="bg-stone-800 text-white">
      <NavBar />
      {children}
      <Footer />
    </div>
  );
}
