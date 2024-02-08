const request = async (path, options = null) => {
  const url = `https://railway.bulletinboard.techtrain.dev${path}`;
  const response = await fetch(url, options);
  return response.json();
};

export const getThreads = () => {
  return request("/threads");
};

export const createThreads = (data) => {
  return request("/threads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};

export const getPosts = (thread_id) => {
  return request(`/threads/${thread_id}/posts`);
};

export const createPost = (thread_id, data) => {
  console.log(thread_id);
  console.log(data);
  return request(`/threads/${thread_id}/posts`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
