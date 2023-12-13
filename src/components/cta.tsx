import Link from "next/link";
export function CTA() {
  return (
    <div className="p-2" style={{backgroundColor: 'var(--secondary-dark)', height: 121}}>
    <center>
        <p className="text-white p-0 m-2">Eae Animou? Não perca mais tempo</p>
        <Link href={"https://pay.kiwify.com.br/BFKJu73"}>Garanta sua vaga agora!</Link>
      </center>
    </div>
  );
}
