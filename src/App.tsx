import { Route, Routes } from "react-router-dom";
import RevenueCalendar from "./pages/RevenueCalendar";
import ProductAnalysis from "./pages/ProductAnalysis";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<RevenueCalendar />} />
        <Route path="/product_analysis" element={<ProductAnalysis />} />
      </Routes>
    </>
  );
}

export default App;
