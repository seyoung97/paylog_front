import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Order from "./pages/Order";
import RevenueCalendar from "./pages/RevenueCalendar";
import ProductAnalysis from "./pages/ProductAnalysis";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/" element={<Order />} />
        <Route path="/revenue_calendar" element={<RevenueCalendar />} />
        <Route path="/product_analysis" element={<ProductAnalysis />} />
      </Routes>
    </>
  );
}

export default App;
