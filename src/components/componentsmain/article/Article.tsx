import styles from "./styles.module.css";

interface PropsArticle {
  type: string;
  children: React.ReactNode;
}

export default function Article({ type, children }: PropsArticle) {
  return (
    <article
      className={
        type === "aside"
          ? `${styles.aside__article}`
          : type === "cards"
          ? `${styles.cards__article}`
          : `${styles.web__article}`
      }
      role='article'
    >
      {children}
    </article>
  );
}
