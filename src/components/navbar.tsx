import Image from "next/image";

export function Navbar() {
  return (
    <center className="ht6-navbar w-100">
      <Image
        width={192}
        height={52}
        src={"/logo_horizontal.png"}
        alt="André Felipe"
      />
    </center>
  );
}
