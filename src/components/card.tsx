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

      <div className="px-5" style={{ transform: "TranslateY(-28px)" }}>
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
        <center>
          <Image src={"/star.png"} width={15} height={15} alt="Star" className="margin-1" />
          <Image src={"/star.png"} width={15} height={15} alt="Star" />
          <Image src={"/star.png"} width={15} height={15} alt="Star" />
          <Image src={"/star.png"} width={15} height={15} alt="Star" />

          {stars == 5 ? (
            <Image src={"/star.png"} width={15} height={15} alt="Star" />
          ) : (
            <div></div>
          )}
        </center>
      </div>
    </div>
  );
}
