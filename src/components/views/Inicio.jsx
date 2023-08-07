import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "./Inicio.css";
import { Container } from "react-bootstrap";

const Inicio = () => {
  return (
    <>
      <Container>
        <section>
          <figure id="bannerPrincipal">
            <img
              src="https://img.freepik.com/vector-gratis/personas-planas-mascotas-ilustradas_23-2148983750.jpg?t=st=1691449545~exp=1691450145~hmac=026b7308924df6cd095fb0ac907bff825f3c34ee3c1b028c7547c848e883e37b"
              alt=""
            />
          </figure>
          <h1>Cambia vidas con un gesto, dona con el corazón</h1>
          <p>
            Cada donación que realizas es un paso hacia un mundo mejor. Tu
            generosidad se convierte en esperanza, en sonrisas que se
            multiplican y en oportunidades que se hacen realidad. Únete a
            nosotros en este viaje de transformación, donde juntos marcamos la
            diferencia. Cada contribución cuenta y juntos creamos un impacto
            perdurable en las vidas que tocamos. ¡Dona hoy y sé parte del cambio
            positivo que nuestro mundo necesita!
          </p>
        </section>
      </Container>
    </>
  );
};

export default Inicio;
