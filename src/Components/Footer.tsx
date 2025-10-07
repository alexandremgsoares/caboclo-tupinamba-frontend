import { LocationPin } from "@mui/icons-material";
import logo from "/tupinamba-logo-horizontal.svg";
import EmailCopy from "./EmailCopy";
import { NavLink } from "react-router";

function Footer() {
  return (
    <footer className="p-4 bg-verde-claro font-crimson text-xl text-verde-escuro ">
      <div className="flex flex-col md:flex-row max-w-7xl mx-auto gap-8">
        {/* Left Column */}
        <div className="flex flex-col gap-8">
          <img className="h-[100px]" src={logo} alt="" />
          <div className="flex gap-12">
            <ul>
              <li className="font-bold">
                <a href="/">Início do Site</a>
              </li>
              <li>
                <a href="/#centro">Nossa História</a>
              </li>
              <li>
                <NavLink to="/centro">O Centro</NavLink>
              </li>
              <li>
                <a href="/#calendario">Nossa Agenda</a>
              </li>
              <li>
                <NavLink to="/biblioteca">Biblioteca</NavLink>
              </li>
            </ul>
            <ul>
              <li className="font-bold">Conheça Umbanda</li>
              <NavLink to="/historia">História da Umbanda</NavLink>
              {/* <li>Pontos da Umbanda</li> */}
              {/* <li>Entidades da Umbanda</li> */}
            </ul>
          </div>
          <div className="flex flex-col gap-2 mt-3">
            <p className="font-medium">
              Clique no link abaixo e faça sua doação pelo nosso pix.
            </p>
            <EmailCopy
              email="caboclotupinamba2024@gmail.com"
              displayText="Sua doação é muito importante."
              className="text-lg max-w-fit gap-2"
            />
          </div>
        </div>

        {/* Right Column */}
        <div className="flex flex-col gap-4">
          <div>
            <h3 className="font-bold">Onde nos encontrar?</h3>
            <p>Rua "C", 310, Bairro Eldorado, Unaí, Minas Gerais.</p>
          </div>
          <div>
            <a
              className="inline-flex items-center gap-2 py-2.5 px-4 rounded-lg bg-verde-escuro text-verde-claro text-nowrap"
              href="https://maps.app.goo.gl/3u36hYXEZQSNtV2p6"
              target="_blank">
              <LocationPin /> Abrir no mapa
            </a>
          </div>
          <iframe
            title="Mapa Centro Espiritualista Caboclo Tupinambá"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d8326.313304196809!2d-46.90992200428053!3d-16.408754965942453!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9357af00037411c1%3A0xcbde03204db67afa!2sCentro%20espiritualista%20Caboclo%20Tupinamb%C3%A1!5e1!3m2!1sen!2sbr!4v1751995240039!5m2!1sen!2sbr"
            width="100%"
            height="100%"
            style={{ border: 0 }}
            allowFullScreen
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            className="w-full md:min-h-[350px] h-full rounded-lg shadow-md"></iframe>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
