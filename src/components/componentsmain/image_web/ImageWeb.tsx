import LargeImage from "../../../assets/images/image-web-3-desktop.jpg";
import SmallImage from "../../../assets/images/image-web-3-mobile.jpg";

export default function ImageWeb() {
  return (
    <picture>
      <source media='(max-width: 700px)' srcSet={SmallImage} />
      <img src={LargeImage} width='1460' height='600' alt='Image web' />
    </picture>
  );
}
