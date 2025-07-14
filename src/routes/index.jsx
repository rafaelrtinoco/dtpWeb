import { Fragment } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "../pages/Home/Home";
import Singin from "../pages/Singin/Singin";
import Singup from "../pages/Singup/Singup";

const Private = ({ Item }) => {
  const signed = true;

  return signed > 0 ? <Item /> : <Singin />;
};

const RouteApp = () => {
  return (
    <BrowserRouter>
      <Fragment>
        <Routes>
          <Route exact path="/home" element={<Private Item={Home} />} />
          <Route path="/" element={<Singin />} />
          <Route exact path="/singup" element={<Singup />} />
          <Route path="*" element={<Singin />} />
        </Routes>
      </Fragment>
    </BrowserRouter>
  );
};

export default RouteApp;
