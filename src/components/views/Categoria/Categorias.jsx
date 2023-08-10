import React from "react";
import "./Categorias.css";
import { Container } from "react-bootstrap";
import { FaHandHoldingMedical, FaDonate } from "react-icons/fa";
import { HiViewGrid } from "react-icons/hi";
import { GiKnifeFork } from "react-icons/gi";

const Categorias = () => {
  return (
    <Container>
      <section className="d-flex justify-content-evenly">
        <a className="btn-categorias">
          <FaHandHoldingMedical />
        </a>
        <a className="btn-categorias"> 
          <GiKnifeFork />
        </a>
        <a className="btn-categorias">
          <FaDonate />
        </a>
        <a className="btn-categorias">
          <HiViewGrid />
        </a>
      </section>
    </Container>
  );
};

export default Categorias;
