import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Historia from "../Components/Historia";
import Agenda from "../Components/Agenda";
import { giras } from "../../public/giras";

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
        <Historia />
        <Agenda giras={giras} />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
