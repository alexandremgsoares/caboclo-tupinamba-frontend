import { BrowserRouter, Routes, Route } from "react-router";
import Home from "./Pages/Home";
import HistoriaDaUmbanda from "./Pages/HistoriaDaUmbanda";
// import PontosEOracoes from "./Pages/PontosEOracoes";
// import Entidades from "./Pages/Entidades";
// import Orixas from "./Components/Orixas";
// import Exus from "./Components/Exus";
// import Caboclos from "./Components/Caboclos";
import OCentro from "./Pages/OCentro.tsx";
import Biblioteca from "./Pages/Biblioteca.tsx";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route index element={<Home />} />
          <Route path="centro" element={<OCentro />} />
          <Route path="historia" element={<HistoriaDaUmbanda />} />
          <Route path="biblioteca" element={<Biblioteca />} />
          {/* <Route path="pontos" element={<PontosEOracoes />}>
            <Route index element={<Navigate to="orixas" replace />} />
            <Route path="orixas" element={<Orixas />} />
            <Route path="exus" element={<Exus />} />
            <Route path="caboclos" element={<Caboclos />} />
          </Route> */}
          {/* <Route path="entidades" element={<Entidades />} /> */}
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
