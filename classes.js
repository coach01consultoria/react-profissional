class Pessoa {
  nome = "";
  dataNascimento = "";
  sexo = "";

  constructor(nome, dataNascimento, sexo) {
    this.nome = nome;
    this.dataNascimento = dataNascimento;
    this.sexo = sexo;
  }
}

class Medico extends Pessoa {
  especialidade = "";
  constructor(nome, dataNascimento, sexo, especialidade) {
    super(nome, dataNascimento, sexo);
    this.especialidade = especialidade;
  }

  apelido() {
    //return "Dr." + this.nome;
    return `Dr. ${this.nome} - ${this.especialidade}`;
  }
}

const pessoa = new Pessoa("tiago", "14/08/1996", "masculino");
const pessoa2 = new Pessoa("Maycon", "14/08/1987", "masculino");
const pessoa3 = new Pessoa();
const medico = new Medico("carlos", "14/02/1980", "Masculino", "cardiologista");

medico.nome = "João";

console.log(pessoa);
console.log(pessoa2);
console.log(pessoa3);
console.log(medico);
console.log(medico.apelido());
