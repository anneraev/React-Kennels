import { BrowserRouter as Router } from "react-router-dom"
import ReactDom from "react-dom";
import React from "react"; //React must be in scope when using JSX.
import Kennel from "./components/Kennel/Kennel"//import Kennel to render it.
import "./index.css"

//First argument: Kennel class JSX object wrapped in router tag. Second argument: Callback function as a reference to the DOM element being written to.
ReactDom.render(
    <Router>
        <Kennel />
    </Router>
    , document.getElementById('root')
);