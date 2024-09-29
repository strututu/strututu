import { ImageProps } from "../../constants/Image";

const ImageCard = ({
  image,
  altImage,
  additionClass,
}: {
  image: ImageProps["image"];
  altImage: ImageProps["altImage"];
  additionClass: string;
}) => {
  return (
    <figure data-aos="zoom-out-left" data-aos-duration="500">
      <img
        className={`rounded-3xl w-[280px] inline shadow-xl${additionClass}`}
        src={image}
        alt={altImage}
      />
    </figure>
  );
};

export default ImageCard;
