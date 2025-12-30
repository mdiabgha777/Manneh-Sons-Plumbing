import { Routes, Route } from "react-router-dom";
import { HelmetProvider } from "react-helmet-async";

import MainLayout from "./Layout/MainLayout";
import Index from "./pages/Index";

function App() { 
  return (
    <HelmetProvider>
      <Routes>
        <Route element={<MainLayout />}>
          <Route path="/" element={<Index />} />
          {/* Future pages go here */}
        </Route>
      </Routes>
    </HelmetProvider>
  );
}

export default App;
