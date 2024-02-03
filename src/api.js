const request = async (path, options = null) => {
  const url = `https://railway.bulletinboard.techtrain.dev${path}`;
  const response = await fetch(url, options);
  return response.json();
};

export const getThreads = () => {
  return request("/threads");
};

export const postThreads = (data) => {
  return request("/threads", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  });
};
