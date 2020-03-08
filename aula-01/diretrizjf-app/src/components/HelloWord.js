import React from "react";

export default class HelloWorld extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <label>Nome</label>
        <input type="text" name="nome" />
      </div>
    );
  }
}
