import React from "react";
import styles from "./Banner.module.css";
import circuloColorido from "~/assets/circulo_colorido.png";

export default function Banner() {
  return (
    <div className={styles.banner}>
      <div className={styles.apresentacao}>
        <h1 className={styles.titulo}>Olá mundo</h1>
        <p className={styles.paragrafo}>
          Como um recém graduado de um bootcamp de desenvolvimento full stack, estou ansioso para impulsionar minha
          carreira como desenvolvedor júnior full stack. Com uma paixão por tecnologia e uma base sólida em
          desenvolvimento web, estou confiante em minha capacidade de contribuir para uma equipe dinâmica e
          colaborativa.
        </p>
      </div>
      <div className={styles.imagens}>
        <img className={styles.circuloColorido} src={circuloColorido} aria-hidden={true} />

        <img className={styles.minhaFoto} src="https://github.com/BpCampos.png" alt="Foto do Bruno" />
      </div>
    </div>
  );
}
