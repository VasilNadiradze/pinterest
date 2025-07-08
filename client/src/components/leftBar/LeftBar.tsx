import "./leftbar.css";
import { Link } from "react-router";
import { Image } from "@imagekit/react";
import Img from "../image/Image";

const LeftBar = () => {
  return (
    <div className="leftBar">
      <div className="menuIcons">
        <Link to="/" className="menuIcon">
          <Image
            urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
            src="/general/logo.png"
            alt=""
          />
        </Link>
        <Link to="/" className="menuIcon">
          <Img src="/general/home.svg" />
        </Link>
        <Link to="/create" className="menuIcon">
          <Img src="/general/create.svg" />
        </Link>
        <Link to="/" className="menuIcon">
          <Img src="/general/updates.svg" />
        </Link>
        <Link to="/" className="menuIcon">
          <Img src="/general/messages.svg" />
        </Link>
      </div>
      <Link to="/" className="menuIcon">
        <Img src="/general/settings.svg" />
      </Link>
    </div>
  );
};

export default LeftBar;
