import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Search from "../views/Searchs/Search";
import BtnVolver from "../common/bntVoler/BtnVolver";
import Categorias from "../views/Categoria/Categorias";
import CardCausa from "../views/Card-causa/CardCausa";
import {Container} from "react-bootstrap";

const Home = () => {
  return (
    <div className="body-home">
      <BtnVolver></BtnVolver>
      <Search></Search>
      <Categorias></Categorias>
      <br />
      <Container className="d-flex justify-content-center">
        <CardCausa></CardCausa>
      </Container>
    </div>
  );
};

export default Home;
