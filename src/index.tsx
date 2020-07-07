import * as React from "react";
import * as ReactDOM from "react-dom";
import Home from "./pages/Home";

if (module.hot) {
    module.hot.accept()
}

ReactDOM.render(
    <Home />,
    document.getElementById("app"),
);
