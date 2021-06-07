import { VideoDB } from "../DB/videoDB";
import { Link } from "react-router-dom";
import { useData } from "../Context/DataContext";
import { ADD_TO_HISTORY } from "../Reducer/reducer";
export const Home = () => {
  const { dataDispatch } = useData();
  return (
    <div>
      <h1>Home</h1>

      {VideoDB.map((videoitem) => (
        <div className="main-container">
          <div
            className="Card mid-width-card home-video-container"
            key={videoitem.id}
          >
            <Link
              onClick={() =>
                dataDispatch({ type: ADD_TO_HISTORY, video: videoitem })
              }
              style={{ textDecoration: "none", color: "black" }}
              to={`/${videoitem.id}`}
            >
              <img src={videoitem.imageURL} alt="videoitem.name" />
              <h3>{videoitem.name}</h3>
              <span
                style={{ position: "absolute", bottom: "115px", right: "60px" }}
              >
                Time:{videoitem.duration}
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
