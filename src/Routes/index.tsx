import { Route, Routes } from "react-router";
import Home from "../Pages/Home";
import UmbandaLayout from "../Pages/UmbandaLayout";
export const Router = () => {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="/umbanda" element={<UmbandaLayout />} />
    </Routes>
  );
};
