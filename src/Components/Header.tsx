import { Menu } from "@mui/icons-material";
import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
// import logo from "/tupinamba-logo-horizontal.svg";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <header className="bg-verde-claro shadow-md text-verde-escuro font-cinzel text-[18px] sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2">
        <a href="/">
          <img
            className="h-12"
            src={"/tupinamba-logo-horizontal.svg"}
            alt="logo do centro tupinambá"
          />
        </a>

        {isMobile ? (
          <div className="relative">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="focus:outline-none">
              {isMenuOpen ? <Close /> : <Menu />}
            </button>

            {isMenuOpen && (
              <ul className="absolute right-0  mt-4 bg-verde-claro text-verde-escuro flex flex-col gap-4 p-4 shadow-lg z-50 text-nowrap">
                <li>
                  <a href="/#centro" onClick={() => setIsMenuOpen(false)}>
                    O centro
                  </a>
                </li>
                <li>
                  <NavLink to="/Umbanda" onClick={() => setIsMenuOpen(false)}>
                    A Umbanda
                  </NavLink>
                </li>
                <li>
                  <a
                    className="py-2 px-4 rounded-lg bg-verde-escuro text-verde-claro"
                    href="/#calendario">
                    Nossa Agenda
                  </a>
                </li>
              </ul>
            )}
          </div>
        ) : (
          <nav>
            <ul className="flex items-center gap-6">
              <li>
                <a href="/#centro">O centro</a>
              </li>
              <li>
                <NavLink to="/Umbanda">A Umbanda</NavLink>
              </li>
              <li>
                <a
                  className="py-2 px-4 rounded-lg bg-verde-escuro text-verde-claro"
                  href="/#calendario">
                  Nossa Agenda
                </a>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}

export default Header;
