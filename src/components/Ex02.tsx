import { Component } from "react";
interface State {
  color: string;
  submit: string;
}

export default class Ex02 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      color: "",
      submit: "",
    };
  }

  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ color: e.target.value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ submit: this.state.color });
  };
  render() {
    return (
      <div>
        <h3>Color: {this.state.submit ? this.state.submit : ""}</h3>
        <form onSubmit={this.handleSubmit}>
          <input
            type="color"
            value={this.state.color}
            onChange={this.handleChange}
          />
          <br />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
