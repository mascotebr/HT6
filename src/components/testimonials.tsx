import { Card } from "./card";

export function Testimonials() {
  return (
    <div>
      <h2 className="title" style={{ fontSize: 48 }}>
        Comentários de alunas
      </h2>
      <div style={{ height: 64 }} />
      <div className="container">

        <div className="row">
          <div className="col-4 d-flex justify-content-center">
            <Card
              name="Camila Jordana"
              image="/photos/camila.png"
              testimonial="André é sensacional, mas precisa de foco. Perdi 6 kg em 11 dias."
              stars={5}
            />
          </div>
          <div className="col-4 d-flex justify-content-center">
            <Card
              name="Karen Martins"
              image="/photos/karen.png"
              testimonial="Sempre detestei academia, perder medida em casa não tem preço kkk"
              stars={4}
            />
          </div>
          <div className="col-4 d-flex justify-content-center">
            <Card
              name="Dayanna Kaltner"
              image="/photos/dayana.png"
              testimonial="Queria perder barriga (tinha pouca) e o André conseguiu me ajudar mesmo eu sendo preguiçosa hahaha"
              stars={5}
            />
          </div>
        </div>
      </div>
      <div style={{ height: 64 }} />
    </div>
  );
}
