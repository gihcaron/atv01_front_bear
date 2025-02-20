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
                <h1 className={styles.box_text}> Conheça o Share Bear! </h1>
                <p className={styles.box_paragraph}>“ Precisa de alguma coisa? Qualquer coisa? Se Share Bear tiver, ela vai compartilhar! Despreocupada e amorosa, Share Bear fica mais feliz quando está com seus amigos – ou assando! Ela ama compartilhar tanto que demonstra isso com seu distintivo na barriga – dois pirulitos em formato de coração! ”</p>
            </div>
            <div className={styles.box}>
                <h1 className={styles.box_text}> Personalidade </h1>
                <p className={styles.box_paragraph}>Se compartilhar realmente é se importar, então Share Bear pode ser o melhor de todos. Esta ursa incrivelmente altruísta abriria mão de sua última posse para fazer alguém feliz, mesmo que ela não pudesse duplicá-la magicamente primeiro. </p>
            </div>
            <div className={styles.box}>
                <h1 className={styles.box_text}> Habilidades </h1>
                <p className={styles.box_paragraph}>Seu distintivo de barriga lhe dá o poder de criar pirulitos tangíveis, que podem ser usados ​​para ajudá-la a resolver quaisquer problemas que ela possa estar enfrentando, embora esse método geralmente seja usado apenas como último recurso. </p>
            </div>

        </div>

      <aside className={styles.aside}>
        <img className={styles.ursinho} src="/urso.jpg" alt="" />
      </aside>

      </main>



      <Footer></Footer>
    </div>
  );
}
