import Footer from "../Components/Footer";
import Header from "../Components/Header";
import tupinamba from "/tupinamba.avif";

function OCentro() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-verde-escuro">
        <div className="max-w-4xl flex flex-col mx-auto text-verde-claro/80 text-justify gap-2 py-4 md:py-8 text-lg px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl text-branco mb-6 text-center font-cinzel">
            O Centro Caboclo Tupinambá
          </h1>
          <div className="md:flex-row flex-col flex gap-4 items-start">
            <img src={tupinamba} alt="" className="md:max-w-1/2" />
            <div className="flex flex-col gap-2">
              <h2 className="text-2xl text-verde-claro font-medium">
                Nossa Missão
              </h2>
              <p>
                Disseminar a Religião de Umbanda, como instrumento de religação
                entre homem e Deus. Contribuir com a elevação moral e
                espiritual, individual e social, através das manifestações
                espirituais, levando o indivíduo ao autoconhecimento e à
                evolução espiritual.
              </p>
              <h2 className="text-2xl text-verde-claro font-medium">
                Nossa Visão
              </h2>
              <p>
                Disseminar conhecimentos gerais e específicos de nossa raiz,
                diminuindo o preconceito social em relação à Religião de
                Umbanda; contribuindo socialmente através da elevação
                espiritual, moral e ética dos indivíduos que a compõem.
              </p>
            </div>
          </div>
          <h2 className="text-2xl text-verde-claro font-medium">
            Nossos Valores
          </h2>
          <ul className="list-disc">
            <li>Respeito a todas as formas de vida;</li>
            <li>Respeito à diversidade em todas as suas faces;</li>
            <li>
              Jamais utilizar de forma desonesta ou desonrosa os conhecimentos
              magísticos de Umbanda;
            </li>
            <li>
              Jamais intervir no livre-arbítrio, dádiva do Pai Supremo ao
              encarnado.
            </li>
          </ul>
          <p>
            “O terreiro é um espaço sagrado, um templo vivo, com fundamento
            ancestral e energético, onde se entra com fé e se sai transformado.”
          </p>
          <p>
            “A Umbanda é uma religião de comunicação entre mundos: entre o
            visível e o invisível, entre o plano espiritual e o material. Esse
            elo tem nome: mediunidade.”
          </p>
          <p className="font-bold">
            Ser médium de Umbanda é ser um trabalhador do sagrado.
          </p>
          <p>
            É ser ponte, consciente da responsabilidade no que se sente, se
            permite e se transmite. Ser médium, antes de ser um compromisso com
            a casa que o acolhe e com os guias e mentores, é um compromisso com
            VOCÊ! É um compromisso com a sua evolução espiritual!
          </p>
          <p>
            Se a Umbanda o emociona, se o som do atabaque o arrepia, se o cheiro
            da defumação o enche de vida, e se estar em um terreiro faz seu
            coração vibrar… Seja bem-vindo! Você é como nós!
          </p>
          <p className="font-bold">
            Não escolhi a Umbanda. A Umbanda me escolheu!
          </p>
          <p>
            É nosso amor pela religião que nos faz aguentar os percalços e
            tribulações que um médium umbandista enfrenta. A Umbanda está para
            todos, mas nem todos estão para a Umbanda. Nossa religião é voltada
            ao bem comum, à prática do amor, da caridade, da fé, da doação e da
            reforma íntima, através do conhecimento. Você está disposto?
            Mediunidade não se desenvolve só com vontade, mas com tempo, preparo
            e firmeza espiritual.
          </p>
          <p>
            — Já ouvi falar que quem entra não pode sair. Perderá tudo o que
            conquistou e blá, blá, blá! Engano! Deus, puro amor, não é humano
            para ser punitivo. Somos detentores de nosso livre-arbítrio.
          </p>
          <p>
            Essas experiências que muitos relatam ao deixar a religião (seja ela
            qual for) são resultado da perda do equilíbrio, do caminhar e da
            falta de fé, determinando dificuldades na construção do seu ser por
            desconexão da vida espiritual.
          </p>
          <p className="font-bold">É melhor vir pelo AMOR, que pela DOR.</p>
          <p>
            Essa frase nos remete a algo chamado MISSÃO! Quando adentramos um
            terreiro, nossa alma vai expressar em nossos corpos emoções que nos
            indicam o caminho que precisamos trilhar nesse processo de
            encarnação. Muitas almas encarnadas vêm com a missão de ser um
            trabalhador de Umbanda e, sim, não há como fugir. Se o amor não lhe
            tocar, a dor ensinará o caminho dentro dessa seara de caridade.
          </p>
          <p>
            “Mediunidade não é glamour, é serviço, e servir exige entrega,
            silêncio, humildade, escuta, estudo e constância.”
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default OCentro;
