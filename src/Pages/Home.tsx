import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Historia from "../Components/Historia";
import Agenda from "../Components/Agenda";
import { giras } from "../../public/giras";
import CardInformacao from "../Components/CardInformacao";
import { Groups, LibraryMusic, MenuBook } from "@mui/icons-material";

export type Gira = {
  titulo: string;
  day: number;
  month: string;
  year: number;
  monthIndex: number;
};

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-verde-escuro">
        <Hero giras={giras} />
        <Agenda giras={giras} />
        <section className="flex py-16 px-4">
          <div className="max-w-6xl flex-col md:flex-row mx-auto flex gap-8">
            <CardInformacao
              link="/historia"
              icon={MenuBook}
              titulo="Historia"
              descricao="Conheça como a Umbanda surgiu no Brasil, e oseu fundador."
            />
            <CardInformacao
              link="/pontos"
              icon={LibraryMusic}
              titulo="Pontos e Orações"
              descricao="Aprenda os pontos e orações para os orixás e entidades. "
            />
            <CardInformacao
              link="/entidades"
              icon={Groups}
              titulo="Entidades"
              descricao="Conheça as entidades da umbanda e como cada uma trabalha."
            />
          </div>
        </section>
        <Historia />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
