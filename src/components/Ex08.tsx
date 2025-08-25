import { Component } from "react";

interface State {
  count: number;
}

export default class Ex08 extends Component<object, State> {
  timerId!: number; // lưu interval ID

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
        count: (prevState.count + 1) % 11, // khi =10 thì quay về 0
      }));
    }, 1000);
  }

  // chạy khi component bị gỡ
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
