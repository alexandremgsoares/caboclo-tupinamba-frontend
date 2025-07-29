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
          Nascimento do Terreiro
        </h3>
        <p className="mt-4 text-xl text-verde-claro/90 text-justify">
          {" "}
          O Centro Espiritualista de Umbanda CabocloTupinambá foi fundado no dia
          01 de Julho de 2024, numa construção teoricamente pequena que aos
          poucos vem crescendo com muito amor e carinho, o que era um lugar de
          reunir os amigos se tornou um terreiro. A expectativa era de que
          seríamos em 3 ou 4 médiuns no período de 1 ano e que atenderíamos umas
          10 pessoas para passes e consultas por gira. Entretanto, mais pessoas
          foram chegando e a necessidade de ampliar foi eminente. A gira de
          terça-feira nasceu para poder ajudar mais pessoas e aproveitar o
          espaço que tínhamos, em pouco mais de 11 meses já tínhamos 16 mediuns.
          Eu Vinicius Rodrigo de Araújo , aos 43 anos de vida , sou o fundador
          do Centro , e sempre digo que o terreiro não é meu, que é do Caboclo
          Tupinambá e Pai Joaquim das Almas e de todos que nele se fazem
          presentes. E é a mais pura verdade, pois o CEUCT hoje é um sistema
          vivo onde as pessoas podem participar, mas não só da gira, e sim da
          família CEUCT. Cuidam da casa, das energias, das amizades, do
          espírito, enfim... da sua existência! Hoje o Terreiro caminha para um
          NOVA ERA , onde a APOMETRIA , REIKI , TERAPIA HOLISTICA haverá espaço
          para todos fortalecendo ainda mais os laços de solidariedade e
          assistência aos que necessitam, colocando em prática a fundamentação
          da Umbanda: Amor, Caridade e Humildade.{" "}
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
