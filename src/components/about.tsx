import useResponsive from "@/utils/responsive";
import Image from "next/image";

export function About() {
  return (
    <div>
      <div style={{ height: 24 }} />
      <h2 className="title" style={{ fontSize: useResponsive() == 'desktop' ? 48 : 28 }}>
        Sobre o treino <Image
          width={useResponsive() == 'desktop' ? 129 : 98}
          height={useResponsive() == 'desktop' ? 37 : 28}
          src={"/logo_horizontal.png"}
          alt="André Felipe"
        />
      </h2>
      <div style={{ height: 8 }} />
      <p className="text-white text-center mx-4">
        Um programa de emagrecimento testado e aprovado. <br /> Duração de
        apenas 42 dias, com treinos de 15 a 25 minutos diários, e o melhor,
        <br />
        no conforto da sua casa. Não perca a chance de mudar seu corpo HOJE.
        <br />
        <b>*vagas limitadas*</b>
      </p>
    </div>
  );
}
