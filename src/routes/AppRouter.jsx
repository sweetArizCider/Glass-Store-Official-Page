import { Routes, Route } from "react-router-dom";
import { Home } from "@/pages/home/home";
import { Login } from "@/pages/login/Login";
import { Register } from "@/pages/register/Register";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="*" element={<h1>404 Not Found</h1>} />
    </Routes>
  );
};
