import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Options.css";
import { NavLink } from "react-router-dom";

const Options = () => {
  return (
    <Container className="contenedor-opciones">
      <h6 className="text-center m-3 fw-bold padding-titulo">
        Elegí una categoría
      </h6>
        <Row className="row-cols-3">
          <Col className="col">
            <NavLink to="*" className="text-decoration-none text-dark">
              <figure className="btn-tamanio">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/charity-37/512/Charity_37-256.png"
                  alt="Medicamentos"
                  className="img-fluid"
                />
              </figure>
              <p className="fw-semibold text-center">Fármacos</p>
            </NavLink>
          </Col>
          <Col className="col">
            <NavLink to="*" className="text-decoration-none text-dark">
              <figure className="btn-tamanio">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/charity-37/512/Charity_6-512.png"
                  alt="Alimentos"
                  className="img-fluid"
                />
              </figure>
              <p className="fw-semibold text-center">Alimentos</p>
            </NavLink>
          </Col>
          <Col className="col">
            <NavLink to="/Home" className="text-decoration-none text-dark">
              <figure className="btn-tamanio">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/charity-37/512/Charity_10-512.png"
                  alt="Donar"
                  className="img-fluid"
                />
              </figure>
              <p className="fw-semibold text-center">Donar</p>
            </NavLink>
          </Col>
        </Row>
    </Container>
  );
};

export default Options;
