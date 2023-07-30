import styles from "./styles.module.css";

export default function ButtonWeb() {
  return (
    <a
      href='#'
      className={styles.button}
      aria-label='Read more about the evolution of the web'
    >
      Read more
    </a>
  );
}
