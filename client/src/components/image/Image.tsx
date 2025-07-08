import { Image } from "@imagekit/react";
import type { ImgProps } from "../../types";

const Img = ({ alt, src, className, w, h, onClick }: ImgProps) => {
  return (
    <Image
      urlEndpoint={import.meta.env.VITE_URL_IK_ENDPOINT}
      src={src}
      alt={alt}
      className={className}
      transformation={[{ width: w, height: h }]}
      loading="lazy"
      lgip={{ active: true, quality: 20 }}
      onClick={onClick}
    />
  );
};

export default Img;
