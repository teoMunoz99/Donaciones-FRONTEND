import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Options.css";
import { NavLink } from "react-router-dom";

const Options = () => {
  return (
    <div className="contenedor-opciones">
      <h6 className="text-center m-3 fw-bold padding-titulo">Elegí una categoría</h6>
      <Container>
        <Row className="text-center px-3">
          <Col className="btn-div">
            <NavLink to="*" className="text-decoration-none text-dark">
              <figure className="figure">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/charity-37/512/Charity_37-256.png"
                  alt="Medicamentos" className="img"
                />
              </figure>
              <p className="fw-semibold">Medicamentos</p>
            </NavLink>
          </Col>
          <Col className="btn-div">
            <NavLink to="*" className="text-decoration-none text-dark">
              <figure className="figure">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/charity-37/512/Charity_6-512.png"
                  alt="Alimentos" className="img"
                />
              </figure>
              <p className="fw-semibold">Alimentos</p>
            </NavLink>
          </Col>
          <Col className="btn-div">
            <NavLink to="/Home" className="text-decoration-none text-dark">
              <figure className="figure">
                <img
                  src="https://cdn2.iconfinder.com/data/icons/charity-37/512/Charity_10-512.png"
                  alt="Donar" className="img"
                />
              </figure>
              <p className="fw-semibold">Donar</p>
            </NavLink>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Options;
