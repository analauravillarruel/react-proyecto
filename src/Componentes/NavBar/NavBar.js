import React from 'react'
import styles from "../NavBar/NavBar.module.css"
import { Link } from 'react-router-dom';
import { CartWidget } from '../CartWidget/CartWidget';
export const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <Link to="/" className={styles.logo}><h1>Tinta Roja</h1></Link>
      <ul className={styles.menu}>
        <li><Link className={styles.menuLink} to="/">Inicio</Link></li>
        <li><Link className={styles.menuLink} to="/productos">Productos</Link></li>
        <li><Link className={styles.menuLink} to="/productos/Tinto">Tinto</Link></li>
        <li><Link className={styles.menuLink} to="/productos/Blanco">Blanco</Link></li>
        <li><Link className={styles.menuLink} to="/productos/Rosado">Rosado</Link></li>
        <li><Link className={styles.menuLink} to="/contacto">Contacto</Link></li>
        <li>< CartWidget/></li>
      </ul>
    </nav>
  )
}
