import styles from "../ItemCount/ItemCount.module.css";

export const ItemCount = ({cantidad, handleRestar, handleSumar,handleAgregar}) => {


  return (
    <div>
      <div className={styles.itemCount}>
        <button onClick={handleRestar}> - </button>
        <p>{cantidad}</p>
        <button onClick={handleSumar}> + </button>
      </div>
      <button className={styles.agregarAlcarrito} onClick={handleAgregar} > Agregar al carrito </button>
    </div>
  )
}
