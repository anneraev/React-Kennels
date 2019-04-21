import ReactDom from "react-dom";
import React from "react"; //React must be in scope when using JSX.
import Kennel from "./components/Kennel/Kennel"//import Kennel to render it.

//First argument: Kennel class JSX object. Second argument: Callback function as a reference to the DOM element beint written to.
ReactDom.render(<Kennel />, document.querySelector("#root"));