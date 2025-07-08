import { Link } from "react-router";
import type { GalleryItemType } from "../../types";
import "./galleryitem.css";
import Img from "../image/Image";

interface GalleryItemProps {
  item: GalleryItemType;
}

const GalleryItem = ({ item }: GalleryItemProps) => {
  return (
    <div
      className="galleryItem"
      style={{ gridRowEnd: `span ${Math.ceil(item.height / 100)}` }}
    >
      <Img src={item.media} w={372} />
      <Link to={`/pin/${item.id}`} className="overlay" />
      <button className="saveButton">Save</button>
      <div className="overlayIcons">
        <button>
          <Img src="/general/share.svg" />
        </button>
        <button>
          <Img src="/general/more.svg" />
        </button>
      </div>
    </div>
  );
};

export default GalleryItem;
