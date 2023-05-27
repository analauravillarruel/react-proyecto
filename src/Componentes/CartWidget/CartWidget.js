import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import styles from "../CartWidget/CartWidget.module.css"
export const CartWidget = () => {

  const {cantidadEnCarrito} = useContext (CartContext);

  return (
    <div>
      <Link className={styles.menuLink} to="/carrito">
        Carrito
        <span> {cantidadEnCarrito()} </span>
      </Link>

    </div>
  )
}
