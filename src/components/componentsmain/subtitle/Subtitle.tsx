import styles from "./styles.module.css";

interface PropsSubtitle {
  type: string;
  children: React.ReactNode;
}

export default function Subtitle({ type, children }: PropsSubtitle) {
  return (
    <>
      {type === "h2" ? (
        <h2 className={styles.subtitle_aside}>{children}</h2>
      ) : (
        <h3>{children}</h3>
      )}
    </>
  );
}
