import "./App.css";

import { useState, useEffect } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { getThreads } from "./api";
import Home from "./components/Home";
import NewThread from "./components/NewThread";
import PostList from "./components/PostList";

function App() {
  const [threads, setThreads] = useState([]);

  useEffect(() => {
    (async () => {
      const data = await getThreads();
      setThreads(data);
    })();
  }, []);

  console.log(threads);

  return (
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<Home threads={threads} />} />
        <Route
          path={"/thread/new"}
          element={<NewThread setThreads={setThreads} />}
        />
        <Route
          path={"/thread/:thread_id"}
          element={<PostList threads={threads} />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
