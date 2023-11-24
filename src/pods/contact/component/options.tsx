import { Anchor } from "../../../commons"; // Ajusta la importación según tu biblioteca de componentes
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faIdCard } from "@fortawesome/free-solid-svg-icons";
import Gallery from "react-image-gallery";
import "react-image-gallery/styles/css/image-gallery.css";

interface ImageItem {
  original: string;
  thumbnail: string;
}

interface OptionProps {
  images: ImageItem[];
  paragraphContent: string;
  anchorTitle: string;
  anchorUrl: string;
}

export const Option: React.FC<OptionProps> = ({
  images,
  paragraphContent,
  anchorTitle,
  anchorUrl,
}) => {
  return (
    <div>
      <p>{paragraphContent}</p>

      <Anchor title={anchorTitle} url={anchorUrl}>
        <FontAwesomeIcon icon={faIdCard} />
      </Anchor>
      <Gallery items={images} />
    </div>
  );
};
