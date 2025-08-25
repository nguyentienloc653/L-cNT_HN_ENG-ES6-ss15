import { Component } from "react";
interface Post {
  id: number;
  title: string;
  content: string;
  author: string;
}

interface Props {
  post: Post;
}

export default class DetailPost extends Component<Props> {
  constructor(props: Props) {
    super(props);
  }
  render() {
    const { id, title, content, author } = this.props.post;
    return (
      <div>
        <div className="post-card">
          <h3>
            {id}. {title}
          </h3>
          <p>{content}</p>
          <p>
            <strong>Tác giả:</strong> {author}
          </p>
        </div>{" "}
      </div>
    );
  }
}
