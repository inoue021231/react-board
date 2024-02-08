import { Link, useParams } from "react-router-dom";
import Header from "./Header";
import { useEffect, useState } from "react";
import { createPost, getPosts } from "../api";

const PostList = (props) => {
  const { thread_id } = useParams();
  const [list, setList] = useState([]);
  const [post, setPost] = useState("");

  const handleCreatePost = async () => {
    await createPost(thread_id, { post });
    const data = await getPosts(thread_id);
    setList(data.posts);
  };

  useEffect(() => {
    (async () => {
      const data = await getPosts(thread_id);
      setList(data.posts);
    })();
  }, [thread_id]);

  return (
    <div>
      <Header></Header>
      <Link to={"/"}>元の画面に戻る</Link>
      <div style={{ marginLeft: "25%", marginRight: "25%" }}>
        {list.length !== 0 &&
          list.map((item) => (
            <p
              style={{
                padding: "10px",
                border: "1px solid #000",
              }}
              key={item.id}
            >
              {item.post}
            </p>
          ))}
        <input
          type="text"
          onChange={(event) => setPost(event.target.value)}
        ></input>
        <button onClick={() => handleCreatePost()}>投稿する</button>
      </div>
    </div>
  );
};

export default PostList;
