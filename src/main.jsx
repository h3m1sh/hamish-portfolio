import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import { HashRouter } from "react-router-dom";

// #region agent log
fetch('http://127.0.0.1:7246/ingest/31f451e7-0f87-471c-80fa-d2ba26002939',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:7',message:'main.jsx loaded',data:{href:window.location.href,hash:window.location.hash},timestamp:Date.now(),hypothesisId:'H1,H3'})}).catch(()=>{});
// #endregion

const rootElement = document.getElementById("root");
// #region agent log
fetch('http://127.0.0.1:7246/ingest/31f451e7-0f87-471c-80fa-d2ba26002939',{method:'POST',headers:{'Content-Type':'application/json'},body:JSON.stringify({location:'main.jsx:10',message:'root element',data:{exists:!!rootElement,router:'HashRouter'},timestamp:Date.now(),hypothesisId:'H1,H3'})}).catch(()=>{});
// #endregion

createRoot(rootElement).render(
  <HashRouter>
    <StrictMode>
      <App />
    </StrictMode>
  </HashRouter>
);
