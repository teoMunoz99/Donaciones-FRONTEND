import React, { useState } from "react";
import "./DetallesCausa.css";
import { Container } from "react-bootstrap";
import BtnVolver from "../common/bntVoler/BtnVolver";
import BotonPagar from "../views/Btn-Pagar/BotonPagar";
import Button from "react-bootstrap/Button";

const parrafoStyle = {
    WebkitLineClamp: 3,
    WebkitBoxOrient: 'vertical',
    overflow: 'hidden',
    display: '-webkit-box',
}

const DetallesCausa = () => {

  const [mostrar, setMostrar] = useState(false);

  return (
    <div className="body-detalles">
      <BtnVolver></BtnVolver>
      <Container className="flex-grow-1">
        <figure className="mt-4">
          <img
            src="https://media.a24.com/p/b7ca34dcd17043fe5bb6529d5d4f3ca8/adjuntos/296/imagenes/007/958/0007958515/1200x675/smart/adopcion-perros-que-debo-tener-cuenta.jpeg"
            alt=""
            className="img-detalle object-fit-cover"
          />
        </figure>
        <section className="ms-2">
          <article className="ms-2">
            <h1 className="fw-bold ms-2">¡Ayuda a Manchitas!</h1>
            <p className="text-secondary" style={mostrar ? null : parrafoStyle}>
              Manchitas es un perrito en adopción que está luchando contra una
              enfermedad, pero su espíritu inquebrantable y amoroso nos inspira
              todos los días. Tu generosa donación puede marcar la diferencia en
              su vida, brindándole los tratamientos médicos que necesita y la
              oportunidad de encontrar un hogar amoroso que lo cuide para
              siempre.
            </p>
            <div className="d-flex justify-content-end">
              <a href="#" className="text-decoration-none" onClick={()=> setMostrar(!mostrar)}>{!mostrar ? 'Ver menos...' : 'Ver más...'}
              </a>
            </div>
          </article>
          <article>
            <h5>Elegir monto</h5>
            <div className="d-flex justify-content-around">
              <Button variant="outline-secondary" className="btn-monto">
                $50
              </Button>
              <Button variant="outline-secondary" className="btn-monto">
                $100
              </Button>
              <Button variant="outline-secondary" className="btn-monto">
                $500
              </Button>
            </div>
          </article>
          <article className="d-flex justify-content-end mx-2">
            <div>
              <h6>Total recaudado:</h6>
              <div className="fw-bold">$3456.08</div>
            </div>
          </article>
        </section>
        <BotonPagar></BotonPagar>
      </Container>
    </div>
  );
};

export default DetallesCausa;
