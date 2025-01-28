import { Routes, Route, } from "react-router-dom";
import Homepage from "./Homepage";
import Login from "./pages/Login/login";
import YourCart from "./pages/Yourcart/yourcart";
import Orders from "./pages/Orders/orders";
import Board from "./pages/board/board";
import Fullpage from "./pages/fullpage/fullpage";
import { Register } from "./pages/register/register";
import { Layout } from "./layout";
import { PrivateRoutes } from "./assets/PriveteRouter";


export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Homepage />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
      <Route path="/*" element={<Layout />}>
        <Route element={<PrivateRoutes />}>
          <Route path="dashboard" element={<Fullpage />} />
          <Route path="board" element={<Board />} />
          <Route path="orders" element={<Orders />} />
          <Route path="yourcart" element={<YourCart />} />
        </Route>
      </Route>
    </Routes>
  );
};
