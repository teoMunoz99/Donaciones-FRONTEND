import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CardCausa.css";
import ProgressBar from "react-bootstrap/ProgressBar";
import { NavLink } from "react-router-dom";

const CardCausa = () => {
  return (
    <Card style={{ width: "90%", borderRadius: "1.5rem" }}>
      <Card.Img
        variant="top"
        src="https://media.a24.com/p/b7ca34dcd17043fe5bb6529d5d4f3ca8/adjuntos/296/imagenes/007/958/0007958515/1200x675/smart/adopcion-perros-que-debo-tener-cuenta.jpeg"
        style={{
          objectFit: "cover",
          height: "12rem",
          borderRadius: "1.5rem 1.5rem 0 0",
        }}
      />
      <Card.Body>
        <Card.Title>¡Ayuda a Manchitas!</Card.Title>
        <Card.Text
          className="texto-card"
          style={{ maxHeight: "5.5rem", overflow: "hidden" }}
        >
          Manchitas es un perrito en adopción que está luchando contra una
          enfermedad, pero su espíritu inquebrantable y amoroso nos inspira
          todos los días. Tu generosa donación puede marcar la diferencia en su
          vida, brindándole los tratamientos médicos que necesita y la
          oportunidad de encontrar un hogar amoroso que lo cuide para siempre.
        </Card.Text>
        <section className="">
          <h6 className="mb-1">Meta:</h6>
          <ProgressBar now={30} label={`${30}%`} />
        </section>
        <NavLink to="/Detalles">
          <Button variant="primary" className="mt-3">
            Donar Ahora!
          </Button>
        </NavLink>
      </Card.Body>
    </Card>
  );
};

export default CardCausa;
