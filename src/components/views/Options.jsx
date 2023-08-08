import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import './Options.css';

const Options = () => {
  return (
    <div>
      <Container className="opciones-container">
        <Row className="text-center">
          <Col>
            <div className="opcion">
              <img
                src="https://cdn2.iconfinder.com/data/icons/charity-37/512/Charity_37-256.png"
                alt="Medicamentos"
                className="opcion-imagen"
              />
              <p className="opcion-nombre">Medicamentos</p>
            </div>
          </Col>
          <Col>
            <div className="opcion">
              <img
                src="https://cdn2.iconfinder.com/data/icons/charity-37/512/Charity_6-512.png"
                alt="Alimentos"
                className="opcion-imagen"
              />
              <p className="opcion-nombre">Alimentos</p>
            </div>
          </Col>
          <Col>
            <div className="opcion">
              <img
                src="https://cdn2.iconfinder.com/data/icons/charity-37/512/Charity_10-512.png"
                alt="Donar"
                className="opcion-imagen"
              />
              <p className="opcion-nombre">Donar</p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Options;
