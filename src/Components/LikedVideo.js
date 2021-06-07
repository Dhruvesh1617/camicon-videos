import { useData } from "../Context/DataContext";
import { Link } from "react-router-dom";
export const LikedVideo = () => {
  const { likedvideo } = useData();
  return (
    <div>
      Liked videos
      {likedvideo.map(({ id, imageURL, name, duration }) => (
        <div className="main-container">
          <div key={id} className="Card mid-width-card home-video-container">
            <Link to={`/${id}`}>
              <img src={imageURL} alt="liked-video" />
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
