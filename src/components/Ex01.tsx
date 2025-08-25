import { Component } from "react";
interface State {
  email: string;
}

export default class Ex01 extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      email: "",
    };
  }
  handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    this.setState({
      email: e.target.value,
    });
  };

  handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    console.log(this.state);
  };

  render() {
    return (
      <div>
        <h2>Form</h2>
        <form onSubmit={this.handleSubmit}>
          <input
            type="email"
            name="email"
            placeholder="Nhập vào email"
            value={this.state.email}
            onChange={this.handleChange}
            required
          />
          <button type="submit"> submit</button>
        </form>
      </div>
    );
  }
}
