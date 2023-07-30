import styles from "./styles.module.css";

import Article from "../article/Article";
import ContainerImageCard from "../container_image_card/ContainerImageCard";

import { informationsCards } from "../../../informations/informationsCards";
import ContainerInfosCards from "../container_infos_cards/ContainerInfosCards";

export default function ContainerCards() {
  return (
    <div className={styles.cards}>
      {informationsCards.map((item) => (
        <Article type='cards' key={item.id}>
          <ContainerImageCard
            image={item.image}
            alt={item.alt}
            width={item.width}
            height={item.height}
          />
          <ContainerInfosCards
            span={item.span}
            ariaLabel={item.ariaLabel}
            title={item.title}
            text={item.paragraph}
          />
        </Article>
      ))}
    </div>
  );
}
