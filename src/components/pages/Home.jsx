import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Search from "../views/Searchs/Search";
import BtnVolver from "../common/bntVoler/BtnVolver";


const Home = () => {
  return (
    <div className="body-home">
      <BtnVolver></BtnVolver>
      <Search></Search>
    </div>
  );
};

export default Home;
