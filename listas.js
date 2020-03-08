const pacientes = [
  {
    nome: "João",
    idade: 40,
    sexo: "Masculino"
  },
  {
    nome: "Maria",
    idade: 36,
    sexo: "Feminino"
  }
];

pacientes.push({
  nome: "José",
  sexo: "Masculino"
});

console.log("lista de pacientes", pacientes);
console.log("primeiro item", pacientes[0]);
console.log("ultimo item", pacientes[pacientes.length - 1]);

// ! verfica se propriedade é null, undefined,"",false
const pacientesMasculinos = pacientes.filter(
  paciente => paciente.sexo === "Masculino" && !paciente.idade
);

console.log("sexo masculino", pacientesMasculinos);
