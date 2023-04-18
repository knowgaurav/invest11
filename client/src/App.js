import "./App.css";
import Home from "./screens/Home/Home";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import Stocks from "./screens/Stocks/Stocks";
import Settings from "./screens/Settings/Settings";
import StockDetails from "./screens/StockDetails/StockDetails";
import RegisterForm from "./components/RegisterForm";
import LoginForm from "./components/LoginForm";
import AuthLayout from "./components/AuthLayout";
import toast, { Toaster } from "react-hot-toast";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<LoginForm />} />
            <Route path="/register" element={<RegisterForm />} />
          </Route>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="stocks">
              <Route index element={<Stocks />} />
              <Route path=":id" element={<StockDetails />} />
            </Route>
            <Route path="settings" element={<Settings />} />
          </Route>
        </Routes>
      </BrowserRouter>
      <Toaster />
    </>
  );
}

export default App;
