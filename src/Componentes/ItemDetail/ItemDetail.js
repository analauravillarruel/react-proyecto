import React, { useContext, useState } from 'react'
import { CartContext } from '../../Context/CartContext';
import { ItemCount } from '../ItemCount/ItemCount';
import styles from "../ItemDetail/ItemDetail.module.css";

export const ItemDetail = ( {item} ) => {

  const {carrito, agregarAlCarrito} = useContext(CartContext);
  console.log(carrito);

  const [cantidad,setCantidad]= useState(1);

  const handleRestar = () =>{
    cantidad> 1 && setCantidad(cantidad - 1)
  }

  const handleSumar = () =>{
    cantidad < item.stock && setCantidad(cantidad + 1)
  }




  return (
    <div className={styles.container}>
      <img src={item.img} alt={item.titulo}/>
      <div>
        <h3 className={styles.titulo} >{item.titulo}</h3>
        <p className={styles.descripcion}>{item.descripcion}</p>
        <p className={styles.categoria}>Categoria: {item.categoria}</p>
        <p className={styles.precio}>$ {item.precio}</p>
        <ItemCount cantidad={cantidad} handleRestar={handleRestar} handleSumar={handleSumar} handleAgregar={() => {agregarAlCarrito(item, cantidad)}}/>
      </div>

    </div>
  )
}
