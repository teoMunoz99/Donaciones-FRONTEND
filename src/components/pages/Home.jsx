import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Search from "../views/Searchs/Search";
import BtnVolver from "../common/bntVoler/BtnVolver";
import Categorias from "../views/Categoria/Categorias";


const Home = () => {
  return (
    <div className="body-home">
      <BtnVolver></BtnVolver>
      <Search></Search>
      <Categorias></Categorias>
    </div>
  );
};

export default Home;
