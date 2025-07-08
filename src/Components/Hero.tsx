import { LocationPin } from "@mui/icons-material";

function Hero() {
  return (
    <section>
      <div className="relative w-full h-[80vh]">
        <img
          src="../src/assets/bg-hero.webp"
          alt="Entrada do Centro Espiritualista"
          className="absolute inset-0 w-full mx-auto h-full object-cover"
        />
        <div className="relative z-10 text-branco font-crimson px-4 py-24 text-center">
          <h1 className="text-[82px] text-bold">
            Venha conhecer a nossa casa.
          </h1>
          <p className="text-4xl">
            Estamos de braços abertos para receber você e sua família.
          </p>
          <div className="flex flex-col items-center gap-4 mt-8">
            <p className="inline-block px-6 py-3 bg-verde-claro rounded-xl text-verde-escuro text-4xl">
              Nossa próxima gira será dia : 08/07/2025
            </p>
            <a
              className="inline-flex items-center text-2xl gap-2 py-2.5 px-4 rounded-lg bg-verde-escuro text-verde-claro text-nowrap"
              href="https://maps.app.goo.gl/3u36hYXEZQSNtV2p6">
              <LocationPin /> Como chegar no nosso centro.
            </a>
          </div>
        </div>
        <div className="absolute bottom-0 w-full h-8 z-10 bg-gradient-to-t from-[#192C07] to-[#3C3C3C1A]" />
      </div>
    </section>
  );
}

export default Hero;
