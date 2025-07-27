import { Menu } from "@mui/icons-material";
import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import logo from "/tupinamba-logo-horizontal.svg";

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] = useState<any>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: any) => {
      e.preventDefault();
      setDeferredPrompt(e);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      setDeferredPrompt(null);
      setIsInstallable(false);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    if ("serviceWorker" in navigator) {
      navigator.serviceWorker.register("/sw.js");
    }

    return () => {
      window.removeEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = () => {
    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        setDeferredPrompt(null);
        setIsInstallable(false);
      });
    }
  };

  return (
    <header className="bg-verde-claro shadow-md text-verde-escuro font-cinzel text-[18px] sticky top-0 z-50">
      <div className="flex items-center justify-between max-w-7xl mx-auto px-4 py-2 gap-2 md:text-[18px]">
        <a href="/">
          <img
            className="md:h-16 h-14"
            src={logo}
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
              <ul className="absolute right-0 mt-4 bg-verde-claro text-verde-escuro flex flex-col gap-4 p-6 shadow-lg z-50 text-nowrap rounded-lg">
                <li className="border rounded-lg py-2 px-4">
                  <a href="/#centro" onClick={() => setIsMenuOpen(false)}>
                    O centro
                  </a>
                </li>
                <li className="border rounded-lg py-2 px-4">
                  <NavLink to="/historia" onClick={() => setIsMenuOpen(false)}>
                    A Umbanda
                  </NavLink>
                </li>
                <li className="py-2 px-4 rounded-lg border">
                  <a href="/#calendario">Nossa Agenda</a>
                </li>
                {isInstallable && (
                  <li>
                    <button
                      onClick={handleInstallClick}
                      className="py-2 px-4 rounded-lg bg-verde-escuro text-verde-claro w-full text-left">
                      Salvar página no celular
                    </button>
                  </li>
                )}
              </ul>
            )}
          </div>
        ) : (
          <nav>
            <ul className="flex items-center gap-4">
              <li>
                <a href="/#centro">O centro</a>
              </li>
              <li>
                <NavLink to="/historia">A Umbanda</NavLink>
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
