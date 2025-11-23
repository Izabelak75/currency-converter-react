import { useState } from "react";
import "./App.css";
import { Form } from "./Form";
import { Clock } from "./Clock";
import { currencies } from "./currencies";

function App() {
  return (
    <div className="app">
      <Clock />
      <Form />
    </div>
  );
}

export default App;
