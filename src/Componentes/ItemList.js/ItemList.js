import styles from "../ItemList/ItemList.module.css";

export const ItemList = ( {productos} ) => {
  
  return (
    <div>
      <h2>Productos</h2>
      
      <div className={styles.productos}>
        {productos.map((prod)=> <h2 key={prod.id}>{productos.titulo}</h2>)}
      </div>
    </div>
  )
}
