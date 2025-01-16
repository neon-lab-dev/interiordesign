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
import AddressPage from "./Components/DashboardPages/AddressPage";
import AddingNewAddress from "./Components/DashboardPages/AddingNewAddress";
import AccountDetailsPage from "./Components/DashboardPages/AccountDetailsPage";
import Home from "./pages/Home/Home";
import BedSheets from './pages/BedSheets/BedSheets';

import { ToastContainer } from "react-toastify";
import OrderSummary from "./Components/Pages/OrderSummary";


import TandC from "./Components/TandC/TandC";
import PrivacyPol from "./Components/PrivacyPol/PrivacyPol";
import ShippingRefundPol from "./Components/ShippingRefundPol/ShippingRefundPol";
import ContactUsPage from "./Components/ContactUsPage/ContactUsPage";
import ProtectedRoute from './Components/ProtectedRoute/ProtectedRoute';
import PaymentSuccess from "./pages/PaymentSuccess/PaymentSuccess";


function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/bedsheets" element={<BedSheets />} />   
        <Route path="/login" element={<Login />} />
        <Route path="/products" element={<Products />} />
        <Route path="/product/:id" element={<Product />} /> {/* Dynamic route */}
        <Route path="/wishlist" element={<Wishlist />} />
        <Route path="/signup" element={<SignUp />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/payment-success" element={<PaymentSuccess />} />

        <Route element={<ProtectedRoute />}>
          <Route path="/payment" element={<Payment />} />
        </Route>
        <Route element={<ProtectedRoute />}>
          <Route path="/dashboard" element={<AccountDashboard />} />
        </Route>
        <Route path="/orderdesign" element={<OrdersDesign />} />
        <Route path="/forgetpassword" element={<ForgetPass />} />
        <Route path="/changepassword" element={<ChangePass />} />
        <Route path="/orderhistory" element={<OrderHistory />} />
        <Route path="/changepass" element={<ChangePassWord />}></Route>
        <Route path="/addresspage" element={<AddressPage />} />
        <Route path="/address-book" element={<AddingNewAddress />} />
        <Route path="/password-reset" element={<ChangePassWord />} />
        <Route path="/ordersummary" element={<OrderSummary />} />
        <Route path="/account-details" element={<AccountDetailsPage />} />
        <Route path="/tandc" element={<TandC />} />
        <Route path="/privacy" element={<PrivacyPol />} />
        <Route path="/shipping" element={<ShippingRefundPol />} />
        <Route path="/contact" element={<ContactUsPage />} />
        <Route element={<Error />} />
      </Routes>
      <ToastContainer
        position="top-center"
        autoClose={3000}
        hideProgressBar={true}
        newestOnTop={true}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
}

export default App;
