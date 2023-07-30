import styles from "./styles.module.css";

import ImageWeb from "../image_web/ImageWeb";
import Article from "../article/Article";
import Title from "../title/Title";
import ContainerWeb from "../container_web/ContainerWeb";
import Paragraph from "../paragraph/Paragraph";
import ButtonWeb from "../button_web/ButtonWeb";
import Aside from "../aside/Aside";

export default function Section() {
  return (
    <section className={styles.shop_window}>
      <div>
        <ImageWeb />
        <Article type='web'>
          <Title />
          <ContainerWeb>
            <Paragraph type='web'>
              We dive into the next evolution of the web that claims to put the
              power of the platforms back into the hands of the people. But is
              it really fulfilling its promise?
            </Paragraph>
            <ButtonWeb />
          </ContainerWeb>
        </Article>
      </div>
      <Aside />
    </section>
  );
}
