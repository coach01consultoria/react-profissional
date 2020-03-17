import React from "react";
import HelloWorld from "./components/HelloWord";
import Contador from "./components/Contador";
import Pacientes from "./components/Pacientes";
function App() {
  return (
    <div>
      {/* <h1>Hello World</h1>
      <p>Primeiro dia do curso</p>
      <HelloWorld /> */}
      {/* <Contador
        cor="blue"
        simbolo="adicionar"
        simbolo2="decrementar"
      ></Contador>
      <Contador cor="red" simbolo="+" simbolo2="-"></Contador> */}
      <Pacientes></Pacientes>
    </div>
  );
}

export default App;
