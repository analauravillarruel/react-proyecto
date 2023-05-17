import React from 'react'
import styles from "../NavBar/NavBar.module.css"

export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <a href='#' className={styles.logo}><h1>Tinta Roja</h1></a>
      <ul className={styles.menu}>
        <li><a className={styles.menuLink} href="#">Tinto</a></li>
        <li><a className={styles.menuLink} href="#">Blanco</a></li>
        <li><a className={styles.menuLink} href="#">Rosado</a></li>
      </ul>
    </nav>
  )
}
