import React from "react";
import PostModelo from "~/components/PostModelo";
import fotoCapa from "~/assets/sobre_mim_capa.png";
import styles from "./SobreMim.module.css";
import fotoSobreMim from "~/assets/minha_foto.png";

export default function SobreMim() {
  return (
    <PostModelo fotoCapa={fotoCapa} titulo="Sobre mim">
      <h3 className={styles.subtitulo}>Olá, eu sou o Bruno</h3>
      <img src={fotoSobreMim} alt="Foto do Bruno" className={styles.fotoSobreMim} />

      <p className={styles.paragrafo}>
        Oi, tudo bem? Eu sou um desenvolver full stack e estou feliz de te ver por aqui.
      </p>
      <p className={styles.paragrafo}>
        Eu sou formado em Economia pela Pontifícia Universidade Católica de São Paulo, porém desde que entrei no mercado
        de trabalho voltado para essa área, percebi que o que o caminho que eu queria para minha vida profissional não
        era aquele. Foi então que pelo incentivo de um amigo, decidi me aventurar no mundo da programação.
      </p>
      <p className={styles.paragrafo}>
        Por isso minha história na programação começou quando eu decidi mudar minha área de atuação de economia para a
        área da tecnologia. A princípio, fui pesquisar quais áreas eu poderia seguir e através de sites e vídeos no
        YouTube, descobri que realmente gostava de mexer com desenvolvimento web, tanto na parte de front end como back
        end. Foi então que me matriculei no curso de Desenvolvedor Full Stack da Digital House e assinei a plataforma da
        Alura para servir como um suporte de conteúdo.
      </p>
      <p className={styles.paragrafo}>
        Atualmente me encontro procurando por vagas júnior para desenvolvedor front end e back end, ao mesmo tempo que
        continuo evoluindo meus conhecimentos e criando projetos que possam me ajudar a alcançar meu objetivo de
        trabalhar nessa área!
      </p>
    </PostModelo>
  );
}
