import { Component } from "react";
import Ex01 from "./components/Ex01";
import Ex02 from "./components/Ex02";
import Ex03 from "./components/Ex03";
import Ex04 from "./components/Ex04";
import Ex05 from "./components/Ex05";
import ListPost from "./components/ListPost";
import Ex07 from "./components/Ex07";
import Ex08 from "./components/Ex08";

export default class App extends Component {
  render() {
    return (
      <div>
        <Ex01 />
        <Ex02 />
        <Ex03 />
        <Ex04 />
        <Ex05 />
        <ListPost />
        <Ex07 />
        <Ex08 />
      </div>
    );
  }
}
