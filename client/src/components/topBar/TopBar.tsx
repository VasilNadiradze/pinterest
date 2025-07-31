import Img from "../image/Image";
import UserButton from "../userButton/UserButton";
import "./topbar.css";

const TopBar = () => {
  return (
    <div className="topBar">
      {/* SEARCH */}
      <div className="search">
        <Img src="/general/search.svg" />
        <input type="text" placeholder="Search" />
      </div>
      {/* USER */}
      <UserButton />
    </div>
  );
};

export default TopBar;