import Image from "next/image";

export function Card({
  image,
  name,
  testimonial,
  stars,
}: {
  image: string;
  name: string;
  testimonial: string;
  stars: number;
}) {
  return (
    <div className="ht6-card">
      <center>
        <Image
          src={image}
          width={85}
          height={85}
          alt={name}
          className="photo-card"
        />
      </center>
      <div>
        <div style={{ position: 'absolute', transform: `Translate(${stars == 5 ? '100px' : '108px'},100px)` }}>
          <Image src={"/star.png"} width={15} height={15} alt="Star" />
          <Image src={"/star.png"} width={15} height={15} alt="Star" className="ms-1" />
          <Image src={"/star.png"} width={15} height={15} alt="Star" className="ms-1" />
          <Image src={"/star.png"} width={15} height={15} alt="Star" className="ms-1" />

          {stars == 5 ? (
            <Image src={"/star.png"} width={15} height={15} alt="Star" className="ms-1" />
          ) : (
            <div></div>
          )}
        </div>
      </div>
      <div className="px-4" style={{ transform: "TranslateY(-28px)" }}>
        <h3>{name}</h3>
        <p
          className="text-white text-center "
          style={{ fontSize: 12, transform: "TranslateY(-8px)" }}
        >
          Aluna
        </p>
        <p className="text-white text-center" style={{ fontSize: 12 }}>
          {testimonial}
        </p>

      </div>

    </div>

  );
}
