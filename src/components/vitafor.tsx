import Image from "next/image";

export function Vitafor() {
  return (
    <div>
      <h2 className="title" style={{ fontSize: 48, lineHeight: 1 }}>
        Kit exclusivo de emagrecimento VITAFOR<br />
        totalmente <span className="free">GRATÍS</span>
      </h2>
      <div style={{ height: 16 }} />
      <div className="container">
        <p className="text-white text-center" >
          Os 30 Primeiros compradores ganharão um KIT da<br />Patrocinadora Oficial do HT6: VITAFOR
        </p>
      </div>
      <div style={{ height: 32 }} />
      <div
        className="d-flex justify-content-center w-100">
        <Image src={'/vitafor-photo.png'} width={400} height={483} alt="kits vitafor"  />
        <Image
          src={'/logos/vitafor.png'}
          width={85}
          height={85}
          alt={'logo vitafor'}
          className="photo-card"
          style={{ transform: 'TranslateY(-42.5px)',position: 'absolute' }}
        />
      </div>
      <div style={{ height: 32 }} />
    </div>
  );
}
