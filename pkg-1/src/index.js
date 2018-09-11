import React from "react";
import ReactDOM from "react-dom";

import App from "./component/App";
import { BoaNoite, BoaTarde } from "./component/Multiple";
import SaudacaoClass from "./component/SaudacaoClass";
import Father from "./component/Father";


// const element = <h1>PKG-1</h1>

ReactDOM.render(
  <div>
    <Father nome="Rafael" snome="Carvalho Caetano"/>
  </div>,

  document.getElementById("root")
);
