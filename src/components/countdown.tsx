import { useCountdown } from "@/utils/useCountdown";

export function Countdown() {
  const [days, hours, minutes, seconds] = useCountdown(new Date(2024, 0, 10));
  return (
    <div>
      <h2 className="title">Vendas se encerram em:</h2>
      <div className="countdown">
        <span className="title text-black" suppressHydrationWarning>{`${days} dias e ${hours} : ${minutes} : ${seconds} `}</span>
      </div>
      <div className="ht6-hr" />
      <div style={{ height: 16 }} />
      <h2 className="title">Inicio:</h2>
      <div className="countdown">
        <span className="title text-black">15 de Janeiro de 2024</span>
      </div>
      <div className="ht6-hr" />
    </div>
  );
}
