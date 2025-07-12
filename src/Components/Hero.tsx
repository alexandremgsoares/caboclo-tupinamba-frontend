import { LocationPin } from "@mui/icons-material";
import { giras } from "./giras";
import type { Gira } from "./giras";
// import heroBg from "../assets/bg-hero.webp";

function getNextGira(currentDate: Date, giras: Gira[]): Gira | null {
  const monthMap: Record<string, number> = {
    JAN: 0,
    FEV: 1,
    MAR: 2,
    ABR: 3,
    MAI: 4,
    JUN: 5,
    JUL: 6,
    AGO: 7,
    SET: 8,
    OUT: 9,
    NOV: 10,
    DEZ: 11,
  };
  // Sort events by date
  const sorted = [...giras].sort((a, b) => {
    const dateA = new Date(2025, monthMap[a.month], a.day);
    const dateB = new Date(2025, monthMap[b.month], b.day);
    return dateA.getTime() - dateB.getTime();
  });
  for (const gira of sorted) {
    const eventDate = new Date(2025, monthMap[gira.month], gira.day);
    if (eventDate > currentDate) {
      return gira;
    }
  }
  return null;
}

function Hero() {
  const today = new Date();
  const nextGira = getNextGira(today, giras);
  const monthNumberMap: Record<string, string> = {
    JAN: "01",
    FEV: "02",
    MAR: "03",
    ABR: "04",
    MAI: "05",
    JUN: "06",
    JUL: "07",
    AGO: "08",
    SET: "09",
    OUT: "10",
    NOV: "11",
    DEZ: "12",
  };
  return (
    <section>
      <div className="relative w-full items-center h-[80vh] md:h-[80vh]">
        <img
          src="/bg-hero.webp"
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
            <p className="inline-block px-3 py-1.5 bg-verde-claro rounded-xl text-verde-escuro text-2xl">
              {nextGira
                ? `Nossa próxima gira será dia : ${String(
                    nextGira.day
                  ).padStart(2, "0")}/${monthNumberMap[nextGira.month]}/2025`
                : "O calendário do próximo mês será divulgado em breve."}
            </p>
            <a
              className="inline-flex items-center text-2xl gap-2 py-2.5 px-4 rounded-lg bg-verde text-verde-claro"
              href="https://maps.app.goo.gl/3u36hYXEZQSNtV2p6">
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
