import altar from "/altar.webp";
function Historia() {
  return (
    <section
      id="centro"
      className="flex flex-col md:flex-row items-center px-4 py-8 gap-8 max-w-[1400px] mx-auto text-branco">
      <div className="md:w-1/2 w-full">
        <h1 className="font-bold text-5xl">Nossa história.</h1>
        <h3
          className="my-4
         text-3xl text-verde-claro/90">
          Nascimento do Terreiro.
        </h3>
        <p className="mt-4 text-xl text-verde-claro/90 text-justify">
          {" "}
          O Centro Espiritualista de Umbanda Caboclo Tupinambá (CEUCT) foi
          fundado no dia primeiro de julho de 2024. Uma construção pequena que
          vem crescendo com muito amor e carinho. Era um lugar de reunir os
          amigos e se tornou um terreiro. Éramos 3 ou 4 médiuns, atendendo
          poucas pessoas para passes e consultas por gira. Entretanto, mais
          pessoas foram chegando, e a necessidade de ampliar foi iminente. A
          gira de terça-feira acontece para ajudar maior número de pessoas e
          aproveitar o espaço construído, contando, em pouco mais de 11 meses,
          com 16 médiuns. Eu, Vinicius Rodrigo de Araújo, 43 anos, sou o
          fundador do Centro, mas o terreiro não é meu, é do Caboclo Tupinambá,
          do Pai Joaquim das Almas e de todos que participam dele. O CEUCT hoje
          é um sistema vivo, onde as pessoas fazem parte não só da gira, mas
          também da família CEUCT. Cuidamos da casa, das energias, das amizades,
          do espírito, enfim... da nossa existência! O terreiro caminha para uma
          NOVA ERA, onde a APOMETRIA, o REIKI e a TERAPIA HOLÍSTICA serão
          acrescentados, fortalecendo ainda mais os laços de solidariedade e
          assistência aos que buscam acolhimento de suas necessidades, colocando
          em prática a fundamentação da Umbanda: Amor, Caridade e Humildade.{" "}
        </p>
      </div>
      <img
        className="w-full max-w-md md:max-w-none md:w-1/2 h-auto object-cover rounded-lg"
        src={altar}
        alt="foto do nosso altar"
      />
    </section>
  );
}

export default Historia;
