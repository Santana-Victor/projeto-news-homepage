import styles from "./styles.module.css";

import Subtitle from "../subtitle/Subtitle";
import Article from "../article/Article";
import Paragraph from "../paragraph/Paragraph";

import { informationsAside } from "../../../informations/informationsAside";

export default function Aside() {
  return (
    <aside className={styles.aside}>
      <Subtitle type='h2'>New</Subtitle>
      {informationsAside.map((item) => (
        <Article type='aside' key={item.id}>
          <Subtitle type='h3'>
            <a className={styles.aside__a} href='#'>
              {item.title}
            </a>
          </Subtitle>
          <Paragraph type='aside'>{item.paraggraph}</Paragraph>
        </Article>
      ))}
    </aside>
  );
}
