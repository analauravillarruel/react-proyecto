import React from 'react'
import styles from "../ItemDetail/ItemDetail.module.css";

export const ItemDetail = ( {item} ) => {
  return (
    <div className={styles.container}>
      <img src={item.img} alt={item.titulo}/>
      <div>
        <h3 className={styles.titulo} >{item.titulo}</h3>
        <p className={styles.descripcion}>{item.descripcion}</p>
        <p className={styles.categoria}>Categoria: {item.categoria}</p>
        <p className={styles.precio}>$ {item.precio}</p>
      </div>

    </div>
  )
}
