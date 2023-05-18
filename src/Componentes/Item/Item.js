import React from 'react'
import styles from "../Item/Item.module.css";

export const Item = ({producto}) => {
  return (
    <div className={styles.producto}>
      <img src={producto.img}/>
      <div>
        <h4>{producto.titulo}</h4>
        <p>Precio: $ {producto.precio}</p>
        <p>Categoria: {producto.categoria}</p>
        <a className={styles.verMas} href={`/item/${producto.id}`}>Ver mas</a>
      </div>

    </div>
  )
}
