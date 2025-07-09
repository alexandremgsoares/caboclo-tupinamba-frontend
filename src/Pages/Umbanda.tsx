import Footer from "../Components/Footer";
import Header from "../Components/Header";
import TabSelector from "../Components/TabSelector";

function Umbanda() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-verde-escuro">
        <TabSelector />
      </main>
      <Footer />
    </div>
  );
}

export default Umbanda;
