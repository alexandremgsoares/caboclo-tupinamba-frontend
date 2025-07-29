import { BrowserRouter, Routes, Route, Navigate } from "react-router";
import Home from "./Pages/Home";
import UmbandaLayout from "./Pages/UmbandaLayout";
import HistoriaDaUmbanda from "./Pages/HistoriaDaUmbanda";
// import PontosEOracoes from "./Pages/PontosEOracoes";
// import Entidades from "./Pages/Entidades";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route element={<UmbandaLayout />}>
            <Route index element={<Navigate to="historia" replace />} />
            <Route path="historia" element={<HistoriaDaUmbanda />} />
            {/* <Route path="pontos" element={<PontosEOracoes />} />
            <Route path="entidades" element={<Entidades />} /> */}
          </Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
