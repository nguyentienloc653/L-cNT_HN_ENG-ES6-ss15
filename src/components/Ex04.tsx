import { Component } from "react";
interface State {
  range: string;
  submit: string;
}

export default class Ex04 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      range: "",
      submit: "",
    };
  }
  handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    this.setState({ range: e.target.value });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    this.setState({ submit: this.state.range });
  };
  render() {
    return (
      <div>
        <p>
          tiến độ hoành thành : {this.state.submit ? this.state.submit : ""} %
        </p>
        <form onSubmit={this.handleSubmit}>
          <input
            type="range"
            value={this.state.range}
            onChange={this.handleChange}
          />
          <button type="submit">submit</button>
        </form>
      </div>
    );
  }
}
