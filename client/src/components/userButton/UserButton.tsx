import { useState } from "react";
import "./userbutton.css";
import Img from "../image/Image";

const UserButton = () => {
  const [open, setOpen] = useState(false);
  const currentUser = true;

  return currentUser ? (
    <div className="userButton">
      <Img src="/general/noAvatar.png" />
      <Img
        src="/general/arrow.svg"
        className="arrow"
        onClick={() => setOpen((prev) => !prev)}
      />
      {open && (
        <div className="userOptions">
          <div className="userOption">Profile</div>
          <div className="userOption">Settings</div>
          <div className="userOption">Logout</div>
        </div>
      )}
    </div>
  ) : (
    <a href="" className="loginLink">
      Login / Sign up
    </a>
  );
};

export default UserButton;
