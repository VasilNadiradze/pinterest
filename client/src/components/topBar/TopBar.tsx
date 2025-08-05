import { useNavigate } from "react-router";
import Img from "../image/Image";
import UserButton from "../userButton/UserButton";
import "./topbar.css";

const TopBar = () => {
  const navigate = useNavigate();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const search = (e.currentTarget[0] as HTMLInputElement).value;
    console.log("2 :" + search);
    navigate(`/search?search=${search}`);
  };

  return (
    <div className="topBar">
      {/* SEARCH */}
      <form onSubmit={handleSubmit} className="search">
        <Img src="/general/search.svg" />
        <input type="text" placeholder="Search" />
      </form>
      {/* USER */}
      <UserButton />
    </div>
  );
};

export default TopBar;
