import "bootstrap/dist/css/bootstrap.min.css";
import "./Home.css";
import Search from "../views/Searchs/Search";
import { NavLink } from "react-router-dom";

const Home = () => {
  return (
    <div className="body-home">
      <section>
        <NavLink to="*" className="text-decoration-none text-dark">
          <figure className="figure">
            <img
              src="https://cdn2.iconfinder.com/data/icons/charity-37/512/Charity_37-256.png"
              alt=""
              className="img"
            />
          </figure>
        </NavLink>
      </section>
      <Search></Search>
    </div>
  );
};

export default Home;
