import "./App.css";
import About from "./About";
import Header from "./Header";
import Home from "./Home";
import Cartdisplay from "./Cartdisplay";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import History from "./History";
import Product from "./Product";
import Login from "./Login";
import ViewDetails from "./ViewDetails";
import Checkout from "./Checkout";
import PlaceOrder from "./PlaceOrder";
import Profile from "./Profile";
import Register from "./Register";
import Thanks from "./Thanks";
import Search from "./Search";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path="/header" element={<Header />} />
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/product" element={<Product />} />
          <Route path="/login" element={<Login />} />
          <Route path="/history" element={<History />} />
          <Route path="/cartdisplay" element={<Cartdisplay />} />
          <Route path="/viewdetails" element={<ViewDetails />} />
          <Route path="/order" element={<ViewDetails />} />
          <Route path="/checkout" element={<Checkout />} />
          <Route path="/placeorder" element={<PlaceOrder />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/thanks" element={<Thanks />} />
          <Route path="/search" element={<Search />} />

          <Route path="/register" element={<Register />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
