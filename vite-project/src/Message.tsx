import Post from "./components/Post";

function Message() {
  const name: string = "";
  if (name) return <h1>Hello {name} </h1>;
  return <h1>hello</h1>;
}

export default Message;
