import "bootstrap/dist/css/bootstrap.min.css";
import "./Inicio.css";
import { Container } from "react-bootstrap";
import Options from "../views/Options";

const Inicio = () => {
  return (
    <div className="contenedor-inicio">
        <section className="d-flex flex-column align-items-center text-center contenedor-texto-img">
          <figure id="bannerPrincipal">
            <img
              src="https://img.freepik.com/vector-gratis/personas-planas-mascotas-ilustradas_23-2148983750.jpg?t=st=1691449545~exp=1691450145~hmac=026b7308924df6cd095fb0ac907bff825f3c34ee3c1b028c7547c848e883e37b"
              alt=""
            />
          </figure>
          <h1 className="fw-bold text-light">Cambia vidas con un gesto, dona con el corazón</h1>
          <p className="text-light tamanio-letra">
            Cada donación que realizas es un paso hacia un mundo mejor. Tu
            generosidad se convierte en esperanza, en sonrisas que se
            multiplican y en oportunidades que se hacen realidad.
          </p>
        </section>
      <Options></Options>
    </div>
  );
};

export default Inicio;
