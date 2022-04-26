import { Route, Routes } from "react-router-dom";
import "./App.css";

import Header from "./Pages/Shared/Header/Header";
import Home from "./Pages/Home/Home/Home";
import About from "./Pages/About/About";
import Login from "./Pages/CustomerForms/Login/Login";
import Register from "./Pages/CustomerForms/Register/Register";
import Footer from "./Pages/Shared/Footer/Footer";
import ServiceDetail from "./Pages/ServiceDetail/ServiceDetail";
import NotFound from "./Pages/Shared/NotFound/NotFound";
import Checkout from "./Pages/Checkout/Checkout";
import RequireAuth from "./Pages/CustomerForms/RequireAuth/RequireAuth";
import AddService from "./Pages/AddService/AddService";
import ManageServices from "./Pages/ManageServices/ManageServices";
import { ToastContainer } from "react-toastify";
import Orders from "./Pages/Orders/Orders";

function App() {
  return (
    <div>
      <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />
        <Route path="/service/:serviceId" element={<ServiceDetail />} />
        <Route path="/about" element={<About />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route
          path="/checkout/:serviceId"
          element={
            <RequireAuth>
              <Checkout />
            </RequireAuth>
          }
        />
        <Route
          path="/addservice"
          element={
            <RequireAuth>
              <AddService />
            </RequireAuth>
          }
        />
        <Route
          path="/manage"
          element={
            <RequireAuth>
              <ManageServices />
            </RequireAuth>
          }
        />
        <Route
          path="/orders"
          element={
            <RequireAuth>
              <Orders />
            </RequireAuth>
          }
        />
        <Route path="*" element={<NotFound />} />
      </Routes>
      <Footer />
      <ToastContainer />
    </div>
  );
}

export default App;
