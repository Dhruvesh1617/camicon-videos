import { useState } from "react";
import { Link } from "react-router-dom";
const Sidebar = ({ setShowSideBar, showSideBar }) => {
  return (
    <div>
      <div className="close">
        <img
          onClick={() => setShowSideBar(!showSideBar)}
          className="icons-close"
          src="https://img.flaticon.com/icons/png/512/106/106830.png?size=1200x630f&pad=10,10,10,10&ext=png&bg=FFFFFFFF"
          alt="close"
        />
      </div>
      <div className="Items"><Link to="/liked">Liked</Link></div>
      <div className="Items"><Link to="/saved">Saved</Link></div>
      <div className="Items"><Link to="/history">History</Link></div>
      <div className="Items"><Link to="/playlist-videos">Playlist</Link></div>
    </div>
  );
};

export const Navigation = () => {
  const [showSideBar, setShowSideBar] = useState(false);
  return (
    <>
      <div>
        <img
          onClick={() => setShowSideBar((showSideBar) => !showSideBar)}
          className="hamburger"
          src="https://cdn4.iconfinder.com/data/icons/yellow-commerce/100/.svg-19-512.png"
          alt="hamburger"
        />
      </div>
      {showSideBar && (
        <Sidebar setShowSideBar={setShowSideBar} showSideBar={showSideBar} />
      )}
    </>
  );
};
