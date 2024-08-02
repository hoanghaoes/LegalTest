import Navbar from "../components/Navbar";
import styles from "./Home.module.css";

const Home = () => {
  return (
    <div className={styles.home}>
      <Navbar />
      <footer className={styles.content}>
        <div className={styles.illustrationContainer}>
          <img
            className={styles.df1Icon}
            loading="lazy"
            alt=""
            src="/df-1@2x.png"
          />
        </div>
        <div className={styles.traCuThng}>Tra cứu thông tin pháp luật</div>
      </footer>
      <div className={styles.maincontent} />
    </div>
  );
};

export default Home;
