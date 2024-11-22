import { Route, Routes } from "react-router-dom";
import Login from "./Components/LogSignIn/Login";
import SignUp from "./Components/LogSignIn/SignUp";
import Error from "./Components/LogSignIn/Error";
import ForgetPass from "./Components/LogSignIn/ForgetPass";
import ChangePass from "./Components/LogSignIn/ChangePass";
import AccountDashboard from "./Components/DashboardPages/Dashboard";
import OrdersDesign from "./Components/DashboardPages/OrdersDesign";
import Products from "./Components/Products/Products";
import Product from "./Components/Product/Product";
import Cart from "./Components/Cart/Cart";
import Payment from "./Components/Payment/Payment";
import Wishlist from "./Components/Wishlist/Wishlist";
import OrderHistory from "./Components/DashboardPages/OrderHistory";
import ChangePassWord from "./Components/DashboardPages/ChangePassword";
import Address from "./Components/DashboardPages/Address";
import AccountDetailsPage from "./Components/DashboardPages/AccountDetailsPage"
import Home from "./pages/Home/Home";
import BedSheets from "./pages/BedSheets/BedSheets";

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bedsheets" element={<BedSheets />} />
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product" element={<Product />} />
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment" element={<Payment />} />
        <Route path="/dashboard" element={<AccountDashboard />} />
        <Route path="/orderdesign" element={<OrdersDesign />} />
        <Route path="/forgetpassword" element={<ForgetPass />} />
        <Route path="/changepassword" element={<ChangePass />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/password-reset" element={<ChangePassWord />} />
        <Route path="/address" element={<Address />} />
        <Route path="/account-details" element={<AccountDetailsPage />} />
        <Route element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
