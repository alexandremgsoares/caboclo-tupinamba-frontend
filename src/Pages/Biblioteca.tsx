import Footer from "../Components/Footer";
import Header from "../Components/Header";
import { bibliotecaLivros } from "../../public/biblioteca";

function Biblioteca() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-verde-escuro px-4 py-8 md:px-8 lg:px-16">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl md:text-6xl text-branco mb-4 text-center font-cinzel">
            Biblioteca Caboclo Tupinambá
          </h1>
          <p className="text-verde-claro text-center mb-4 font-crimson text-xl md:text-2xl">
            Acervo disponível para consulta e empréstimo aos frequentadores do “
            Centro Espiritualista de Umbanda Caboclo Tupinambá “
          </p>
          <div className="bg-verde-claro-2/20 border-l-4 border-verde-claro-2 rounded-r-lg p-4 mb-8 max-w-3xl mx-auto">
            <p className="text-verde-claro font-crimson text-lg md:text-xl text-center">
              Para pegar um livro emprestado, fale com um dos atendentes durante
              as “Giras”
            </p>
          </div>

          {/* Tabela para Desktop */}
          <div className="hidden md:block overflow-x-auto bg-verde/30 rounded-lg shadow-lg">
            <table className="w-full">
              <thead className="bg-verde">
                <tr>
                  <th className="px-4 py-3 text-left text-branco font-cinzel text-sm uppercase tracking-wider w-20">
                    Item
                  </th>
                  <th className="px-4 py-3 text-left text-branco font-cinzel text-sm uppercase tracking-wider">
                    Título da Obra
                  </th>
                  <th className="px-4 py-3 text-left text-branco font-cinzel text-sm uppercase tracking-wider">
                    Autor
                  </th>
                </tr>
              </thead>
              <tbody className="divide-y divide-verde-claro-2/20">
                {bibliotecaLivros.map((livro, index) => (
                  <tr
                    key={`${livro.item}-${index}`}
                    className="hover:bg-verde-claro-2/10 transition-colors">
                    <td className="px-4 py-3 text-verde-claro font-crimson font-semibold text-lg">
                      {livro.item}
                    </td>
                    <td className="px-4 py-3 text-branco font-crimson text-lg">
                      {livro.titulo}
                    </td>
                    <td className="px-4 py-3 text-verde-claro font-crimson text-lg">
                      {livro.autor}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Cards para Mobile */}
          <div className="md:hidden space-y-4">
            {bibliotecaLivros.map((livro, index) => (
              <div
                key={`${livro.item}-${index}`}
                className="bg-verde/30 rounded-lg p-4 shadow-lg border border-verde-claro-2/20">
                <div className="flex items-start gap-3 mb-2">
                  <span className="bg-verde text-branco font-cinzel text-sm font-bold px-3 py-1 rounded">
                    {livro.item}
                  </span>
                </div>
                <h3 className="text-branco font-crimson text-xl font-semibold mb-2">
                  {livro.titulo}
                </h3>
                <p className="text-verde-claro font-crimson text-base">
                  <span className="font-semibold">Autor: </span>
                  {livro.autor}
                </p>
              </div>
            ))}
          </div>

          <div className="mt-8 text-center text-verde-claro font-crimson text-base md:text-lg">
            <p>
              Total de obras:{" "}
              <span className="font-bold">{bibliotecaLivros.length}</span>
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default Biblioteca;
