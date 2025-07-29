import { MenuBook } from "@mui/icons-material";
import Selector from "./Selector";
import { Outlet } from "react-router";

function TabSelector() {
  return (
    <>
      <div className="bg-verde-claro-2 flex flex-row p-2 gap-2 md:justify-center overflow-scroll">
        <Selector icon={MenuBook} route="historia">
          <p>História</p>
        </Selector>

        {/* <Selector icon={LibraryMusic} route="pontos">
          <p>Pontos e Orações</p>
        </Selector>

        <Selector icon={Person} route="entidades">
          <p>Entidades</p>
        </Selector> */}
      </div>
      <div className="p-4 text-center text-xl text-branco">
        <Outlet />
      </div>
    </>
  );
}

export default TabSelector;
