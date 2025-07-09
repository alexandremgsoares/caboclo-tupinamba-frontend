import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import Umbanda from "../Pages/Umbanda";

export const Router = () => {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/Umbanda" element={<Umbanda />} />
    </Routes>
  );
};
