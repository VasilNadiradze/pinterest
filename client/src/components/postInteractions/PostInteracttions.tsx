import Img from "../image/Image";
import "./postinteractions.css";

const PostInteracttions = () => {
  return (
    <div className="postInteractions">
      <div className="interactionIcons">
        <Img src="/general/react.svg" />
        178
        <Img src="/general/share.svg" />
        <Img src="/general/more.svg" />
      </div>
      <button>Save</button>
    </div>
  );
};

export default PostInteracttions;
