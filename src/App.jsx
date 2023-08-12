import Home from "./components/pages/Inicio/Home";
import Welcome from "./components/pages/Bienvenida/Welcome";
import Error404 from "./components/pages/Error404/Error404";
import DetallesCausa from "./components/pages/Detalles/DetallesCausa";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Welcome />} />
        <Route path="/Home" element={<Home />} />
        <Route path="/Detalles" element={<DetallesCausa />} />
        <Route path="*" element={<Error404 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
