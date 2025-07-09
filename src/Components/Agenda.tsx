import Calendario from "./Calendario";
function Agenda() {
  return (
    <section
      id="calendario"
      className="flex flex-col md:flex-row items-center max-w-7xl mx-auto gap-8 py-16">
      <div className="flex flex-col items-end md:max-w-1/2">
        <h1 className="font-bold text-6xl text-center md:text-end text-branco px-4 ">
          Confira a nossa agenda{" "}
        </h1>
        <p className="mt-4 text-2xl text-center md:text-end text-branco px-4">
          Nossas gíras acontecem as terças feiras, sempre as 19:30h.
        </p>
      </div>
      <Calendario></Calendario>
    </section>
  );
}

export default Agenda;
