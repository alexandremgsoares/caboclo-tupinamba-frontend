import { useState } from "react";
import CalendarIconWithDate from "./CalendarDate";
import { NavigateNext, NavigateBefore } from "@mui/icons-material";
import type { Gira } from "../Pages/Home";

type Mes = 1 | 2 | 3 | 4 | 5 | 6 | 7 | 8 | 9 | 10 | 11 | 12;

function Calendario(giras: { giras: Gira[] }) {
  const [mesAtual, setMesAtual] = useState<Mes>(
    (new Date().getMonth() + 1) as Mes
  );
  const [anoAtual, setAnoAtual] = useState<number>(new Date().getFullYear());

  const meses: string[] = [
    "",
    "Janeiro",
    "Fevereiro",
    "Março",
    "Abril",
    "Maio",
    "Junho",
    "Julho",
    "Agosto",
    "Setembro",
    "Outubro",
    "Novembro",
    "Dezembro",
  ];

  const girasDoMes = giras.giras.filter(
    (gira) => gira.monthIndex === mesAtual && gira.year === anoAtual
  );

  function handleNextMonth(): void {
    if (mesAtual === 12) {
      setMesAtual(1 as Mes);
      setAnoAtual(prev => prev + 1);
    } else {
      setMesAtual((prev) => (prev + 1) as Mes);
    }
  }

  function handlePreviousMonth(): void {
    if (mesAtual === 1) {
      setMesAtual(12 as Mes);
      setAnoAtual(prev => prev - 1);
    } else {
      setMesAtual((prev) => (prev - 1) as Mes);
    }
  }

  return (
    <div className="flex flex-col gap-4">
      <div className="flex justify-between items-center text-branco text-2xl">
        <button onClick={handlePreviousMonth}>
          <NavigateBefore
            sx={{
              width: 48,
              height: 48,
              backgroundColor: "#2D3E0C",
              color: "#fff",
              textAlign: "center",
              py: 0.5,
              borderRadius: "8px",
            }}
          />
        </button>
        <h2>{meses[mesAtual]} {anoAtual}</h2>
        <button onClick={handleNextMonth}>
          <NavigateNext
            sx={{
              width: 48,
              height: 48,
              backgroundColor: "#2D3E0C",
              color: "#fff",
              textAlign: "center",
              p: 0.5,
              borderRadius: "8px",
            }}
          />
        </button>
      </div>
      {girasDoMes.length === 0 ? (
        <p className="text-2xl text-verde-claro h-80 max-w-96">
          O calendário desse mês será divulgado em breve.
        </p>
      ) : (
        girasDoMes.map((gira, index) => (
          <div
            key={index}
            className="flex flex-row items-center gap-4 border-2 rounded-[10px] border-verde pr-2">
            <CalendarIconWithDate
              day={gira.day}
              month={gira.month.slice(0, 3).toUpperCase()}
            />
            <div>
              <p className="text-branco text-xl">{gira.titulo}</p>
              <p className="text-branco/80">
                19:30 - {gira.day} de {gira.month} de {gira.year}
              </p>
            </div>
          </div>
        ))
      )}
    </div>
  );
}

export default Calendario;
