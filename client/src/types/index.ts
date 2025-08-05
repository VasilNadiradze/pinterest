export interface GalleryItemType {
  _id: number;
  media: string;
  width: number;
  height: number;
}

export interface ImgProps {
  src: string;
  className?: string;
  alt?: string;
  w?: number;
  h?: number;
  onClick?: React.MouseEventHandler<HTMLImageElement>;
}

export interface FetchPinsParams {
  pageParam: number;
  search?: string;
  userId?: string;
  boardId?: string;
}

export interface GalleryProps {
  search?: string;
  userId?: string;
  boardId?: string;
}
