import Image from "next/image";

export function Navbar() {
  return (
    <center className="ht6-navbar w-100">
      <Image
        width={159}
        height={44}
        src={"/logo_horizontal.png"}
        alt="André Felipe"
      />
    </center>
  );
}
