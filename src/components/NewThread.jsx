import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

import Header from "./Header";
import { createThreads, getThreads } from "../api";

const NewThread = (props) => {
  const { setThreads } = props;

  const [title, setTitle] = useState("");

  const navigate = useNavigate();

  const handleCreateThread = async () => {
    await createThreads({ title: title });
    const data = await getThreads();
    setThreads(data);
    navigate("/");
  };

  return (
    <div>
      <Header></Header>
      <Link to={"/"}>元の画面に戻る</Link>

      <input
        type="text"
        onChange={(event) => setTitle(event.target.value)}
      ></input>
      <button onClick={() => handleCreateThread()}>スレッドを立てる</button>
    </div>
  );
};

export default NewThread;
