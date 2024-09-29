import { image } from "../constants/Image";
import ImageCard from "./cards/ImageCard";

const Header = () => {
  return (
    <header className="text-center w-full min-h-[calc(100vh-100px)] max-[1000px]:overflow-x-hidden max-[1000px]:overflow-y-hidden">
      <div className="w-full flex flex-col font-serif text-[#FFEBD0] items-center">
        <h1 className="text-[76px]">My Fav</h1>
        <p className="text-[24px]">Fern from “Sousou no Frieren” Edition</p>
      </div>
      <div className="mx-auto mt-[10px] inline-flex w-max max-[1000px]:flex-col max-[1000px]:pb-[20px]">
        <ImageCard
          image={image[0].image}
          altImage={image[0].altImage}
          additionClass="rotate-[-5deg] translate-y-[30px] max-[1000px]:translate-y-[10px] max-[1000px]:rotate-[-5deg]"
        />
        <ImageCard
          image={image[2].image}
          altImage={image[2].altImage}
          additionClass="rotate-0 z-20 relative translate-y-[-10px] max-[1000px]:translate-y-[10px] max-[1000px]:rotate-[15deg]"
        />
        <ImageCard
          image={image[1].image}
          altImage={image[1].altImage}
          additionClass="rotate-[15deg] translate-y-[32px] max-[1000px]:translate-y-0 max-[1000px]:rotate-[-10deg] max-[1000px]:relative max-[1000px]:z-30"
        />
      </div>
    </header>
  );
};

export default Header;
