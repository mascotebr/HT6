import { Card } from "./card";

export function Testimonials() {
  return (
    <div>
      <div style={{ height: 16 }} />
      <h2 className="title" style={{ fontSize: 48 }}>
        Comentários de alunas
      </h2>
      <div style={{ height: 48 }} />
      <div className="row">
        <div className="col-4 d-flex justify-content-center">
          <Card
            name="Camila Jordana"
            image="/photos/camila.png"
            testimonial="André é sensacional, mas precisa de foco. Perdi 6 kg em 11 dias."
            stars={5}
          />
        </div>
        <div className="col-4 d-flex justify-content-center"></div>
        <div className="col-4 d-flex justify-content-center"></div>
      </div>
    </div>
  );
}
