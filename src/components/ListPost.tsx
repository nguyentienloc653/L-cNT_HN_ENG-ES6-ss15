import { Component } from "react";
import DetailPost from "./DetailPost ";

interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface State {
  posts: Post[];
}

export default class ListPost extends Component<object, State> {
  constructor(props: object) {
    super(props);
    this.state = {
      posts: [
        {
          id: 1,
          title: "Tại sao nên học ReactJS",
          content: "Học để đi làm",
          author: "David",
        },
        {
          id: 2,
          title: "Props trong React",
          content: "Props giúp truyền dữ liệu từ component con xuống cpn cha",
          author: "Linda",
        },
        {
          id: 3,
          title: "State trong ReactJS là gì?",
          content: "State giúp giữ trạng thái dữ liệu bên trong một component",
          author: "David",
        },
      ],
    };
  }
  render() {
    return (
      <div>
        <div>
          <h2>Danh sách bài viết</h2>
          {this.state.posts.map((post) => (
            <DetailPost key={post.id} post={post} />
          ))}
        </div>
      </div>
    );
  }
}
