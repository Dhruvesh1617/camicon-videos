import { useData } from "../Context/DataContext";
import { Link } from "react-router-dom";
export const LikedVideo = () => {
  const { likedvideos } = useData();
  console.log(likedvideos)
  return (
    <div className="main-container">
    
      <h1  style={{textAlign:"center"}}>Liked videos</h1>
      {likedvideos?.videoItems?.map(({_id, imgUrl, name, duration }) => (
        <div >
          <div key={_id} className="Card mid-width-card home-video-container">
            <Link to={`/${_id}`}>
              <img src={imgUrl}  style={{ height: "30vh", width: "100%" }} alt="liked-video" />
              <div >{name}</div>
              <span
                style={{  backgroundColor: "black",
                color: "white",position: "absolute", bottom: "115px", right: "60px" }}
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
