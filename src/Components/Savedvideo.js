import { useData } from "../Context/DataContext";
import { Link } from "react-router-dom";

export const SavedVideo = () => {
  const { savedvideo } = useData();
  console.log(savedvideo);
  return (
    <div>
      Saved-Videos
      {savedvideo.map(({ id, imageURL, name, duration }) => (
        <div className="main-container">
          <div key={id} className="Card mid-width-card home-video-container">
            <Link to={`/${id}`}>
              <img src={imageURL} alt="saved-video" />
              <div>{name}</div>
              <span
                style={{ position: "absolute", bottom: "115px", right: "60px" }}
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
