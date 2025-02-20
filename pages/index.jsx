import styles from "../styles/Home.module.css";
import ursinho from "../public/urso.jpg";
import Header from "../components/Header";
import Footer from "../components/footer";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header></Header>

      <main className={styles.main}>
        <div className={styles.box_container}>
            <div className={styles.box}>
                <h1 className={styles.box_text}> oi </h1>
                <p className={styles.box_paragraph}>oi</p>
            </div>
            <div className={styles.box}>
                <h1 className={styles.box_text}> oi </h1>
                <p className={styles.box_paragraph}>oi</p>
            </div>
            <div className={styles.box}>
                <h1 className={styles.box_text}> oi </h1>
                <p className={styles.box_paragraph}>oi</p>
            </div>

        </div>

      </main>

      <aside className={styles.aside}>
        <img src={ursinho} alt="" />
      </aside>

      <Footer></Footer>
    </div>
  );
}
