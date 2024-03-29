import styles from "./styles.module.css";

export default function IconMenuClose() {
  return (
    <svg
      xmlns='http://www.w3.org/2000/svg'
      viewBox='0 0 32 31'
      className={styles.icon_close}
    >
      <g fill='#00001A' fill-rule='evenodd'>
        <path d='m2.919.297 28.284 28.284-2.122 2.122L.797 2.419z' />
        <path d='M.797 28.581 29.081.297l2.122 2.122L2.919 30.703z' />
      </g>
    </svg>
  );
}
