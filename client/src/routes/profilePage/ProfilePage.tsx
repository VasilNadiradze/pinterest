import Img from "../../components/image/Image";
import "./profilepage.css";

const ProfilePage = () => {
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
        <span>Created</span>
        <span>Saved</span>
      </div>
    </div>
  );
};

export default ProfilePage;
