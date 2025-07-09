import Header from "../Components/Header";
import Footer from "../Components/Footer";
import Hero from "../Components/Hero";
import Historia from "../Components/Historia";
import Agenda from "../Components/Agenda";

function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-verde-escuro">
        <Hero />
        <Historia />
        <Agenda />
      </main>
      <Footer />
    </div>
  );
}

export default Home;
