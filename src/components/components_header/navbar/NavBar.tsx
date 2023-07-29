import { useState } from "react";

import styles from "./styles.module.css";

import { informationsNavBar } from "../../../informations/informationsNavBar";
import IconMenu from "../icon_menu/IconMenu";
import IconMenuClose from "../icon_menu_close/IconMenuClose";

export default function NavBar() {
  const [open, setOpen] = useState(false);
  return (
    <nav
      className={open ? `${styles.navbar} ${styles.open}` : `${styles.navbar}`}
    >
      <button
        className={styles.navbar__button}
        role='button'
        aria-label='Button to open a menu'
        onClick={() => {
          setOpen(!open);
        }}
      >
        {open ? <IconMenuClose /> : <IconMenu />}
      </button>
      <ul className={styles.navbar__menu}>
        {informationsNavBar.map((item) => (
          <li className={styles.menu__li} key={item.id}>
            <a href='#' className={styles.menu__a} aria-label={item.ariaLabel}>
              {item.content}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
