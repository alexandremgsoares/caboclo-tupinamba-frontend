import CalendarIconWithDate from "./CalendarDate";
import { giras } from "./giras";

function Calendario() {
  return (
    <div className="flex flex-col gap-4">
      {giras.map((gira, index) => (
        <div
          key={index}
          className="flex flex-row items-center gap-4 border-2 rounded-[10px] border-verde pr-2">
          <CalendarIconWithDate day={gira.day} month={gira.month} />
          <div>
            <p className="text-branco text-xl">{gira.titulo}</p>
            <p className="text-branco/80">
              19:30 - {gira.day} de {gira.monthFull} de 2025
            </p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default Calendario;
