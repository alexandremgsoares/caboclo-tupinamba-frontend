import type { OverridableComponent } from "@mui/material/OverridableComponent";
import type { SvgIconTypeMap } from "@mui/material/SvgIcon";
import { Link } from "react-router";

type CardInformacao = {
  titulo: string;
  descricao: string;
  icon: OverridableComponent<SvgIconTypeMap>;
  link: string;
};
function CardInformacao({
  titulo,
  descricao,
  icon: Icon,
  link,
}: CardInformacao) {
  return (
    <Link
      to={link}
      className="p-6 gap-4 flex flex-col flex-1 items-center rounded-2xl bg-verde-claro hover:bg-verde-claro-2 text-verde-escuro hover:text-verde-claro border-verde-escuro border-2">
      <Icon sx={{ fontSize: 56 }} />
      <h3 className="text-2xl font-semibold">{titulo}</h3>
      <p className="text-xl">{descricao}</p>
    </Link>
  );
}

export default CardInformacao;
