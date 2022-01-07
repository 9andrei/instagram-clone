import React from "react";
import ReactDOM from "react-dom";
import FirebaseContext from "./context/firebase";
import { firebase, FieldValue } from "./lib/firebase";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import './styles/app.css'

ReactDOM.render(
  <FirebaseContext.Provider value={{ firebase, FieldValue }}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </FirebaseContext.Provider>,
  document.getElementById("root")
);
