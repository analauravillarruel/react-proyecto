import React from 'react'
import styles from "../Item/Item.module.css";
import {Link} from "react-router-dom"

export const Item = ({producto}) => {
  return (
    <div className={styles.producto}>
      <img src={producto.img} alt={producto.titulo}/>
      <div>
        <h4>{producto.titulo}</h4>
        <p>Precio: $ {producto.precio}</p>
        <p>Categoria: {producto.categoria}</p>
        <Link className={styles.verMas} to={`/item/${producto.id}`}>Ver mas</Link>
      </div>

    </div>
  )
}
