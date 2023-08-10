import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import "./CardCausa.css"

const CardCausa = () => {
  return (
    <Card style={{ width: "90%", borderRadius: "1.5rem"}}>
      <Card.Img
        variant="top"
        src="https://media.a24.com/p/b7ca34dcd17043fe5bb6529d5d4f3ca8/adjuntos/296/imagenes/007/958/0007958515/1200x675/smart/adopcion-perros-que-debo-tener-cuenta.jpeg"
        style={{ objectFit: "cover", height: "12rem", borderRadius: "1.5rem 1.5rem 0 0" }}
      />
      <Card.Body>
        <Card.Title>Card Title</Card.Title>
        <Card.Text>
          Some quick example text to build on the card title and make up the
          bulk of the card's content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  );
};

export default CardCausa;
