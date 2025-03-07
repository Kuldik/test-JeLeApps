import styles from "./page.module.css";
import Square from './../components/Square/square';

export default function Home() {
  return (
    <div className={styles.page}>
      <Square />
    </div>
  );
}
