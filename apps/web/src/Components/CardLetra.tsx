import { ExpandLess, ExpandMore } from "@mui/icons-material";
import { useState } from "react";
import React from "react";

function CardLetra({
  titulo,
  children,
}: {
  titulo: string;
  children: React.ReactNode;
}) {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div
      onClick={() => setIsOpen(!isOpen)}
      className="cursor-pointer p-2 text-[16px] bg-verde-claro text-verde-escuro rounded-xs">
      <p>
        {titulo} {isOpen ? <ExpandLess /> : <ExpandMore />}
      </p>
      {isOpen && (
        <div className="border-t-2 p-1 text-verde-escuro">{children}</div>
      )}
    </div>
  );
}

export default CardLetra;
