import React, { useState } from "react";
import "./assets/css/index.css";
import Experience from "./pages/Experience/Experience";
import Contact from "./pages/Contact/Contact";
import Projects from "./pages/Projects/Projects";
import Header from "./pages/Header/Header";
import Hero from "./pages/Hero/Hero";
import Skills from "./pages/Skills/Skills";
import Education from "./pages/Education/Education";
import CustomCursor from "./components/CustomCursor";

import { Route, Routes } from "react-router-dom";

export default function App() {
  const [isOnePage, setIsOnePage] = useState(false); // Toggle state

  // #region agent log
  fetch('http://127.0.0.1:7246/ingest/31f451e7-0f87-471c-80fa-d2ba26002939',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.jsx:16',message:'App component mounted',data:{isOnePage,location:window.location.href},timestamp:Date.now(),hypothesisId:'H3,H4'})}).catch(()=>{});
  // #endregion

  return (
    <>
      <CustomCursor />
      <Header />
      {/* Conditional Rendering */}
      {isOnePage ? (
        // One-Page Mode: Render all components together
        <>
          <Hero />
          <Skills />
          <Experience />
          <Education />
          <Contact />
        </>
      ) : (
        // Router Mode: Use routes for navigation
        <>
          {/* #region agent log */}
          {fetch('http://127.0.0.1:7246/ingest/31f451e7-0f87-471c-80fa-d2ba26002939',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'App.jsx:35',message:'About to render Routes',data:{pathname:window.location.pathname,hash:window.location.hash},timestamp:Date.now(),hypothesisId:'H4'})}).catch(()=>{}),null}
          {/* #endregion */}
          <Routes>
            <Route path="/" element={<Hero />} />
            <Route path="/skills" element={<Skills />} />
            <Route path="/experience" element={<Experience />} />
            <Route path="/education" element={<Education />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/projects" element={<Projects />} />
            <Route path="*" element={<Hero />} />
          </Routes>
        </>
      )}
    </>
  );
}
