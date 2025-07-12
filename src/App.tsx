import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import UmbandaLayout from "./Pages/UmbandaLayout";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="/umbanda" element={<UmbandaLayout />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
