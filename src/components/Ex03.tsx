import { Component } from "react";
interface State {
  birth: string;
  submit: string;
}
export default class Ex03 extends Component<{}, State> {
  constructor(props: {}) {
    super(props);
    this.state = {
      birth: "",
      submit: "",
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ birth: e.target.value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ submit: this.state.birth });
  };
  render() {
    return (
      <div>
        <p>Ngày sinh: {this.state.submit ? this.state.submit : ""}</p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="date"
            value={this.state.birth}
            onChange={this.handleChange}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
