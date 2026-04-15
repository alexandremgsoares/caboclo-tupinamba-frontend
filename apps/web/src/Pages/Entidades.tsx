import Header from "../Components/Header";
import Footer from "../Components/Footer";

function Entidades() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-verde-escuro">
        <h1>Entidades da Umbanda</h1>
        <p></p>
      </main>
      <Footer />
    </div>
  );
}

export default Entidades;
