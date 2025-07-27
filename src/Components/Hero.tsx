import { LocationPin } from "@mui/icons-material";
import heroBg from "/bg-hero.webp";
import type { Gira } from "../../public/giras";

function getProximaGira(currentDate: Date, giras: Gira[]): Gira | null {
  const sorted = [...giras].sort((a, b) => {
    const dateA = new Date(2025, a.monthIndex - 1, a.day);
    const dateB = new Date(2025, b.monthIndex - 1, b.day);
    return dateA.getTime() - dateB.getTime();
  });

  for (const gira of sorted) {
    const eventDate = new Date(2025, gira.monthIndex - 1, gira.day + 1);
    if (eventDate > currentDate) {
      return gira;
    }
  }

  return null;
}

function Hero({ giras }: { giras: Gira[] }) {
  const today = new Date();
  const nextGira = getProximaGira(today, giras);

  function padStart(n: number) {
    return String(n).padStart(2, "0");
  }

  const proximaGiraTexto: string = nextGira
    ? `Nossa próxima gira será dia: ${padStart(nextGira.day)}/${padStart(
        nextGira.monthIndex
      )}/2025 - ${nextGira.titulo}`
    : "O calendário do próximo mês será divulgado em breve.";

  return (
    <section>
      <div className="relative w-full items-center h-[80vh] md:h-[80vh]">
        <img
          src={heroBg}
          alt="Entrada do Centro Espiritualista"
          className="absolute inset-0 w-full h-full md:h-full object-cover"
        />
        <div className="relative z-10 text-branco font-crimson justify-center flex flex-col h-full items-center px-4  text-center">
          <h1 className="text-5xl md:text-[80px] font-bold font-cinzel max-w-5xl">
            Venha conhecer a nossa casa.
          </h1>
          <p className="text-3xl">
            Estamos de braços abertos para receber você e sua família.
          </p>
          <div className="flex flex-col items-center gap-4 mt-8">
            <p className="inline-block px-3 py-1.5 bg-verde-claro rounded-xl text-verde-escuro text-xl md:text-2xl">
              {proximaGiraTexto}
            </p>
            <a
              className="inline-flex items-center text-xl md:text-2xl gap-2 py-2.5 px-4 rounded-lg bg-verde text-verde-claro"
              href="https://maps.app.goo.gl/3u36hYXEZQSNtV2p6"
              target="_blank">
              <LocationPin /> Como chegar no nosso centro.
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-8 z-0 bg-gradient-to-t from-[#192C07] to-[#3C3C3C1A]" />
      </div>
    </section>
  );
}

export default Hero;
