import { Link, useNavigate } from "react-router-dom";
import Header from "./Header";

const Home = (props) => {
  const { threads } = props;
  const navigate = useNavigate();
  return (
    <div>
      <Header></Header>
      <Link to={"/thread/new"}>スレッドを立てる</Link>
      {threads.length !== 0 &&
        threads.map((item) => (
          <p
            style={{
              marginLeft: "25%",
              marginRight: "25%",
              padding: "10px",
              border: "1px solid #000",
            }}
            onClick={() => navigate(`/thread/${item.id}`)}
            key={item.id}
          >
            {item.title}
          </p>
        ))}
    </div>
  );
};

export default Home;
