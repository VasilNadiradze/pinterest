export interface GalleryItemType {
  id: number;
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
