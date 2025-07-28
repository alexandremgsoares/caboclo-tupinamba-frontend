import { Menu } from "@mui/icons-material";
import { Close } from "@mui/icons-material";
import { useEffect, useState } from "react";
import { NavLink } from "react-router";
import { Workbox } from "workbox-window";
import logo from "/tupinamba-logo-horizontal.svg";

interface BeforeInstallPromptEvent extends Event {
  readonly platforms: string[];
  readonly userChoice: Promise<{
    outcome: "accepted" | "dismissed";
    platform: string;
  }>;
  prompt(): Promise<void>;
}

function Header() {
  const [isMobile, setIsMobile] = useState(window.innerWidth < 800);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [deferredPrompt, setDeferredPrompt] =
    useState<BeforeInstallPromptEvent | null>(null);
  const [isInstallable, setIsInstallable] = useState(false);

  useEffect(() => {
    if ("serviceWorker" in navigator) {
      const wb = new Workbox("/sw.js");

      wb.addEventListener("installed", (event) => {
        console.log("SW registrado:", event);
      });

      wb.register().catch((error) => {
        console.log("Erro SW:", error);
      });
    }
  }, []);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 800);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const handleBeforeInstallPrompt = (e: Event) => {
      console.log("beforeinstallprompt disparado", e);
      e.preventDefault();
      const event = e as BeforeInstallPromptEvent;
      setDeferredPrompt(event);
      setIsInstallable(true);
    };

    const handleAppInstalled = () => {
      console.log("App instalado");
      setDeferredPrompt(null);
      setIsInstallable(false);
    };

    window.addEventListener("beforeinstallprompt", handleBeforeInstallPrompt);
    window.addEventListener("appinstalled", handleAppInstalled);

    // Verificar se já está instalado
    const isStandalone = window.matchMedia(
      "(display-mode: standalone)"
    ).matches;
    
    if (isStandalone) {
      setIsInstallable(false);
      console.log("App já está instalado");
      return;
    }

    // Fallback para iOS Safari
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);
    if (isIOS && !isStandalone) {
      setIsInstallable(true);
      console.log("iOS detectado, mostrando botão PWA");
    }

    return () => {
      window.removeEventListener(
        "beforeinstallprompt",
        handleBeforeInstallPrompt
      );
      window.removeEventListener("appinstalled", handleAppInstalled);
    };
  }, []);

  const handleInstallClick = () => {
    const isIOS = /iPad|iPhone|iPod/.test(navigator.userAgent);

    if (deferredPrompt) {
      deferredPrompt.prompt();
      deferredPrompt.userChoice.then(() => {
        setDeferredPrompt(null);
        setIsInstallable(false);
      });
    } else if (isIOS) {
      alert(
        'Para instalar: toque em "Compartilhar" e depois "Adicionar à Tela de Início"'
      );
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
                      className="py-2 px-4 rounded-lg bg-verde-escuro text-verde-claro w-full text-left touch-manipulation cursor-pointer active:scale-95 transition-transform">
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
