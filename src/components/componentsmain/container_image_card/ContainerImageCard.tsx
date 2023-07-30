import styles from "./styles.module.css";

interface PropsImageCard {
  image: string;
  alt: string;
  width: number;
  height: number;
}

export default function ContainerImageCard({
  image,
  alt,
  width,
  height,
}: PropsImageCard) {
  return (
    <div className={styles.container}>
      <img src={image} alt={alt} width={width} height={height} />
    </div>
  );
}
