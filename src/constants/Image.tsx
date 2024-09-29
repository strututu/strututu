import fern1 from "../assets/fern1.png";
import fern2 from "../assets/fern2.png";
import fern3 from "../assets/fern3.png";
export type ImageProps = {
  altImage: string;
  image: string;
};
export const image: ImageProps[] = [
  {
    altImage: "fern1.png",
    image: fern1,
  },
  {
    altImage: "fern2.png",
    image: fern2,
  },
  {
    altImage: "fern3.png",
    image: fern3,
  },
];
