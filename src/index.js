import React from "react";
import ReactDOMClient from "react-dom/client";
import "./index.css";
import Root from "./root/imdex";

const root = ReactDOMClient.createRoot(document.getElementById("root"));
root.render(<Root />);
