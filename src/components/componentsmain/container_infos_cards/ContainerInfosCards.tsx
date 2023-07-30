import styles from "./styles.module.css";

import Subtitle from "../subtitle/Subtitle";
import Paragraph from "../paragraph/Paragraph";

interface PropsInfosCards {
  span: string;
  ariaLabel: string;
  title: string;
  text: string;
}

export default function ContainerInfosCards({
  span,
  ariaLabel,
  title,
  text,
}: PropsInfosCards) {
  return (
    <div className={styles.container}>
      <span className={styles.container__span}>{span}</span>
      <Subtitle type='h3'>
        <a
          className={styles.container__subtitle}
          href='#'
          aria-label={ariaLabel}
        >
          {title}
        </a>
      </Subtitle>
      <Paragraph type='cards'>{text}</Paragraph>
    </div>
  );
}
