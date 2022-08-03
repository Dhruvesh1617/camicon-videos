import { useData } from "../Context/DataContext";
import { Link } from "react-router-dom";

export const SavedVideo = () => {
  const { savedvideo } = useData();
  console.log(savedvideo);
  return (
    <div>
      <h1 style={{textAlign:"center"}}>Saved-Videos</h1>
      {savedvideo.map(({ _id, imgUrl, name, duration }) => (
        <div className="main-container">
          <div key={_id} className="Card mid-width-card home-video-container">
            <Link to={`/${_id}`}>
              <img style={{ height: "30vh", width: "100%" }} src={imgUrl} alt="saved-video" />
              <div>{name}</div>
              <span
                style={{ backgroundColor: "black",
                color: "white", position: "absolute", bottom: "115px", right: "60px" }}
              >
              {duration}
              </span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
