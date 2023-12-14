import useResponsive from "@/utils/responsive";
import Image from "next/image";
import Link from "next/link";
import { Button } from "react-bootstrap";
export function Banner({ open }: any) {

  const video = () => {
    return <center
      className="d-flex justify-content-center w-100"
      style={{
        position: useResponsive() == 'desktop' ? "absolute" : 'relative',
      }}
    >
      <iframe width={useResponsive() == 'desktop' ? 714 : 259} height="399" src="https://www.youtube.com/embed/zxJGsQCqkOc?autoplay=0&showinfo=0&controls=0&iv_load_policy=3&rel=0" title="Projeto HT6" ></iframe>
    </center>;
  }
  return (
    <div className="banner">
      <h1 className="title">
        Comece o ano mudando
        <br />
        de vida com o  <Image
          width={useResponsive() == 'desktop' ? 159 : 61}
          height={useResponsive() == 'desktop' ? 44 : 18}
          src={"/logo_horizontal.png"}
          alt="André Felipe"
        />
      </h1>
      {useResponsive() == 'mobile' ? video() : <></>}
      {useResponsive() == 'desktop' ? <></> : <div className="m-4"></div>}
      <div className="container">

        <div className="row ">
          <div className="col-md-6 d-flex justify-content-center">
            <Image
              width={useResponsive() == 'desktop' ? 186 : 90}
              height={useResponsive() == 'desktop' ? 186 : 90}
              src={"/photo.png"}
              alt="Persolnal Trainer"
            />
            <div style={{ marginLeft: 16, transform: useResponsive() == 'desktop' ? "TranslateY(30%)" : "TranslateY(15%)" }}>
              <p className="text-white" style={{ lineHeight: 0, fontSize: useResponsive() == 'desktop' ? 16 : 12 }}>
                Personal Rrainer
              </p>
              <h2
                className="title p-0"
                style={{ fontSize: useResponsive() == 'desktop' ? 24 : 16, lineHeight: 0, textAlign: "left" }}
              >
                André Felipe Pastor Garcia
              </h2>
              <div className="d-flex pt-2">
                <Image
                  width={useResponsive() == 'desktop' ? 35 : 25}
                  height={useResponsive() == 'desktop' ? 38 : 30}
                  src={"/icon_weight.png"}
                  alt="Peso"
                />
                <span className="text-white ps-2" style={{ lineHeight: useResponsive() == 'desktop' ? '20px' : '16px', fontSize: useResponsive() == 'desktop' ? 16 : 12 }}>
                  Personal trainer e atleta fitness
                  <br />
                  com 14 anos na area
                </span>
              </div>
            </div>
          </div>
          {useResponsive() == 'desktop' ? <div className="col-md-6 d-flex justify-content-center">
            <span
              className="text-white"
              style={{ fontSize: 24, transform: "TranslateY(30%)" }}
            >
              “O melhor <b>treino</b> pra você
              <br />
              iniciar seu ano com tudo!”
            </span>
          </div> : <></>}

        </div>
      </div>

      <center>
        <p className="text-white p-0 m-2">Venha fazer parte</p>
        <div className="button-ht6" onClick={() => open(true)}>Garanta sua vaga agora!</div>
      </center>
      {useResponsive() == 'desktop' ? <>
        {video()}
        <div style={{ height: 200 }} />
      </>
        : <></>}


    </div>
  );
}
