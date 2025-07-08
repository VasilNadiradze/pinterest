import { useState } from "react";
import Img from "../image/Image";
import "./comments.css";
import EmojiPicker from "emoji-picker-react";

const Comments = () => {
  const [showEmojis, setShowEmojis] = useState(false);

  return (
    <div className="comments">
      <div className="commentList">
        <span className="commentCount">5 comments</span>
        {/* COMMENT */}
        <div className="comment">
          <Img src="/general/noAvatar.png" />
          <div className="commentContent">
            <span className="commentUsername">Jon Doe</span>
            <p className="commentText">
              You are an amazing teacher, organized, sophisticated, the audience
              is confident that you will finish the job, come to Georgia 😎
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        {/* COMMENT */}
        <div className="comment">
          <Img src="/general/noAvatar.png" />
          <div className="commentContent">
            <span className="commentUsername">Jon Doe</span>
            <p className="commentText">
              You are an amazing teacher, organized, sophisticated, the audience
              is confident that you will finish the job, come to Georgia 😎🤘✊
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
        {/* COMMENT */}
        <div className="comment">
          <Img src="/general/noAvatar.png" />
          <div className="commentContent">
            <span className="commentUsername">Jon Doe</span>
            <p className="commentText">
              You are an amazing teacher, organized, sophisticated, the audience
              is confident that you will finish the job, come to Georgia 😎🤘✊
            </p>
            <span className="commentTime">1h</span>
          </div>
        </div>
      </div>
      <form action="" className="commentForm">
        <input type="text" placeholder="Add a comment" />
        <div className="emoji">
          <div onClick={() => setShowEmojis((prev) => !prev)}>🤘</div>
          {showEmojis && (
            <div className="emojiPicker">
              <EmojiPicker />
            </div>
          )}
        </div>
      </form>
    </div>
  );
};

export default Comments;
