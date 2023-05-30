import React, { useContext } from 'react'
import {Link} from 'react-router-dom'
import { CartContext } from '../../Context/CartContext'
import styles from "../CartWidget/CartWidget.module.css"
export const CartWidget = () => {

  const {cantidadEnCarrito} = useContext (CartContext);

  return (
    <div>
      <Link className={styles.carrito} to="/carrito">
        <i class='bx bx-cart'></i>
        <span> {cantidadEnCarrito()} </span>
      </Link>

    </div>
  )
}
