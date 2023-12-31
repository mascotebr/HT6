import useResponsive from "@/utils/responsive";
import { Card } from "./card";

export function Testimonials() {
  return (
    <div>
      <h2 className="title" style={{ fontSize: useResponsive() == 'desktop' ? 48 : 24 }}>
        Comentários de alunas
      </h2>
      <div style={{ height: 64 }} />
      <div className="container">

        <div className="row">
          <div className="col-md-4 d-flex justify-content-center" style={{marginBottom: 64}}>
            <Card
              name="Camila Jordana"
              image="/photos/camila.png"
              testimonial="André é sensacional, mas precisa de foco. Perdi 6 kg em 11 dias."
              stars={5}
            />
          </div>

          <div className="col-md-4 d-flex justify-content-center" style={{marginBottom: 64}}>
            <Card
              name="Karen Martins"
              image="/photos/karen.png"
              testimonial="Sempre detestei academia, perder medida em casa não tem preço kkk"
              stars={4}
            />
          </div>
          
          <div className="col-md-4 d-flex justify-content-center">
            <Card
              name="Dayanna Kaltner"
              image="/photos/dayana.png"
              testimonial="Queria perder barriga (tinha pouca) e o André conseguiu me ajudar mesmo eu sendo preguiçosa hahaha"
              stars={5}
            />
          </div>
        </div>
      </div>
      <div style={{ height:   useResponsive() == 'desktop' ? 64 : 24 }} />
    </div>
  );
}
