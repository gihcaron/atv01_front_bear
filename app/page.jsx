import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Card from "../components/Card";
import styles from "../styles/Home.module.css";

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
      <main className={styles.main}>
        <div className={styles.box_container}>
          <Card
            title="Conheça o Share Bear!"
            text="“Precisa de alguma coisa? Qualquer coisa? Se Share Bear tiver, ela vai compartilhar! Despreocupada e amorosa, Share Bear fica mais feliz quando está com seus amigos – ou assando! Ela ama compartilhar tanto que demonstra isso com seu distintivo na barriga – dois pirulitos em formato de coração!”"
          />
          <Card
            title="Personalidade"
            text="Se compartilhar realmente é se importar, então Share Bear pode ser o melhor de todos. Esta ursa incrivelmente altruísta abriria mão de sua última posse para fazer alguém feliz, mesmo que ela não pudesse duplicá-la magicamente primeiro."
          />
          <Card
            title="Habilidades"
            text="Seu distintivo de barriga lhe dá o poder de criar pirulitos tangíveis, que podem ser usados para ajudá-la a resolver quaisquer problemas que ela possa estar enfrentando, embora esse método geralmente seja usado apenas como último recurso."
          />
        </div>
        <aside className={styles.aside}>
          <img className={styles.ursinho} src="/urso.jpg" alt="Urso" />
        </aside>
      </main>
      <Footer />
    </div>
  );
}
