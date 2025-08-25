import { Component } from "react";

interface State {
  count: number;
}

export default class Ex08 extends Component<object, State> {
  timerId!: number;

  constructor(props: object) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  // chạy sau khi component render lần đầu
  componentDidMount() {
    this.timerId = window.setInterval(() => {
      this.setState((prevState) => ({
        count: (prevState.count + 1) % 11, 
      }));
    }, 1000);
  }

 
  componentWillUnmount() {
    clearInterval(this.timerId);
  }

  render() {
    return (
      <div>
        <h2>Bộ đếm</h2>
        <p>Giá trị hiện tại: {this.state.count}</p>
      </div>
    );
  }
}
