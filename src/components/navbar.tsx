import useResponsive from "@/utils/responsive";
import Image from "next/image";

export function Navbar() {
  return (
    <center className="ht6-navbar w-100">
      <Image
        width={useResponsive() == 'desktop' ? 159 : 61 }
        height={useResponsive() == 'desktop' ?  44 : 18 }
        src={"/logo_horizontal.png"}
        alt="André Felipe"
      />
    </center>
  );
}
