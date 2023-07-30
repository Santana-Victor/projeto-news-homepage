import styles from "./styles.module.css";

import Section from "../section/Section";
import ContainerCards from "../container_cards/ContainerCards";

export default function Main() {
  return (
    <main className={styles.main} role='main'>
      <Section />
      <ContainerCards />
    </main>
  );
}
