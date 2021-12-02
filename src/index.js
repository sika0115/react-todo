import { StrictMode } from "react";
import ReactDOM from "react-dom";

import { App } from "./App"; //default exportからexportにしたので{}でAppを囲う

ReactDOM.render(<App />, document.getElementById("root"));
