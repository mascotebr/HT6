import Image from "next/image";
import Link from "next/link";
export function Banner() {
  return (
    <div className="banner">
      <h1 className="title">
        Comece o ano mudando
        <br />
        de vida com o HT6
      </h1>

      <div className="row p-4">
        <div className="col-6 d-flex justify-content-center">
          <Image
            width={186}
            height={186}
            src={"/photo.png"}
            alt="Persolnal Trainer"
          />
          <div style={{ marginLeft: 16, transform: "TranslateY(30%)" }}>
            <p className="text-white" style={{ lineHeight: "0px" }}>
              Personal Rrainer
            </p>
            <h2
              className="title"
              style={{ fontSize: "24px", lineHeight: "0px", textAlign: "left" }}
            >
              André Felipe Pastor Garcia
            </h2>
            <div className="d-flex pt-2">
              <Image
                width={35}
                height={38}
                src={"/icon_weight.png"}
                alt="Peso"
              />
              <span className="text-white ps-2" style={{ lineHeight: "20px" }}>
                Personal trainer e atleta fitness
                <br />
                com 14 anos na area
              </span>
            </div>
          </div>
        </div>
        <div className="col-6 d-flex justify-content-center">
          <span
            className="text-white"
            style={{ fontSize: 24, transform: "TranslateY(30%)" }}
          >
            “O melhor <b>treino</b> pra você
            <br />
            iniciar seu ano com tudo!”
          </span>
        </div>
      </div>
      <center>
        <p className="text-white p-0 m-2">Eae começa quanto?</p>
        <Link href={"https://pay.kiwify.com.br/BFKJu73"}>Bora marcar!</Link>
      </center>

      <center
        className="d-flex justify-content-center w-100"
        style={{
          position: "absolute",
        }}
      >
        <video width="714" height="399" controls>
          <source src={"/principal.mp4"} type="video/mp4" />
        </video>
      </center>
      <div style={{ height: 200 }} />
    </div>
  );
}
