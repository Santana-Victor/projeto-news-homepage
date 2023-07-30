import styles from "./styles.module.css";

export default function ContainerWeb({
  children,
}: {
  children: React.ReactNode;
}) {
  return <div className={styles.container_web}>{children}</div>;
}
