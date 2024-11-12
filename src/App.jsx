import BestSellers from "./Components/BestSellers/BestSellers";
import Hero from "./Components/Hero/Hero";
import { Route, Routes } from "react-router-dom";
import Login from "./Components/LogSignIn/Login";
import SignUp from "./Components/LogSignIn/SignUp";
import Error from "./Components/LogSignIn/Error";
import ForgetPass from "./Components/LogSignIn/ForgetPass";
import ChangePass from "./Components/LogSignIn/ChangePass";
import AccountDashboard from "./Components/DashboardPages/Dashboard";
import OrdersDesign from "./Components/DashboardPages/OrdersDesign";

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
        <Route path="/signup" element={<SignUp />} />
        <Route path="/dashboard" element={<AccountDashboard />} />
        <Route path="/orderdesign" element={<OrdersDesign />} />
        <Route path="/forgetpassword" element={<ForgetPass />} />
        <Route path="/changepassword" element={<ChangePass />} />
        <Route element={<Error />} />
      </Routes>
    </>
  );
}

export default App;
