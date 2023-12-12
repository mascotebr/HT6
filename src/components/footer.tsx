import Image from "next/image";
import Link from "next/link";
export function Footer() {
  return (
    <div className="conatiner p-4" style={{ backgroundColor: '#000' }}>
      <div className="row d-flex justify-content-center">
        <div className="col-md-3">
          <p className="title text-white m-0 p-0" style={{ fontSize: 16 }}>Minhas redes sociais</p>
          <center>
            <Link className="icon" href={'https://www.instagram.com/andrefepg'} target="_blank">
              <Image src={'/logos/instagram.png'} height={21} width={21} alt="Instagram" />
            </Link>
          </center>
        </div>
        <div className="mt-2" />
        <div className="col-md-3">
          <p className="title text-white m-0 p-0" style={{ fontSize: 16 }}>Parceiros</p>
          <div className="d-flex justify-content-center">

            <Image
              src={'/logos/vitafor.png'}
              width={59}
              height={59}
              alt={'logo vitafor'}
            />
            <div className="m-2" />
            <Image
              src={'/logos/unicorp.png'}
              width={100}
              height={47}
              alt={'logo unicorp'}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
