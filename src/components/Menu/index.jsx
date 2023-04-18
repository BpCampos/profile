import React from "react";
import styles from "./menu.module.css";
import MenuLink from "../MenuLink";

export default function Menu() {
  return (
    <header>
      <nav className={styles.navegacao}>
        <MenuLink to={"/"}>Início</MenuLink>
        <MenuLink to={"/sobremim"}>Sobre mim</MenuLink>
      </nav>
    </header>
  );
}
