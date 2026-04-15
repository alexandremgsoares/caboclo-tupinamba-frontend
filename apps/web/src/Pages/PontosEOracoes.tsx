import Footer from "../Components/Footer";
import Header from "../Components/Header";
import Selector from "../Components/Selector";
import { MenuBook, LibraryMusic, Person } from "@mui/icons-material";
import { Outlet } from "react-router";

function PontosEOracoes() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-verde-escuro">
        <div className="bg-verde-claro-2 flex flex-row p-2 gap-2 md:justify-center overflow-scroll">
          <Selector icon={MenuBook} route="orixas">
            <p>Orixás</p>
          </Selector>

          <Selector icon={LibraryMusic} route="exus">
            <p>Exu</p>
          </Selector>

          <Selector icon={Person} route="caboclos">
            <p>Caboclos</p>
          </Selector>
        </div>
        <div className="p-4 text-center text-xl text-branco">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default PontosEOracoes;
