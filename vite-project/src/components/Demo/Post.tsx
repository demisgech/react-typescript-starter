import { Fragment, HtmlHTMLAttributes, useState } from "react";

const Post = (posts: string) => {
  const [post, setPost] = useState(posts);
  return (
    <Fragment>
      <h1>Hello {post}</h1>
      <button onClick={() => setPost("new Post")}>post</button>
    </Fragment>
  );
};

export default Post;
