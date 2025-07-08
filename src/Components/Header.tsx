import { NavLink } from "react-router";

function Header() {
  return (
    <header className="bg-verde-claro shadow-md text-verde-escuro font-cinzel text-xl sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">
        <img
          src="../src/assets/tupinamba-logo-horizontal.svg"
          alt="logo do centro tupinambá"
        />
        <nav>
          <ul className="flex items-center gap-8">
            <li>
              <NavLink to="/">O centro</NavLink>
            </li>
            <li>
              <NavLink to="/sobre">A Umbanda</NavLink>
            </li>
            <button className="py-2.5 px-4 rounded-lg bg-verde-escuro text-verde-claro">
              Nossa Agenda
            </button>
          </ul>
        </nav>
      </div>
    </header>
  );
}

export default Header;
