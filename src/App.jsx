import BestSellers from "./Components/BestSellers/BestSellers";
import Hero from "./Components/Hero/Hero";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/LogSignIn/Login";
import SignUp from "./Components/LogSignIn/SignUp";
import Error from "./Components/LogSignIn/Error";
import Products from "./Components/Products/Products";
import Product from "./Components/Product/Product";

const Home = () => {
  return (
    <>
      <Hero />
      <BestSellers />
    </>
  );
};



function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/product" element={<Product />} />
        <Route element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
