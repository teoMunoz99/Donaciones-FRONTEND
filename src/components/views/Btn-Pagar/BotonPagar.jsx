import React from "react";
import "./BotonPagar.css";
import Button from 'react-bootstrap/Button';

const BotonPagar = () => {
  return (
    <div className="my-3">
        <Button variant="danger" className="btn-pagar rounded-pill">Donar Ahora!</Button>
    </div>
  );
};

export default BotonPagar;
