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

let filtro = []; // definição de lista filtro;

function filtrarPessoa(paciente) {
  return paciente.sexo === "Masculino";
}

const filtrarPessoaArrow = paciente => paciente.sexo === "Masculino";

for (let i = 0; i < pacientes.length; i++) {
  let paciente = pacientes[i];
  if (filtrarPessoaArrow(paciente)) {
    filtro.push(paciente);
  }
}
console.log("pacientes", pacientes);
console.log("pacientes filtrados", filtro);
