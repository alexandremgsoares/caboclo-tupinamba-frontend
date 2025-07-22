import { NavLink } from "react-router";

interface SelectorProps {
  icon: React.ElementType;
  children: React.ReactNode;
  route: string;
}

function Selector({ children, icon: Icon, route }: SelectorProps) {
  return (
    <NavLink
      to={route}
      className={({ isActive }) =>
        `${
          isActive ? "bg-branco text-verde-claro-2" : ""
        } px-4 py-2 gap-2 border-1 border-branco text-branco rounded-xs flex font-crimson text-[18px] text-nowrap`
      }>
      <Icon className="text-inherit" />
      {children}
    </NavLink>
  );
}

export default Selector;
