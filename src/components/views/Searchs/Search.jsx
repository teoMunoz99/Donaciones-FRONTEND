import "./Search.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import { Form, FormControl, Button, Container } from "react-bootstrap";

const Browser = () => {
  return (
    <Container>
      <Form className="d-flex my-4 barra-busqueda">
        <FormControl type="text" placeholder="Buscar" className="mr-sm-2" />
        <Button variant="outline-success">Buscar</Button>
      </Form>
    </Container>
  );
};

export default Browser;
