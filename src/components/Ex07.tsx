import { Component } from "react";

interface State {
  time: string;
}

export default class Ex07 extends Component<object, State> {
  timerId!: number;

  constructor(props: object) {
    super(props);
    this.state = { time: new Date().toLocaleTimeString() };
  }

  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState({ time: new Date().toLocaleTimeString() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return <div>Thời gian hiện tại: {this.state.time}</div>;
  }
}
