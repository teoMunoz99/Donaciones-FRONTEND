import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Options.css";

const Options = () => {
  return (
    <div className="contenedor-opciones">
      <h6 className="text-center">Elije una categoría</h6>
      <Container>
        <Row className="text-center">
          <Col>
            <div>
              <img
                src="https://cdn2.iconfinder.com/data/icons/charity-37/512/Charity_37-256.png"
                alt="Medicamentos"
              />
              <p>Medicamentos</p>
            </div>
          </Col>
          <Col>
            <div>
              <img
                src="https://cdn2.iconfinder.com/data/icons/charity-37/512/Charity_6-512.png"
                alt="Alimentos"
              />
              <p>Alimentos</p>
            </div>
          </Col>
          <Col>
            <div>
              <img
                src="https://cdn2.iconfinder.com/data/icons/charity-37/512/Charity_10-512.png"
                alt="Donar"
              />
              <p>Donar</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Options;
