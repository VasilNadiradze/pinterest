import { useState } from "react";
import Img from "../../components/image/Image";
import "./profilepage.css";
import Gallery from "../../components/gallery/Gallery";
import Collections from "../../components/collections/Collections";

const ProfilePage = () => {
  const [type, setType] = useState("saved");
  return (
    <div className="profilePage">
      <Img src="/general/noAvatar.png" className="profileImg" w={100} h={100} />
      <h1 className="profileName">John Doe</h1>
      <span className="profileUsername">@johndoe</span>
      <div className="followCounts">10 followers - 20 followings</div>
      <div className="profileInteractions">
        <Img src="/general/share.svg" />
        <div className="profileButtons">
          <button>Message</button>
          <button>Follow</button>
        </div>
        <Img src="/general/more.svg" />
      </div>
      <div className="profileOptions">
        <span
          onClick={() => setType("created")}
          className={type === "created" ? "active" : ""}
        >
          Created
        </span>
        <span
          onClick={() => setType("saved")}
          className={type === "saved" ? "active" : ""}
        >
          Saved
        </span>
      </div>
      {type === "created" ? <Gallery /> : <Collections />}
    </div>
  );
};

export default ProfilePage;
