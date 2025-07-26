import Calendario from "./Calendario";
function Agenda() {
  return (
    <section id="calendario" className="flex flex-col mx-auto gap-10 py-16">
      <h1 className="font-bold text-6xl text-center text-branco">
        Confira a nossa agenda{" "}
      </h1>
      <div className="flex flex-col md:flex-row justify-center mx-auto gap-14 px-4">
        <Calendario></Calendario>
        <div className="flex md:max-w-1/3 text-2xl gap-4 text-branco">
          {/* <h3 className="text-4xl text-center">Orientações</h3> */}
          <ul className="list-disc pl-6 text-xl text-branco/90 flex flex-col gap-4">
            <li>
              O terreiro é um local sagrado, evite roupas curtas, decoatadas ou
              escuras. Recomenda-se roupas claras e sem muitos acessórios que
              possam chamar atenção.
            </li>
            <li>Ao chegar ao terreiro, coloque o seu celular no silencioso.</li>
            <li>
              É recomendado ficar descalço para que se conecte melhor e sinta a
              energia.
            </li>
            <li>
              Atente-se ao chamado das senhas para tomar o seu passe e, ao ser
              chamado devolva a ficha ao médium responsável.
            </li>
            <li>
              Não é permitido fumar nas dependências do terreiro, somente na
              área externa
            </li>
            <li>
              Não é permitido filmar ou fotografar dentro das dependências do
              terreiro.
            </li>
            <li>Contribua com a limpeza, lixo é no lixo.</li>
            <li>Em caso de dúvidas, pergunte aos médiuns presentes</li>
          </ul>
        </div>
      </div>
    </section>
  );
}

export default Agenda;
