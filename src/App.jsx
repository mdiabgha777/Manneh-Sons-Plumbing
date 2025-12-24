import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";
import Navbar from "./components/Navbar";
import Index from "./pages/Index";

function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Navbar />
        <div>
          <Routes>
            <Route path="/" element={<Index />} />
          </Routes>
        </div>
      </BrowserRouter>
    </HelmetProvider> 
  );
}

export default App;