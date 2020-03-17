import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export default class Contador extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 10
    };
  }

  incrementar = () => {
    let copiaContador = this.state.contador;
    copiaContador++;
    this.setState({ contador: copiaContador });
  };

  decrementar = () => {
    let copiaContador = this.state.contador;
    if (copiaContador === 0) {
      alert("Não é possivel decrementar");
    } else {
      copiaContador--;
      this.setState({ contador: copiaContador });
    }
  };
  render() {
    return (
      <div className="contador-fundo">
        <button
          className="btn"
          style={{
            background: this.props.cor,
            color: "#fff",
            fontSize: "16px"
          }}
          onClick={this.incrementar}
        >
          {this.props.simbolo}
        </button>
        <span>{this.state.contador}</span>
        <button
          style={{
            background: this.props.cor,
            color: "#fff",
            fontSize: "16px"
          }}
          onClick={this.decrementar}
        >
          {this.props.simbolo2}
        </button>
      </div>
    );
  }
}

Contador.propTypes = {
  simbolo: PropTypes.string.isRequired,
  simbolo2: PropTypes.string,
  cor: PropTypes.string
};
