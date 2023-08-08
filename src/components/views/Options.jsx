import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Options.css";

const Options = () => {
  return (
    <div className="contenedor-opciones">
      <h6 className="text-center m-3 fw-bold">Elije una categoría</h6>
      <Container>
        <Row className="text-center">
          <Col>
            <a href="#" className="text-decoration-none text-dark">
              <figure className="figure">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/charity-37/512/Charity_37-256.png"
                  alt="Medicamentos" className="img"
                />
              </figure>
              <p className="fw-semibold">Medicamentos</p>
            </a>
          </Col>
          <Col>
            <a href="#" className="text-decoration-none text-dark">
              <figure className="figure">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/charity-37/512/Charity_6-512.png"
                  alt="Alimentos" className="img"
                />
              </figure>
              <p className="fw-semibold">Alimentos</p>
            </a>
          </Col>
          <Col>
            <a href="#" className="text-decoration-none text-dark">
              <figure className="figure">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/charity-37/512/Charity_10-512.png"
                  alt="Donar" className="img"
                />
              </figure>
              <p className="fw-semibold">Donar</p>
            </a>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Options;
