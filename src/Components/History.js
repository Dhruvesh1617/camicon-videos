import { useData } from "../Context/DataContext";
import { Link } from "react-router-dom";
export const History = () => {
  const { history } = useData();
  console.log(history);
  return (
    <div>
      {history.map(({ id, imageURL, name, duration }) => (
        <div className="main-container ">
          <div key={id} className="Card mid-width-card home-video-container">
            <Link to={`/${id}`}>
              <img src={imageURL} alt="history" />
              <div>{name}</div>
              <span>{duration}</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};