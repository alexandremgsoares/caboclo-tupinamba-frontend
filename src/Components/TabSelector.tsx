import { useState } from "react";
import { MenuBook, LibraryMusic, Person } from "@mui/icons-material";
import Selector from "./Selector";

function TabSelector() {
  const [isActiveTab, setIsActiveTab] = useState(0);

  return (
    <>
      <div className="bg-verde-claro-2 flex flex-row max-w-7xl p-2 gap-2 md:justify-center overflow-scroll">
        <Selector
          icon={MenuBook}
          active={isActiveTab === 0}
          onClick={() => setIsActiveTab(0)}>
          <p>História</p>
        </Selector>

        <Selector
          icon={LibraryMusic}
          active={isActiveTab === 1}
          onClick={() => setIsActiveTab(1)}>
          <p>Pontos e Orações</p>
        </Selector>

        <Selector
          icon={Person}
          active={isActiveTab === 2}
          onClick={() => setIsActiveTab(2)}>
          <p>Entidades</p>
        </Selector>
      </div>

      {/* Conteúdo da aba ativa */}
      <div className="p-4 text-center text-xl text-branco">
        {isActiveTab === 0 && <p>Conteúdo da história do centro.</p>}
        {isActiveTab === 1 && <p>Lista de pontos cantados e orações.</p>}
        {isActiveTab === 2 && <p>Informações sobre as entidades.</p>}
      </div>
    </>
  );
}

export default TabSelector;
