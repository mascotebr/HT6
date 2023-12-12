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
          <source
            src={
              "https://rr3---sn-bg07dnr7.c.drive.google.com/videoplayback?expire=1702222289&ei=oa91ZYP9FPDCu7APst2s0A4&ip=2804:7f0:6881:800c:d4ff:a6d5:408b:1774&id=a92a206e94021a32&itag=18&source=webdrive&requiressl=yes&xpc=EghonaK1InoBAQ==&mh=ZL&mm=32&mn=sn-bg07dnr7&ms=su&mv=m&mvi=3&pl=49&ttl=transient&susc=dr&driveid=1jdbwZk-XeZnjsMFkgY5OnxNQ7RkcdGrH&app=explorer&eaua=FTDT55VMUMM&mime=video/mp4&vprv=1&prv=1&dur=280.427&lmt=1700522017152729&mt=1702211081&subapp=DRIVE_WEB_FILE_VIEWER&txp=0001224&sparams=expire,ei,ip,id,itag,source,requiressl,xpc,ttl,susc,driveid,app,eaua,mime,vprv,prv,dur,lmt&sig=AJfQdSswRQIhANX-M8o4UmGa5QWz-3yNG5xtYASUFdMATAYwoVAENTZNAiBlYwBtwuc2f927hQTV4SmBfQCExmXgtIRqBbiX3BmqfQ==&lsparams=mh,mm,mn,ms,mv,mvi,pl&lsig=AAO5W4owRQIgJh_TrdtUe8NoSV-JYJF3Bih5pqEmUA52uQvFe_0LFioCIQD-Ym3JSXc0VJ4JaadFE6gLVmK5vPd2JisBAMh5jmjGBg==&cpn=Nz-HSMfQ7-JiFd4f&c=WEB_EMBEDDED_PLAYER&cver=1.20231205.01.00"
            }
            type="video/mp4"
          />
        </video>
      </center>
      <div style={{ height: 200 }} />
    </div>
  );
}
