import styles from "./styles.module.css";

interface PropsParagraph {
  type: string;
  children: string;
}

export default function Paragraph({ type, children }: PropsParagraph) {
  return (
    <p
      className={
        type === "aside"
          ? `${styles.aside__paragraph}`
          : type === "cards"
          ? `${styles.cards__paragraph}`
          : `${styles.paragraph}`
      }
    >
      {children}
    </p>
  );
}
