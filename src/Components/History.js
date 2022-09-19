import { useData } from "../Context/DataContext";
import { Link } from "react-router-dom";
export const History = () => {
  const { history } = useData();
  console.log("history",history);
  return (
    <div>
      <h1  style={{textAlign:"center"}}>History</h1>
      {history?.videoItems?.map(({ _id, imgUrl, name, duration }) => (
        <div className="main-container ">
          <div key={_id} className="Card mid-width-card home-video-container">
            <Link to={`/${_id}`}>
              <img   style={{ height: "30vh", width: "100%" }} src={imgUrl} alt="history" />
              <div>{name}</div>
              <span   style={{  backgroundColor: "black",
                color: "white",position: "absolute", bottom: "115px", right: "60px" }}>{duration}</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};