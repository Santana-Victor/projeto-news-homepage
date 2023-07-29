import styles from "./styles.module.css";

import Logo from "../logo/Logo";
import NavBar from "../navbar/NavBar";

export default function Header() {
  return (
    <header className={styles.header} role='banner'>
      <Logo />
      <NavBar />
    </header>
  );
}
