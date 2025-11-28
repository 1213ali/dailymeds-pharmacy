import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavbarComponent from "./components/Navbar";
import Home from "./pages/Home";
import About from "./pages/About";
import Contact from "./pages/Contact";
import MedicineDetails from "./pages/MedicineDetails";
import Cart from "./pages/Cart";
import { CartProvider } from "./context/CartContext";
import CategoryDetails from "./pages/CategoryDetails";
import OrderSummary from "./pages/OrderSummary";
import DailyMedsStore from "./pages/DailyMedsStore";

function App() {
  return (
    <CartProvider>
      <BrowserRouter>
        <NavbarComponent />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/store" element={<DailyMedsStore />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/medicine/:id" element={<MedicineDetails />} />
          <Route path="/category/:category" element={<CategoryDetails />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order-summary" element={<OrderSummary />} />
        </Routes>
      </BrowserRouter>
    </CartProvider>
  );
}

export default App;
