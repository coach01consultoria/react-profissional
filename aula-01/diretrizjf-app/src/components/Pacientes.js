import React from "react";
import Paciente from "../models/paciente";
import "./style.css";

export default class Pacientes extends React.Component {
  constructor() {
    super();
    this.state = {
      paciente: new Paciente()
    };
  }

  dataBind = (event, prop) => {
    const name = event.target.name;
    const value = event.target.value;
    const copiaObject = this.state[prop];
    copiaObject[name] = value;
    this.setState({ [prop]: copiaObject });
  };

  reset = () => {
    this.setState({ paciente: new Paciente() });
  };

  render() {
    return (
      <div className="container-fluid">
        <div className="row">
          <div className="col-md-12">
            <div className="card">
              <div className="card-body">
                <h5 className="card-title">Pacientes</h5>
                {this.state.paciente.nome}
                <form>
                  <div className="form-row">
                    <div className="col-md-4">
                      <label>Nome*</label>
                      <input
                        className="form-control"
                        placeholder="Nome completo"
                        type="text"
                        name="nome"
                        required
                        value={this.state.paciente.nome}
                        onChange={event => this.dataBind(event, "paciente")}
                      />
                    </div>
                    <div className="col-md-4">
                      <label>Data de nascimento*</label>
                      <input
                        className="form-control"
                        type="date"
                        name="dataNascimento"
                        required
                        value={this.state.paciente.dataNascimento}
                        onChange={event => this.dataBind(event, "paciente")}
                      />
                    </div>
                    <div className="col-md-4">
                      <label>Estado civil*</label>
                      <select
                        name="estadoCivil"
                        required
                        className="form-control"
                        value={this.state.paciente.estadoCivil}
                        onChange={event => this.dataBind(event, "paciente")}
                      >
                        <option value="" disabled>
                          Selecione um opção
                        </option>
                        <option value="Solteiro">Solteiro</option>
                        <option value="Casado">Casado</option>
                        <option value="Separado">Separado</option>
                        <option value="Divorciado">Divorciado</option>
                        <option value="Viuvo">Viuvo</option>
                      </select>
                    </div>
                  </div>
                  <button
                    type="button"
                    className="btn btn-secondary mt-2 ml-2 float-right"
                    onClick={this.reset}
                  >
                    Limpar
                  </button>
                  <button className="btn btn-success mt-2 float-right">
                    Salvar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
