import Footer from "../Components/Footer";
import Header from "../Components/Header";

function HistoriaDaUmbanda() {
  return (
    <div className="flex flex-col min-h-screen">
      <Header />
      <main className="flex-1 bg-verde-escuro">
        <div className="max-w-4xl flex flex-col mx-auto text-verde-claro/80 text-justify gap-5 py-4 md:py-8 text-lg px-4 md:px-8">
          <h1 className="text-4xl md:text-6xl text-verde-claro font-cinzel text-center">
            História da Umbanda
          </h1>
          <h2 className="text-xl text-verde-claro font-medium">
            “A umbanda é paz e amor, É um reino, cheio de luz...”
          </h2>
          <p>
            Em 15 de novembro de 1908, a uma Sessão da Federação Espírita do Rio
            de Janeiro, o jovem Zélio de Moraes (na época com 17 anos) foi
            levado, por causa de um problema de saúde que os médicos não
            conseguiram resolver, dizendo ser de origem espiritual. Nesta
            reuniao, manifestou-se pela primeira vez o Caboclo das Sete
            Encruzilhadas.
          </p>
          <p>
            Iniciada a Sessão, começaram a se manifestar diversos espíritos de
            negros escravos e indígenas nos médiuns presentes, sendo convidados
            a se retirarem pelo dirigente José de Souza (Zeca) que os julgava
            atrasados, sob o ponto de vista espiritual, cultural e moral. Foi,
            então, que o Caboclo das Sete Encruzilhadas, enviado nesta missão
            por Santo Agostinho, proferiu um discurso em defesa das entidades
            presentes, discriminadas pela diferença de cor e classe social,
            características dos espíritos enquanto encarnados na sociedade
            terrena.
          </p>
          <p>
            Os dirigentes da reunião espírita tentaram afastar o próprio Caboclo
            das Sete Encruzilhadas, quando este avisou que, se não havia
            permissao ali para manifestação dos espíritos de negros e índios,
            considerados atrasados, seria fundado por ele mesmo, na noite
            seguinte, na casa de Zélio, um novo culto, onde tais entidades
            poderiam exercer a missão da caridade. Perguntado sobre se alguém
            iria participar deste culto, disse "Botarei no cume de cada montanha
            que circula Neves, uma trombeta, tocando, anunciando a presença de
            uma Tenda Espírita, onde o Preto e o Caboclo possam trabalhar".
          </p>
          <p>
            Às 20 horas do dia seguinte, em 16 de novembro de 1908, para amigos,
            parentes, curiosos e membros da Federaçao Espirita presentes na
            Sessão do dia anterior, apresentou-se novamente o Caboclo das Sete
            Encruzilhadas, declarando que se iniciava um novo culto, no qual
            Pretos Velhos e Caboclos trabalhariam livremente. A pratica da
            caridade, no sentido do amor fraterno, seria a caracteristica
            principal do culto, com base o Evangelho de Jesus.
          </p>
          <p className="font-bold">
            Trecho do relato da reunião espírita onde ocorreu a manifestação do
            Caboclo das Sete Encruzilhadas. Fonte: site da Tenda Espírita Nossa
            Senhora da Piedade.
          </p>
          <p>
            A Umbanda incorporou práticas e crenças do candomblé, da umbanda
            afro-brasileira, do espiritismo, codificado por kardec, e do
            catolicismo popular. Seus adeptos são conhecidos como umbandistas, e
            a religião se espalhou por todo o Brasil, adaptando-se às diferentes
            regiões e culturas locais. Nas práticas mediúnicas de umbanda
            ocorrem as incorporações de entidades espirituais, nomeadas de
            Guias, com os arquétipos específicos das linhas de trabalho, e
            envolvem cantos, danças, oferendas e trabalhos espirituais para
            auxílio em diversas áreas da vida.
          </p>
          <p>
            A Umbanda promove valores como caridade, respeito à natureza,
            solidariedade e busca pela evolução espiritual.
          </p>
        </div>
      </main>
      <Footer />
    </div>
  );
}

export default HistoriaDaUmbanda;
